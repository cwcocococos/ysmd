<template>
    <div>
        <header>
            <div class="top">
                <a href="javascript:;"><i class="iconfont" @click="back">&#xe60b;</i></a>
            </div>
        </header>
        <section>
            <div class="phone">
                <h1>
                    手机号登陆
                </h1>
            </div>
            <div class="phoneNumber">
                <input type="text" placeholder="请输入手机号" ref="phoneId" @blur="getReg"/>
            </div>
            <div class="VerificationCode">
                <input type="text" placeholder="请输入短信验证码" ref="code">
                <a href="javascript:;"><input type="button" @click="sendCode" :value="sendCodeStr"></a>
            </div>
            <div class="code">
                <a href="javascript:;"><p>用账号密码登陆 > </p></a>
            </div>

            <button class="denglu" @click="register"><h2>登陆</h2></button>

            <div class="Agreement">
                <input type="checkbox"  value="值"    name="名称"   checked="checked"/>
                <a href="javascript:;">已阅读并同意小米<u>账号协议</u>、<u>隐私政策</u>和<u>小米商城用户协议</u></a>
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
        props:["fromindex"],
        name: "register",
        data(){
            return {
                sendCodeStr:"发送验证码",
                num:0,
                timer:null,
            }
        },
        methods:{
            back() {
                this.$router.back(-1);
            },
            getTime(){
                // console.log(111);
                this.$http.get("getTime",{
                    params:{
                        phoneId:this.$refs.phoneId.value
                    }
                }).then(({data})=>{
                    this.num = this.sendCodeStr= data.timeNum;
                    if(this.num<=0){
                        this.sendCodeStr="发送验证码";
                        this.num =0;
                        // 清除计时器
                        clearInterval(this.timer);
                    }
                })
            },
            register(){
                this.$http.post("register",{
                    phoneId:this.$refs.phoneId.value,
                    code:this.$refs.code.value
                }).then(({data})=>{
                    if(data.ok === 1){
                        localStorage.phoneId=data.phoneId;
                        this.$emit("update:index",this.fromindex);
                        this.$router.push("/my")
                    }else{
                        alert(data.msg);
                    }
                    console.log(data);
                })
            },
            sendCode(){
                // console.log(222);
                // console.log(this.$refs);
                if(this.num === 0){
                    this.num = 10;
                    this.$http.get("sendCode",{
                        params:{
                            phoneId:this.$refs.phoneId.value,
                        }
                    }).then(({data})=>{
                        console.log(data);
                            if(data.ok === 1){
                                this.$refs.code.value = data.code;
                                // this.timer = setInterval(this.getTime,1000)
                            }else{
                                alert(data.msg);
                            }
                    })
                }else{
                    alert("时间没到")
                }
            },
            getReg(val){
                console.log(this.$refs.phoneId);
                val=/^[1][3,4,5,7,8][0-9]{9}$/;
                if (!this.$refs.phoneId.val.test(val)) {
                    return alert("错误");
                } else {
                    return alert("正确");
                }
            }
        }
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
    .VerificationCode a input{
        font-size:10px;
        color: #ccc;
        margin-left: -6px;
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