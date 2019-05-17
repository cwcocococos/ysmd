<template>
    <div>
        <header>
            <div class="top">
                <a href="#"><i class="iconfont">&#xe60b;</i></a>
            </div>
        </header>
        <section>
            <div class="phone">
                <h1>
                    手机号登陆
                </h1>
            </div>
            <div class="phoneNumber">
                <input type="text" value="请输入手机号">
            </div>
            <div class="VerificationCode">
                <input type="text" value="请输入短信验证码"><a href="#">获取验证码</a>
            </div>
            <div class="code">
                <a href="#"><p>用账号密码登陆 > </p></a>
            </div>

            <button class="denglu"><h2>登陆</h2></button>

            <div class="Agreement">
                <input type="checkbox"  value="值"    name="名称"   checked="checked"/><a href="#">已阅读并同意小米<u>账号协议</u>、<u>隐私政策</u>和<u>小米商城用户协议</u></a>
            </div>

            <div class="footer">
                <li><a href="#"><i class="iconfont"> &#xe66d;</i></a></li>
                <li><a href="#"><i class="iconfont"> &#xe634;</i></a></li>
                <li><a href="#"><i class="iconfont"> &#xe605;</i></a></li>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>
    body{
        background: white;
    }
    .top {
        height:.94rem;

        position: relative;
    }
    .top  a i {
        position: absolute;
        left: 10px;
        top:15px;
    }

    .phone{
        height: .47rem;


    }
    .phone h1 {
        margin-left: 25px;
        line-height: .47rem;
        font-size: 30px;
    }
    .phoneNumber{
        width: 2.97rem;
        margin-left:25px;
        margin-top:-45px;
        border-bottom:1px solid #ccc ;


    }
    .phoneNumber input {
        font-size: 20px;
        color: #ccc;

    }
    .VerificationCode{
        margin-top:-45px;
        width: 2.97rem;
        margin-left:25px;
        border-bottom:1px solid #ccc ;

    }
    .VerificationCode input{
        font-size: 20px;
        color: #ccc;

    }
    .VerificationCode a{
        font-size:10px;
        color: #ccc;

    }
    .code{
        font-size:14px;
        margin-top:30px;
        margin-left:25px;
    }

    .denglu{
        width: 2.965rem;
        height: .425rem;
        border-radius: 3px;
        margin-left:36px;
        background: #f7d7be;

    }
    .denglu h2 {
        font-size: 20px;
        color:white;
    }
    .Agreement{
        font-size:9px;
        margin-left:36px;
        margin-top:10px;
    }
    .footer{
        display:flex;
        justify-content : space-between;

        margin: -43px 96px 0 90px;

    }

</style>