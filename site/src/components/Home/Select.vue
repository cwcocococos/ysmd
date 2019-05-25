<template>
    <section>
        <article>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in imgArray" ><img :src='item' /></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
            <figure>
                <ul>
                    <li>
                        <i class="iconfont icon-huangguan1"></i>
                        <p>新品发布</p>
                    </li>
                    <li>
                        <i class="iconfont icon-yonghu"></i>
                        <p>小米众筹</p>
                    </li>
                    <li>
                        <i class="iconfont icon-huhuan"></i>
                        <p>以旧换新</p>
                    </li>
                    <li>
                        <i class="iconfont icon-icon-test"></i>
                        <p>1分拼盘</p>
                    </li>
                    <li>
                        <i class="iconfont icon-wenjian"></i>
                        <p>超值特卖</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i class="iconfont icon-Group"></i>
                        <p>真心想要</p>
                    </li>
                    <li>
                        <i class="iconfont icon-jingxuan"></i>
                        <p>每日臻选</p>
                    </li>
                    <li>
                        <i class="iconfont icon-dianshi"></i>
                        <p>全面屏电视</p>
                    </li>
                    <li>
                        <i class="iconfont icon-jiadian"></i>
                        <p>家电热卖</p>
                    </li>
                    <li>
                        <i class="iconfont icon-mifenqia-copy"></i>
                        <p>米粉卡</p>
                    </li>
                </ul>
            </figure>
            <div class="advCon">
                <div class="adv-img">
                    <img src="@/assets/images/adv-logo.jpg" alt="">
                </div>
                <div class="adv-font">
                    <p>小米众测：新品米家直流变频落地扇1X</p>
                </div>
            </div>
            <div class="advMain">
                <div class="main-left" @click="Shopcont">
                    <img src="@/assets/images/adv1.jpg" alt="">
                </div>
                <div class="main-right">
                    <img src="@/assets/images/adv2.jpg" alt="">
                    <img src="@/assets/images/adv3.jpg" alt="">
                </div>
            </div>
            <div class="adv-pic">
                <img src="@/assets/images/adv4.jpg" alt="">
            </div>
            <div class="adv-news">
                <img src="@/assets/images/adv-pic.webp" alt="">
            </div>
            <sj></sj>
            <div class="ti">
                <p>更多小米手机产品 ></p>
            </div>
            <div class="adv-second">
                <img src="@/assets/images/adv-second.jpg" alt="">
            </div>
            <div class="adv-TV">
                <img src="@/assets/images/adv-zn.webp" alt="">
            </div>
            <zn></zn>
            <div class="ti">
                <p>更多小米智能产品 ></p>
            </div>
            <div class="adv-three">
                <img src="@/assets/images/advBook.jpg" alt="">
            </div>
            <div class="adv-Book">
                <img src="@/assets/images/adv-mind.webp" alt="">
            </div>
            <jd></jd>
        </article>
    </section>
</template>

<script>
    import Swiper from 'swiper';
    import sj from "@/components/Home/sj"
    import jd from "@/components/Home/jd"
    import zn from "@/components/Home/zn"
    export default {
        name: "Select",
        components:{
            sj,
            jd,
            zn
        },
        methods:{ //跳转页面
            Shopcont(){
                this.$router.push({ path:'/shop'  })
            }
        },
        data() {
            return {
                imgArray: [
                    require('@/assets/images/banner1.jpg'),
                    require('@/assets/images/banner2.jpg'),
                    require('@/assets/images/banner3.jpg'),
                ]
            }
        },
        mounted(){
           if(!this.swiper){
               this.swiper = new Swiper('.swiper-container',{
                   loop:true,
                   pagination:{
                        el:".swiper-pagination",
                       clickable:true
                   },
                   autoplay:{
                        disableOnInteraction:false
                   }
               })
           }
        }
    }
</script>

<style scoped>
    section{
        flex:1;
        background:#efefef;
        overflow:auto;padding-bottom:0.5rem;

    }
    .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .swiper-wrapper {
        height: 2rem;
    }
    .swiper-slide img {
        max-width: 100%;
        height:100%
    }
    .swiper-slide {
        text-align: center;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    section figure{
        height:1.94rem;
        background:#fff;
        font-size:12px;
        border-bottom:1px solid #f5f5f5
    }
    section figure ul{
        display:flex;
        justify-content:space-around;
    }
    section figure ul:nth-child(1){
        padding:0.2rem 0;
    }
    section figure ul li{
        width:1.44rem;
        height: 0.76rem;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        color:#b5b5b5
    }
    section figure ul li .iconfont{
        font-size:0.30rem
    }
    section figure ul li p{
        text-align:center;
    }
    section figure ul:nth-child(1) li:nth-of-type(1) .iconfont{
        color:#eb936d;
    }
    section figure ul:nth-child(1) li:nth-of-type(2) .iconfont{
        color:#aebefa;
    }
    section figure ul:nth-child(1) li:nth-of-type(3) .iconfont{
        color:#83d6ba;
    }
    section figure ul:nth-child(1) li:nth-of-type(4) .iconfont{
        color:#a3c7fb;
    }
    section figure ul:nth-child(1) li:nth-of-type(5) .iconfont{
        color:#a0c6f5;
    }
    section figure ul:nth-child(2) li:nth-of-type(1) .iconfont{
        color:#a8b8f3;
    }
    section figure ul:nth-child(2) li:nth-of-type(2) .iconfont{
        color:#b694f5;
    }
    section figure ul:nth-child(2) li:nth-of-type(3) .iconfont{
        color:#edc06d;
    }
    section figure ul:nth-child(2) li:nth-of-type(4) .iconfont{
        color:#ea635f;
    }
    section figure ul:nth-child(2) li:nth-of-type(5) .iconfont{
        color:#f2ac70;
    }
    .advCon{
        height:.455rem;
        background:#fff;
        border-top:1px solid #d2d2d2;
        border-bottom:0.06rem solid #f5f5f5;
        display:flex;
        align-items:center
    }
    .advCon .adv-img{
        height:.24rem;
        width:.92rem;
        border-right:1px solid #a8a8a8;
        display:flex;
        align-items:center;
        justify-content:space-around
    }
    .advCon .adv-img img{
        height:.15rem
    }
    .advCon .adv-font{
        font-size:.125rem;
        margin-left:.125rem
    }
    .advMain{
        height:2.645rem;
        display:flex
    }
    .advMain img{
        width:1.865rem
    }
    .adv-pic{
        height:1.458rem;
        margin-top:0.083rem
    }
    .adv-pic img{
        height:1.458rem
    }
    .adv-news{
        height:2.291rem
    }
    .adv-news img{
        height:2.291rem
    }
    .shopList{
        min-height:8.060rem;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding-top:.025rem;
    }
    .shopList .shopList-con{
        width:49%;
        height:2.695rem;
        background:#fff
    }
    .shopList .shopList-con img{
        width:1.875rem;
        height:1.875rem
    }
    .shopList .shopList-con h3{
        width:1.705rem;
        height:0.64rem;
        padding:.14rem 0 0 .17rem;
    }
    .shopList .shopList-con h3 p:nth-child(1){
        font-size:.14rem;
        line-height:.2rem;
    }
    .shopList .shopList-con h3 p:nth-child(2){
        font-size: .057rem;
        line-height: .2rem;
        color: rgba(0,0,0,.54);
    }
    .shopList .shopList-con h3 p:nth-child(3){
        font-size:.14rem;
        line-height:.14rem;
        color:#e57e2f;
    }
    .ti{
        width:100%;
        height:0.52rem;
        border-top:0.005rem solid rgba(0,0,0,.54);
        font-size:0.14rem;
        background:#fff;
        color:rgba(0,0,0,.54);
        display:flex;
        justify-content:center;
        align-items: center;
        border-bottom:.125rem solid #f5f5f5
    }
    .adv-second{
        height:1.458rem;
    }
    .adv-second img{
        height:1.458rem;
    }
    .adv-TV{
        height:2.291rem
    }
    .adv-TV img{
        height:2.291rem
    }
    .adv-three{
        height:1.458rem;
    }
    .adv-three img{
        height:1.458rem;
    }
    .adv-Book{
        height:2.291rem
    }
    .adv-Book img {
        height: 2.291rem
    }
</style>