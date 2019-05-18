const express = require("express");
const admin = require("./router/admin");
const shop = require("./router/shop");
const lead = require("./router/lead");

const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname+"/upload"))
app.use(bodyParser.json());
// 登陆接口
app.post("/login",admin.login);
app.get("/adminLog",admin.adminLog);

/******店铺类别相关******/
app.post("/addShopType",shop.addShopType);
app.get("/getShopTypeList",shop.getShopTypeList);
app.get("/getAllShopTypeList",shop.getAllShopTypeList);

/****店铺相关*****/
app.post("/addShop",shop.addShop);
app.get("/shopList",shop.getShopList);
app.get("/getShopListByTypeId",shop.getShopListByTypeId);

/* 前端 */
app.get("/getShopList",lead.getShopList)

app.listen(80,function () {
    console.log("success");
})