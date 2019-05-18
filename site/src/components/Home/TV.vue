<template>
    <div class="TV">
        <Header></Header>
        <div id="main">
            <section>
                <article>
                    <div class="TV-banner">
                        <img src="@/assets/images/TV-banner.webp" alt="">
                    </div>
                    <div class="sj-tab">
                        <img src="@/assets/images/TV-tab.webp" alt="">
                    </div>
                    <div class="sj-shopList">
                        <div class="shopList-con">
                            <img src="@/assets/images/sj-shopList1.webp" alt="">
                            <h3>
                                <p>黑鲨游戏手机2</p>
                                <p>骁龙855，立体触控</p>
                                <p>￥3199起</p>
                                <div class="buybtn">立即购买</div>
                            </h3>
                        </div>
                        <div class="shopList-con">
                            <img src="@/assets/images/sj-shopList2.webp" alt="">
                            <h3>
                                <p>Redmi Note 7</p>
                                <p>4800万拍照 长续航</p>
                                <p>￥999起</p>
                                <div class="buybtn">立即购买</div>
                            </h3>
                        </div>
                        <div class="shopList-con">
                            <img src="@/assets/images/sj-shopList3.webp" alt="">
                            <h3>
                                <p>小米9</p>
                                <p>骁龙855，索尼4800万三摄</p>
                                <p>￥2999起</p>
                                <div class="buybtn">立即购买</div>
                            </h3>
                        </div>
                        <div class="shopList-con">
                            <img src="@/assets/images/sj-shopList4.webp" alt="">
                            <h3>
                                <p>小米9se</p>
                                <p>索尼4800万三摄，骁龙712</p>
                                <p>￥1599起</p>
                                <div class="buybtn">立即购买</div>
                            </h3>
                        </div>
                        <div class="shopList-con">
                            <img src="@/assets/images/sj-shopList5.webp" alt="">
                            <h3>
                                <p>Redmi Note 7</p>
                                <p>索尼4800万三摄，骁龙712</p>
                                <p>￥3999起</p>
                                <div class="buybtn">立即购买</div>
                            </h3>
                        </div>
                        <div class="shopList-con">
                            <img src="@/assets/images/sj-shopList6.webp" alt="">
                            <h3>
                                <p>小米9 透明尊享版</p>
                                <p>骁龙855，索尼4800万三摄	</p>
                                <p>￥1299起</p>
                                <div class="buybtn">立即购买</div>
                            </h3>
                        </div>
                        <div class="shopList-con">
                            <img src="@/assets/images/sj-shopList7.webp" alt="">
                            <h3>
                                <p>小米8青春版</p>
                                <p>潮流轻旗舰，超级夜景模式</p>
                                <p>￥1599起</p>
                                <div class="buybtn">立即购买</div>
                            </h3>
                        </div>
                        <div class="shopList-con">
                            <img src="@/assets/images/sj-shopList8.jpg" alt="">
                            <h3>
                                <p>小米8se</p>
                                <p>小屏旗舰机，AI超感光双摄</p>
                                <p>￥1999起</p>
                                <div class="buybtn">立即购买</div>
                            </h3>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Home/Header.vue"
    export default {
        name: "TV",
        components:{
            Header
        }
    }
</script>

<style scoped>
    .TV{
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
    }
    .sj-tab img{
        height:0.52rem;
    }
    .sj-shopList{
        padding:0 0.0625rem;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        background: #DA0A20;
    }
    .sj-shopList .shopList-con{
        width:1.78rem;
        height:2.53rem;
        background: #fff;
        margin-top:0.055rem;
    }
    .sj-shopList .shopList-con img{
        width:1.78rem;
    }
    .sj-shopList .shopList-con h3{
        display: flex;
        flex-direction:column;
        align-items:center;
    }
    .sj-shopList .shopList-con h3 p:nth-child(1){
        font-size:.14rem;
    }
    .sj-shopList .shopList-con h3 p:nth-child(2){
        font-size:.12rem;
        color:rgba(0,0,0,0.54);
    }
    .sj-shopList .shopList-con h3 p:nth-child(3){
        font-size:.14rem;
        color: #ea625b;
    }
    .sj-shopList .shopList-con h3 .buybtn{
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