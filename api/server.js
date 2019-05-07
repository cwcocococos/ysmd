const express = require("express");
const admin = require("./router/admin");
const shop = require("./router/shop");

const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname+"/upload"))
app.use(bodyParser.json());
// 登陆接口
app.post("/login",admin.login);
app.get("/adminLog",admin.adminLog);

/*********************添加店铺类别**********************************/
app.post("/addShopType",shop.addShopType);
app.get("/getShopTypeList",shop.getShopTypeList);







app.listen(80,function () {
    console.log("success");
})