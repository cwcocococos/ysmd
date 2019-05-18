module.exports.getShopList=function (req,res) {
    if(req.query.advType && req.query.topNum){
        let advType = req.query.advType/1;
        let limitNum = req.query.topNum/1;
        db.find("shopList",{
            whereObj:{
                advType
            },
            limitNum,
            sortObj:{
                orderBy:-1,
                addTime:-1
            }
        },function (err,advList) {
            res.json({
                ok:1,
                advList
            })
        })
    }else{
        res.json({
            ok:-1,
            msg:"网络连接错误"
        })
    }
}