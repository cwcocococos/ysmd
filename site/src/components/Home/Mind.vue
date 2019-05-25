<template>
    <div class="Mind">
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
                        <img src="@/assets/images/zn-adv.webp" alt="">
                    </div>
                    <zn></zn>
                </article>
            </section>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import zn from "@/components/Home/zn"
    export default {
        name: "Mind",
        components:{
            zn
        },
        data() {
            return {
                imgArray: [
                    require('@/assets/images/zn-banner.jpg'),
                    require('@/assets/images/zn-banner2.jpg')
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
    .Mind{
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
        height: 1.87rem;
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
        height:0.41rem;
    }
    .sj-adv img:nth-child(1){
        height: 2.27rem;
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