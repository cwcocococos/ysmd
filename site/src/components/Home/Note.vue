<template>
    <div class="Note">
        <div id="main">
            <section>
                <article>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item,index) in imgArray" ><img :src='item' /></div>
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="sj-tab">
                        <img src="@/assets/images/bj-tab.webp" alt="">
                    </div>
                    <div class="sj-adv">
                        <img src="@/assets/images/bj-adv.webp" alt="">
                        <div class="info">
                            <div class="sj-top">
                                <div class="name">小米笔记本15.6" 2019款 独显版 </div>
                                <div class="price">￥3799<span>起</span></div>
                            </div>
                            <div class="sj-bottom">
                                <div class="brief">全面均衡的国民轻薄本</div>
                                <div class="buybtn">立即购买</div>
                            </div>
                        </div>
                    </div>
                    <bjb></bjb>
                </article>
            </section>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import bjb from "@/components/Home/bjb"
    export default {
        name: "Note",
        components:{
            bjb
        },
        data() {
            return {
                imgArray: [
                    require('@/assets/images/bj-banner.jpg'),
                    require('@/assets/images/bj-banner2.jpg'),
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
    .Note{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
    }
    #main{overflow: auto;height: 100%}
    section{
        flex:1;
        background:#efefef;
        overflow:auto;
        padding-bottom:0.5rem;
    }
    .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .swiper-wrapper {
        height: 2.42rem;
    }
    .swiper-slide img {
        max-width: 100%;
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
    .sj-tab img{
        height:0.791rem;
    }
    .sj-adv{
        height:3rem;
        padding:0 0.062rem;
        background: #c10069;
    }
    .sj-adv img:nth-child(1){
        height: 2.27rem;
    }
    .info{
        height: 0.733rem;
        font-size:0.16rem;
        padding:0.10rem 0.14rem;
        background: #fff;
    }
    .info .sj-top{
        display: flex;
        justify-content:space-between;
        height:0.218rem;
        line-height:0.218rem;
    }
    .info .sj-top .price{
        color: #EA625B;
        font-size:0.14rem;
    }
    .info .sj-bottom{
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    .info .sj-bottom .brief{
        height:0.15rem;
        font-size:0.12rem;
        color:rgba(0,0,0,0.54);
    }
    .info .sj-bottom .buybtn{
        width: 1.04rem;
        background: #ea625b;
        border-radius: .05rem;
        text-align: center;
        color: #fff;
        font-size: .12rem;
        padding: .08rem 0;
        font-weight: 700;
    }

</style>