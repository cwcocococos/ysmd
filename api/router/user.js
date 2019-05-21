const db = require("../module/db");
const tool = require("../module/tool");
const token = require("../module/token");
module.exports.register=function (req,res) {
    var phoneId = req.body.phoneId;
    var code = req.body.code/1;
    console.log(req.body);
    db.findOne("phoneCode",{phoneId,code},function (err,info) {
        if(info){
            if((Date.now()-info.sendTime)<=120*1000){
                // 有效
                db.findOne("userList",{phoneId},function (err,userInfo) {
                    if(userInfo){
                        db.updateOne("userList",{phoneId},{
                            $set:{
                                lastLoginTime:Date.now(),
                            }
                        },function (err,results) {
                            res.json({
                                ok:1,
                                phoneId,
                                msg:"登陆成功"
                            })
                        })
                    }else{
                        db.insertOne("userList",{
                            phoneId,
                            lastLoginTime:Date.now(),
                            regTime:Date.now(),
                            moneySum:999999
                        },function (err,results) {
                            res.json({
                                ok:1,
                                phoneId,
                                msg:"登陆成功"
                            })
                        })
                    }
                })
            }else{
                res.json({
                    ok:-1,
                    msg:"验证码过期"
                })
            }
        }else{
            res.json({
                ok:-1,
                msg:"手机号或验证码错误"
            })
        }
    })
};
module.exports.userReg = function (req,res) {
    setTimeout(()=>{
        /*
   * 1、ajax请求的时候需要验证token
   * 2、前端发送token
   * 3、后端验证
   * 4、验证token失败，返回ok:-2*/
        console.log(req.headers.authorization);
        var status = token.decode(req.headers.authorization);
        // token成功
        if(status.ok === 1){
            var whereObj = {
                userName:status.info.userName
            };
            var pageIndex = req.query.pageIndex/1;
            var limitNum=5;
            db.count("userList",whereObj,function (count) {
                db.find("userList",{
                    whereObj,
                    limitNum,
                    skipNum:(pageIndex-1)*limitNum,
                    sortObj:{registerTime:-1}
                },function (err,userReg) {
                    var pageSum =Math.ceil(count/limitNum) ;
                    if(pageSum<1)
                        pageSum =1;
                    if(pageIndex>pageSum)
                        pageIndex = pageSum;
                    if(pageIndex<1)
                        pageIndex =1;
                    res.json({
                        ok:1,
                        userReg,
                        pageIndex,
                        pageSum
                    })
                })
            })

        }else{
            res.json({
                ok:-2,
                msg:"token异常"
            });
        }
    },2000)
};
module.exports.sendCode=function (req,res) {
    /*
    * 1、接收数据
    * 2、查看手机号是不是在我的验证码集合当中
    *   1、有
    *       判断时间是否过到期（1分钟）
    *           1、到期，发送验证码
    *           2、没到期，等多少秒以再来发
    *   2、无
    *       发送验证码*/
    var phoneId = req.query.phoneId;
    console.log(phoneId)
    db.findOne("phoneCode",{phoneId},function (err,info) {
        var code = tool.getRandom(100000,999999);
        if(info){
            const lTime =Date.now()-info.sendTime;// 发送时间与当前时间之差
            if(lTime<=10*1000){
                res.json({
                    ok:-1,
                    // msg:"您还需要再等待"+10-(Date.now()-info.sendTime)/1000+"秒"
                    msg:"您还需要再等待"+(120*1000-lTime)/1000+"秒"
                })
            }else{
                db.updateOne("phoneCode",{phoneId},{
                    $set:{
                        code,
                        sendTime:Date.now()
                    }
                },function (err,results) {
                    res.json({
                        ok:1,
                        msg:"发送验证码成功",
                        code
                    })
                })
            }
        }else{
            db.insertOne("phoneCode",{
                phoneId,
                code,
                sendTime:Date.now()
            },function (err,results) {
                res.json({
                    ok:1,
                    msg:"发送验证码成功",
                    code
                })
            })
        }
    })
};
module.exports.getTime=function (req,res) {
    var phoneId = req.query.phoneId;
    console.log(phoneId);
    db.findOne("phoneCode",{phoneId},function (err,info) {
        const timeNum =parseInt(10-(Date.now()-info.sendTime)/1000);
        res.json({
            ok:1,
            timeNum:(timeNum>0?timeNum:0),
            msg:"成功"
        })

    })
};