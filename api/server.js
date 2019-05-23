const express = require("express");
const admin = require("./router/admin");
const shop = require("./router/shop");
<<<<<<< Updated upstream
const lead = require("./router/lead");
const user= require("./router/user");
const db=require("./module/db");
=======
>>>>>>> Stashed changes

const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname+"/upload"));
app.use(bodyParser.json());
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    next();
});
// 登陆接口
app.post("/login",admin.login);
app.get("/adminLog",admin.adminLog);
//用户登录接口
app.post("/register",user.register);
app.get("/userReg",user.userReg);
app.get("/sendCode",user.sendCode);
app.get("/getTime",user.getTime);

/*********************店铺类别相关**********************************/
app.post("/addShopType",shop.addShopType);
app.get("/getShopTypeList",shop.getShopTypeList);
app.get("/getAllShopTypeList",shop.getAllShopTypeList);

/*********************店铺相关**********************************/
app.post("/addShop",shop.addShop);
app.get("/shopList",shop.getShopList);
app.get("/getAllshopList",shop.getAllShopList);
app.get("/getShopListByTypeId",shop.getShopListByTypeId);
//获取一类商品信息
app.get("/getGoodsByShopTypeId",shop.getGoodsByShopTypeId);





<<<<<<< Updated upstream
/* 前端 */
app.get("/getShopList",lead.getShopList);
=======
>>>>>>> Stashed changes

app.listen(80,function () {
    console.log("success");
})