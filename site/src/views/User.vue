<template>
    <div>
        <div class="app_view_wrapper">
            <div class="view_content">
                <div class="content_header">
                    <div class="content_Img .clear_fix">
                        <img src="../assets/images/avatar.76a75b8f17.png" alt="">
                    </div>
                    <div class="content_Name">登录/注册</div>
                    <div class="message iconfont icon-xinxi"></div>
                    <!--<div class="content_VIP ">-->
                    <!--<i class="iconfont icon-huangguan"></i>-->
                    <!--会员积分-->
                    <!--</div>-->
                </div>
                <Indent></Indent>
                <div class="ui-line"></div>
                <Purse></Purse>
                <div class="ui-line"></div>
                <Slideshow></Slideshow>
                <div class="ui-line2"></div>
                <Navigation></Navigation>
                <div class="ui-line"></div>
                <Setting></Setting>
            </div>
        </div>
    </div>
</template>

<script>
    import Indent from "../components/User/Indent"
    import Purse from "../components/User/Purse"
    import Slideshow from "../components/User/Slideshow"
    import Navigation from "../components/User/Navigation"
    import Setting from "../components/User/Setting"
    export default {
        name: "User",
        components:{Indent,Purse,Slideshow,Navigation,Setting}

    }
</script>

<style scoped>
    /*我的页外套*/
    .app_view_wrapper{
        width: 100%;
    }
    .view_content{
        width: 100%;
        height: 100%;
        background:#f5f5f5 ;
    }
    /*头部*/
    .content_header{
        background: url(../assets/images/bg.63c8e19851.png) center 0 #f37d0f;
        background-size: auto 100%;
        padding: 0.26rem 0;
        display: flex;
        align-items: center;
        position: relative;
    }
    .content_Img{
        margin: 0 0.09rem 0 0.16rem;
        width: 0.52rem;
        height: 0.52rem;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 100%;
        border: 3px solid hsla(0,0%,100%,.4);
        text-align: center;
    }
    .content_Img img{
        width: auto;
        height: 100%;
        margin: 0 auto;
    }
    .content_Name{
        color: #fff;
        font-size: 0.14rem;
        text-align: left;
    }
    .message{
        position: absolute;
        top: 0.09rem;
        right: 0.21rem;
    }
    .content_header .icon-xinxi{
        font-size: 0.2rem;
        color: #ffffff;
    }
    .content_VIP{
        width: 0.66rem;
        height: 0.26rem;
        position: absolute;
        right: 0;
        bottom: 0.3rem;
        font-size: 0.12rem;
        background: #f6d856;
        color:#ab5622 ;
        text-align: center;
        align-items: center;
        padding: 0.05rem 0;
        border-radius: 0.12rem 0 0 0.12rem
    }
    .content_VIP .icon-huangguan{
        font-size: 0.1rem;
        margin: 0 0 0 0.02rem;
    }
    .ui-line{
        height: 0.08rem;
        background: #f5f5f5;
        overflow: hidden;
        clear: both;
    }
    .ui-line2{
        height: 0.2rem;
        background: #f5f5f5;
        overflow: hidden;
        clear: both;
    }
</style>