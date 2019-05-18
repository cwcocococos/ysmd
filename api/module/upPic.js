const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const tool = require("./tool")

module.exports.upPic = function (req,picName,cb) {
    var form = new formidable.IncomingForm();
    form.encoding = "utf-8";
    form.uploadDir = path.resolve(__dirname,"../upload");
    form.keepExtensions = true;
    // 将form数据进行转换。
    form.parse(req,function (err,params,file) {
        var picInfo = file[picName];
        if(picInfo.size > 0){
            let extName = path.extname(picInfo.name);
            let extArr =[".jpg",".png",".gif",".webp"];
            if(extArr.includes(extName)){
                let newPicName = Date.now()+""+tool.getRandom(100000,999999)+extName;
                fs.rename(picInfo.path,form.uploadDir+"/"+newPicName,function () {
                    params.newPicName = newPicName;
                    cb({
                        ok:3,// 未上传图片
                        msg:"上传图片成功",
                        params
                    })
                })
            }else{
                fs.unlink(picInfo.path,function () {
                    cb({
                        ok:2,// 未上传图片
                        msg:"请上传符合要求的图片，.jpg,.png,.gif"
                    })
                })
            }
        }else{
            fs.unlink(picInfo.path,function () {
                cb({
                    ok:1,// 未上传图片
                    msg:"未上传图片",
                    params
                })
            })
        }
    })
}