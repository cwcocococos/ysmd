const express = require("express");
const admin = require("./router/admin");
const shop = require("./router/shop");
const adv = require("./router/adv")

const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname+"/upload"))
app.use(bodyParser.json());
// 登陆接口
app.post("/login",admin.login);
app.get("/adminLog",admin.adminLog);

/*商品类别相关*/
app.post("/addShopType",shop.addShopType);
app.get("/getShopTypeList",shop.getShopTypeList);
app.get("/getAllShopTypeList",shop.getAllShopTypeList);
app.get("/getShopListByTypeName",shop.getShopListByTypeName)
/*商品*/
app.post("/addShop",shop.addShop);
app.get("/shopList",shop.getShopList);
app.get("/getShopListByTypeId",shop.getShopListByTypeId);

/*广告类别*/
app.post("/addAdvType",adv.addAdvType);
app.get("/getAdvTypeList",adv.getAdvTypeList);
app.get("/getAllAdvTypeList",adv.getAllAdvTypeList);

/*广告*/
app.post("/addAdv",adv.addAdv);
app.get("/advList",adv.getAdvList);
app.get("/getAdvListByTypeId",adv.getAdvListByTypeId);


app.listen(80,function () {
    console.log("success");
})