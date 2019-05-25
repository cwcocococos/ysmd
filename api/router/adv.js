const db = require("../module/db");
const {getPageList} = require("../module/common")
const {upPic} = require("../module/upPic");
const mongodb = require("mongodb");

/****店铺类别******/
// 添加店铺类别
module.exports.addAdvType = function (req,res) {
    upPic(req,"advTypePic",function (obj) {
        if(obj.ok === 3){
            db.insertOne("advTypeList",{
                advTypeName:obj.params.advTypeName,
                advTypePic:obj.params.newPicName,
                addTime:Date.now()
            },function (err,results) {
                res.json({
                    ok:1,
                    msg:"上传成功"
                })
            })
        }else{
            res.json({
                ok:-1,
                msg:obj.msg
            })
        }

        // res.json(obj);
    })
}

// 获得店铺类别
module.exports.getAdvTypeList = function (req,res) {
    console.log(req.query);
    var search = req.query.search || "";
    var whereObj = {};
    if(search.length > 0){
        whereObj.advTypeName = new RegExp(search);
    }
    getPageList(req,res,"advTypeList",{
        sortObj:{
            addTime:-1
        },
        whereObj
    })
    // var pageIndex = req.query.pageIndex?req.query.pageIndex/1:1;
    //  db.count("shopTypeList",{},function (count) {
    //      var pageSum = Math.ceil(count/config.limitNum);
    //      if(pageSum < 1)
    //          pageSum =1;
    //      if(pageIndex > pageSum)
    //          pageIndex = pageSum;
    //      if(pageIndex <1)
    //          pageIndex = 1;
    //      db.find("shopTypeList",{
    //          sortObj:{
    //              addTime:-1
    //          }
    //      },function (err,shopTypeList) {
    //          res.json({
    //              shopTypeList,
    //              pageSum,
    //              pageIndex
    //          })
    //      })
    //  })

}

// 获得店铺所有类别
module.exports.getAllAdvTypeList = function (req,res) {
    db.find("advTypeList",{
        sortObj:{addTime:-1}
    },function (err,advTypeList) {
        res.json({
            ok:1,
            advTypeList
        })
    })
}
/*****商品******/
// 添加商品
module.exports.addAdv = function(req,res){
    upPic(req,"advPic",function (obj) {
        if(obj.ok === 3){
            db.findOneById("advTypeList",obj.params.advTypeId,function (err,advType) {
                db.insertOne("advList",{
                    advName:obj.params.advName,
                    advPic:obj.params.newPicName,
                    // shopTypeId:mongodb.ObjectId(obj.params.shopTypeId),
                    advTypeId:advType._id,
                    advTypeName:advType.advTypeName,
                    addTime:Date.now()
                },function (err,results) {
                    res.json({
                        ok:1,
                        msg:"上传成功"
                    })
                })
            })

        }else{
            res.json({
                ok:-1,
                msg:obj.msg
            })
        }

        // res.json(obj);
    })
}

// 商品列表
module.exports.getAdvList = function (req,res) {
    getPageList(req,res,"advList",{
        sortObj:{
            addTime:-1
        }
    })
}
/********商品*******/
// 根据 D来查找店铺。
module.exports.getAdvListByTypeId= function (req,res) {
    db.find("advList",{
        whereObj:{
            advTypeId:mongodb.ObjectId(req.query.advTypeId)
        }
    },function (err,advList) {
        res.json({
            ok:2,
            advList
        })
    })
}