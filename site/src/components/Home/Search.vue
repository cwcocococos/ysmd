<template>
    <header>
        <div class="search">
            <i class="iconfont icon-xiazai6" @click="back"></i>
            <input data-v-7cbaca4a="" type="search" autocomplete="off" placeholder="搜索商品名称" autocapitalize="off">
            <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="search-wrap">
            <div class="search-hot">
                <p>热门搜索</p>
            </div>
            <div class="search-adv">
                <img src="@/assets/images/search-banenr.jpg" alt="">
            </div>
            <div class="search-key">
                <a href="#" style="background:#ffbdc5;border:1px solid  rgb(250, 96, 53);">母亲节 心意好礼</a>
                <a href="#" style="background:#e8f6f6;border:1px solid  rgb(140, 218, 222);">米家驱蚊器3个装</a>
                <a href="#" style="background:#e8f6f6;border:1px solid  rgb(140, 218, 222);">米家自动泡沫洁面机</a>
                <a href="#" style="background:#fae8e8;border:1px solid  rgb(227, 175, 150);">AMAZF智能运动手表2s</a>
                <a href="#" style="background:#f2f6e9;border:1px solid  rgb(187, 208, 144);">照片打印机</a>
                <a href="#" style="background:#f8f2ec;border:1px solid  rgb(250, 194, 136);">最生活毛巾*Air</a>
                <a href="#" style="background:#f9eaea;border:1px solid  rgb(252, 160, 167);">米兔大颗粒积木 动物乐园</a>
            </div>
            <div class="search-hot">
                <p>常用分类</p>
            </div>
            <div class="search-list">
                <a href="#">手机</a>
                <a href="#">手电视</a>
                <a href="#">笔记本</a>
                <a href="#">盒子</a>
                <a href="#">路由器</a>
                <a href="#">手环</a>
                <a href="#">平板</a>
                <a href="#">投影</a>
                <a href="#">手表</a>
                <a href="#">VR</a>
                <a href="#">穿戴</a>
                <a href="#">影音</a>
                <a href="#">空气净化器</a>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Search",
        methods:{
            back() {
                this.$router.back(-1);
            }
        }
    }
</script>

<style scoped>
    header .search{
        height:0.41rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background:#f3f3f3
        }
    header .iconfont{
        font-size:.18rem
        }
    header .search input{
        width:2.76rem;
        height:.26rem;
        background:#fff;
        font-size:.15rem;
        padding:0 0.104rem
        }
    .search-wrap{
        height:100%;
        overflow-x:hidden;
        overflow-y:auto
        }
    .search-hot{
        height:0.41rem;
        font-size:0.125rem;
        color: #3c3c3c;
        padding:0 0.156rem;
        line-height:0.41rem
        }
    .search-adv img{
        height:1.04rem;
        }
    .search-key{
        height:1.6388rem;
        margin:0.05rem 0.1rem;
        }
    .search-key a{
        display:block;
        font-size:0.12rem;
        padding:0.05rem 0.1rem;
        color:#484848;
        margin:0.05rem;
        float: left;
        }
    .search-list a{
        display:block;
        font-size:0.12rem;
        color:rgba(0,0,0,.54);
        margin:0 0.078rem 0.05rem 0;
        padding:0 0.078rem;
        background:#f5f5f5;
        float:left;
        height:0.25rem;
        line-height:0.25rem
        }
</style>