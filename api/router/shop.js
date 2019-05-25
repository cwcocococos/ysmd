const db = require("../module/db");
const {getPageList} = require("../module/common")
const {upPic} = require("../module/upPic");
const mongodb = require("mongodb");

<<<<<<< HEAD
/*商品类别*/
// 添加商品类别
=======
/*************************店铺类别*****************************************/
// 添加店铺类别
>>>>>>> 0e6e9dd6b5fe4814962f734a1439f9cbe0a54081
module.exports.addShopType = function (req,res) {
    upPic(req,"shopTypePic",function (obj) {
        if(obj.ok === 3){
            db.insertOne("shopTypeList",{
                shopTypeName:obj.params.shopTypeName,
                shopTypePic:obj.params.newPicName,
                shopTypeUrl:obj.params.shopTypeUrl,
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

// 获得商品类别
module.exports.getShopTypeList = function (req,res) {
    console.log(req.query);
    var search = req.query.search || "";
    var whereObj = {};
    if(search.length > 0){
        whereObj.shopTypeName = new RegExp(search);
    }
    getPageList(req,res,"shopTypeList",{
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
<<<<<<< HEAD

// 获得商品所有类别
=======
//获取全部
// 获得店铺所有类别
>>>>>>> 0e6e9dd6b5fe4814962f734a1439f9cbe0a54081
module.exports.getAllShopTypeList = function (req,res) {
    db.find("shopTypeList",{
        sortObj:{addTime:1}
    },function (err,shopTypeList) {
        res.json({
            ok:1,
            shopTypeList
        })
    })
}
<<<<<<< HEAD
/*商品*/
// 添加商品
=======
/*************************店铺*****************************************/
// 添加店铺
>>>>>>> 0e6e9dd6b5fe4814962f734a1439f9cbe0a54081
module.exports.addShop = function(req,res){
    upPic(req,"shopPic",function (obj) {
        if(obj.ok === 3){
            db.findOneById("shopTypeList",obj.params.shopTypeId,function (err,shopType) {
                db.insertOne("shopList",{
                    shopName:obj.params.shopName,
                    shopPic:obj.params.newPicName,
                    // shopTypeId:mongodb.ObjectId(obj.params.shopTypeId),
                    shopTypeId:shopType._id,
                    shopTypeName:shopType.shopTypeName,
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

// 店铺列表
module.exports.getShopList = function (req,res) {
    getPageList(req,res,"shopList",{
        sortObj:{
            addTime:-1
        }
    })
}
<<<<<<< HEAD
/*商品*/
// 根据 ID来查找商品。
=======
module.exports.getAllShopList = function (req,res) {
    db.find("shopList",{
        sortObj:{addTime:1}
    },function (err,shopList) {
        res.json({
            ok:1,
            shopList
        })
    })
}

//按照ID查询商品
module.exports.getGoodsByShopTypeId = function(req,res){
    console.log(req.query)
    db.find("shopList",{
        whereObj:{
            shopTypeName:req.query.shopTypeName
        },
        sortObj:{addTime:1}
    },function (err,shopList) {
        res.json({
            ok:1,
            shopList
        })
    })
}

/*****************************商品***************************************/
// 根据 D来查找店铺。
>>>>>>> 0e6e9dd6b5fe4814962f734a1439f9cbe0a54081
module.exports.getShopListByTypeId= function (req,res) {
    console.log(req.query)
    db.find("shopList",{
        whereObj:{
            shopTypeId:mongodb.ObjectId(req.query.shopTypeId)
        }
    },function (err,shopList) {
        res.json({
            ok:2,
            shopList
        })
    })
}
module.exports.getShopListByTypeName= function (req,res) {
    console.log(req.query)
    db.find("shopList",{
        whereObj:{
            // shopTypeName:mongodb.ObjectId(req.query.shopTypeName)
            shopTypeName:req.query.shopTypeName
        }
    },function (err,shopList) {
        res.json({
            ok:2,
            shopList
        })
    })
}