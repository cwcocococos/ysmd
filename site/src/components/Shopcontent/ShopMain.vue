<template>
    <div class="Shops">
    <section>
        <article>
            <div class="picCon">
                <div class="swiper-container" :options="swiperOption">
                    <i class="iconfont icon-xiazai6" @click="Mind"></i>
                    <ul  class="swiper-wrapper">
                        <li class="swiper-slide"><img src="../../assets/images/LB1.webp" alt=""></li>
                        <li class="swiper-slide"><img src="../../assets/images/LB2.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="../../assets/images/LB3.webp" alt=""></li>
                        <li class="swiper-slide"><img src="../../assets/images/LB4.webp" alt=""></li>
                    </ul>
                </div>
            </div>
            <div class="sellCon">
                <h2>4月30日手机全场 3期免息</h2>
                <p>火爆进行中</p>
            </div>
            <div class="mainCont">
                <div class="con1">
                    <h2>小米9</h2>
                    <h3><font color="#ff4a00">「全面现货，火爆热卖中，+10元得49元街头风保护壳」</font>
                        全息幻彩全曲面玻璃机身 / 骁龙855旗舰处理器 / 索尼4800万超广角微距三摄 / 20W无线闪充 / 第5代极速屏下指纹解锁
                    </h3>
                    <h4>￥3299</h4>
                    <div>
                        <ul>
                            <li><img src="../../assets/images/2.png" alt=""></li>
                            <li><img src="../../assets/images/2.png" alt=""></li>
                            <li><img src="../../assets/images/2.png" alt=""></li>
                            <li><img src="../../assets/images/2.png" alt=""></li>
                            <li><img src="../../assets/images/2.png" alt=""></li>
                            <li><img src="../../assets/images/2.png" alt=""></li>
                            <li><img src="../../assets/images/2.png" alt=""></li>
                            <li><img src="../../assets/images/2.png" alt=""></li>
                        </ul>
                    </div>
                </div>
                <div class="con2">
                    <h3>
                        <p>
                            <u>促销</u>
                            <em>
                                <font style="width: 0.27rem;height: 0.15rem; border: 1px solid #dc7a39;color: #dd7b30">赠品</font>
                                <b>增米粉卡（价值100元）</b>
                            </em>
                            <i class="iconfont icon-jiantou2"></i>
                        </p>
                        <p>
                            <u>分期</u>
                            <em>
                                <b>小米分期/花呗分期</b>
                            </em>
                            <i class="iconfont icon-jiantou2"></i>
                        </p>
                    </h3>

                    <h3>
                        <p>
                            <u>换机</u>
                            <em>
                                <font style="width: 0.27rem;height: 0.15rem; color: #dd7b30">以旧换新返118元优惠券，支持手机新品使用</font>
                            </em>
                            <i class="iconfont icon-jiantou2"></i>
                        </p>
                    </h3>
                    <h3>
                        <p>
                            <u>已选</u>
                            <em>
                                <b>小米9全网通版8GB+128GB全息幻彩紫X1</b>
                            </em>
                            <i class="iconfont icon-jiantou2"></i>
                        </p>
                        <p>
                            <u>送至</u>
                            <em>
                                <b>北京市 昌平区</b>
                                <font style="color: #dd7b30">有现货</font>
                            </em>
                            <i class="iconfont icon-jiantou2"></i>
                        </p>

                    </h3>
                    <h3>
                        <p>
                            <em>
                                <i class="iconfont icon-check-circle"></i>小米自营
                                <i class="iconfont icon-check-circle"></i>小米发货
                                <i class="iconfont icon-check-circle"></i>7天无理由退货
                            </em>
                            <i class="iconfont icon-jiantou2"></i>
                        </p>
                    </h3>
                </div>
                <div class="con3">
                    <li><img src="../../assets/images/3.png" alt=""></li>
                </div>
            </div>
        </article>
    </section>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "ShopMain",
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar"
                    }
                }
            };
        },
        methods:{ //跳转页面
            back() {
                this.$router.back(-1);
            },
            Mind(){

                this.$router.push({ path:'/main'  })

            }
        },
        mounted() {
            var mySwiper = new Swiper(".swiper-container", {
                autoplay: false,
                loop: false,
                pagination:{
                    el: ".swiper-pagination",

                }

            });
        }
    }
</script>

<style scoped>
    @import "../../../node_modules/swiper/dist/css/swiper.css";
.Shops{
    display: flex;
    overflow: auto;
}
    /*section*/
    section{
        flex: 1;
        overflow: auto;
        justify-content: space-between;
        height: 100%;


    }
    article{
        display: flex;
        flex-direction: column;
    }
    .picCon {
        height: 3.88rem;
        position: relative;
    }
    .picCon i{
        font-size: 18px;
        color: white;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        background: rgba(150,150,150,0.8);
        display: flex;
        line-height: 0.3rem;
        justify-content: center;
        position: absolute;
        z-index: 10;
        top: 10px;
        left: 15px;
    }
    .picCon ul{
        display: flex;
        width: 100%;
        height: 100%;
    }
    .picCon ul li{
        height: 3.88rem;
        width: 3.75rem;
        align-items: center;
    }
    .picCon ul li img {
        height: 100%;
        width: 100%;
    }


    .sellCon{
        height: 0.47rem;
        background: linear-gradient(to right,#e64318,#d61818);
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: white;
    }
    .sellCon p{
        width: 0.77rem;
        height: 0.2rem;
        border: 1px solid white;
        text-align: center;
    }
    .con1{
        height: 2.45rem;
        width: 3.73rem;
        padding: 0 14px;
    }
    .con1 h2{
        height: 0.45rem;
        font-size:0.2rem;
        line-height: 0.45rem;
        padding: 0 14px;

    }
    .con1 h3{

        height: 0.75rem;
        font-size: 14px;
        color:#5b5b5b;
        padding: 0 14px;
    }
    .con1 h4{
        margin-top: 10px;
        font-size: 0.24rem;
        color: #ff6700;
        padding: 0 14px;
    }
    .con1 div{
        margin-top: 15px;
        width:100%;
        display: flex;
        flex-shrink: 0;
        overflow: auto;
        justify-content: space-around;

    }
    .con1 ul{
        display: flex;
    }
    .con1 ul li{
        width: 0.87rem;
        height: 0.7rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    .con1 ul li img{
        width: 100%;
        height: 100%;
    }
    .con2{
        width: 3.75rem;
        height: 3.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }
    .con2 h3{
        margin-top: 5px;
        width: 3.43rem;
        height: 0.92rem;
        border: 1px solid #d3d3d3;
        border-radius: 10px;
        font-size: 14px;

    }
    .con2 h3 p{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 3.43rem;
        height: 0.47rem;
        padding: 0 5px;
    }
    .con2 h3 p:first-child{
        border-bottom: 1px solid #d3d3d3;
    }
    .con2 h3:nth-child(2) p{
        border:none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 3.43rem;
        height: 0.47rem;
    }
    .con2 h3:nth-child(2){
        margin-top: 5px;
        width: 3.43rem;
        height: 0.6rem;
        border: 1px solid #d3d3d3;
        border-radius: 10px;
        font-size: 14px;
        align-items: center;
    }

    .con2 h3:nth-child(4){
        margin-top: 5px;
        width: 3.43rem;
        height: 0.47rem;
        border: 1px solid #d3d3d3;
        border-radius: 10px;
        font-size: 12px;
        color: #747474;
        align-items: center;
    }
    .con2 h3:nth-child(4) p{
        border: none;
    }
    .con2 h3:nth-child(4) p em i{
        color: #f18e39;
    }
    .con2 h3:nth-child(2) p u{
        margin-top: 5px;
    }
    .con2 h3:nth-child(2) p em{
        margin-top: 5px;
    }
    .con2 h3 p u{
        color: #818181;
    }
    .con2 h3 p em{
        width: 2.7rem;
        height: 0.15rem;
        line-height: 0.15rem;
    }
    .con2 h3 p i{
        width: 0.15rem;
        height: 0.15rem;
        color: #a6a6a6;
    }
    .con3{
        height: 100%;
        background: #9a6e3a;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .con3 li{
        width: 3.75rem;
        height: 7.9rem;
    }
    .con3 li img{
        width: 100%;
        height: 100%;
    }

</style>