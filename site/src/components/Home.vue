<template>
    <div class="maincon">
        <header>
            <div class="header-top">
                <i class="iconfont icon-xinxi"></i>
                <h2>
                    <i class="iconfont icon-sousuo"></i>
                    <p>小米米家照片打印机</p>
                </h2>
                <i class="iconfont icon-richscan_icon"></i>
            </div>
            <!-- nav -->
            <div class="nav-wrap">
                <div class="nav-right">
                    <img src="../assets/images/floor.jpg" alt="">
                </div>
                <div class="nav-items"></div>
                <div class="nav">
                    <router-link to="/" class="nav-item active">
                        <span>推荐</span>
                    </router-link>
                    <router-link to="/main/sj" class="nav-item">
                        <span>手机</span>
                    </router-link>
                    <router-link to="/zn" class="nav-item">
                        <span>智能</span>
                    </router-link>
                    <router-link to="/ds" class="nav-item">
                        <span>电视</span>
                    </router-link>
                    <router-link to="/jd" class="nav-item">
                        <span>家电</span>
                    </router-link>
                    <router-link to="/bj" class="nav-item">
                        <span>笔记本</span>
                    </router-link>
                    <router-link to="/sh" class="nav-item">
                        <span>生活周边</span>
                    </router-link>
                    <div class="nav-item-exit"></div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    header{
        height:.725rem;
    }
    header .header-top{
        height:.44rem;
        display: flex;
        justify-content:space-around;
        align-items:center
    }
    header .header-top h2{
        width:2.6rem;
        height:.29rem;
        border:.005rem solid #d2d2d2;
        border-radius:0.04rem;
        background:#f8f8f8;
        color:#c0c0c0;
        display:flex;
        align-items:center
    }
    header .header-top h2 i{
        margin:0 0.075rem
    }
    header .header-top .iconfont{
        font-size:.18rem;
        color:#8f8f8f
    }
    header .nav-wrap{
        height:0.3rem;
        background:#fefefe;
        position: relative;
        overflow: hidden;
    }
    header .nav-wrap .nav-right{
        position: absolute;
        top:0;
        right:0;
        width: .68rem;
        height: .3rem;
        line-height: .3rem;
        background-color: #fefefe;
        box-shadow: -15px 0 15px 0 #fefefe;
        z-index: 99;
    }
    header .nav-wrap .nav-right img{
        padding:10px 20px
    }
    header .nav-wrap .nav{
        overflow-x: auto;
        background: #fefefe;
        font-size:.135rem;
        white-space: nowrap;
        z-index: 2;
        color:#8e8e8e
    }
    header .nav-wrap .nav .nav-item{
        display: inline-block;
        padding:0 .095rem;
    }
    header .nav-wrap .nav .nav-item span{
        line-height:.3rem
    }
    header .nav-wrap .nav .nav-item-exit{
        padding-right: .76rem;
        display: inline-block;
    }
    header .nav-wrap .active{
        border-bottom:2px solid #f36f1c;
        color:#f36f1c
    }
</style>