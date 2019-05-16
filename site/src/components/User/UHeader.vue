<template>
    <div id="UHeader">
        <header class="app-header-wrapper app-shell-header" style="">
            <div class="app-header-left">
                <a class="app-header-item" @click="goFilm">
                    <img src="../../assets/images/userzuo.png"/>
                </a>
            </div>
            <div class="app-header-middle">
                我的订单
            </div>
            <div class="app-header-right">
                <a class="app-header-item" @click="goSearch">
                    <div class="iconfont app-header-icon icon-sousuo" style="font-size: 0.2rem"></div>
                </a>
                <a class="app-header-item" @click="goShopcar">
                    <div class="iconfont app-header-icon icon-gouwuche" style="font-size: 0.2rem"></div>
                </a>
            </div>
        </header>
        <div class="app-view-wrapper">
            <div class="page-order-list app-view app-view-with-header app-view-with-footer">
                <ul class="tab">
                    <router-link to="/" class="active">
                        <a onclick="">全部</a>
                    </router-link>
                    <router-link to="/dfk" class="active">
                        <a onclick="">待付款</a>
                    </router-link>
                    <router-link to="/dsk" class="active">
                        <a onclick="">待收货</a>
                    </router-link>
                    <router-link to="/dpj" class="active">
                        <a onclick="">待评价</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UHeader",
        methods: {
            goFilm(){
                this.$router.push({path:'/my'})
            },
            goSearch(){
                this.$router.push({path:'/search'})
            },
            goShopcar(){
                this.$router.push({path:'/shopcar'})
            }
        },
    }
</script>

<style scoped>
header{
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.5rem;
    background: #fff;
    color: #666;
    padding: 0;
    border-bottom: .01rem solid #ececec;
}
.app-header-wrapper .app-header-item{
    display: block;
    width: .26rem;
    margin: 0 .1rem;
}
.app-header-wrapper .app-header-middle {
    font-size: .16rem;
    min-width: 0;
    margin-left: 15%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
}
.app-header-right{
    min-width: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
}
.app-header-icon {
    width: .3rem;
    text-align: center;

}
.app-view-wrapper{
    position: relative;
    max-width: 7.2rem;
    margin: 0 auto;
}
.app-view-with-footer{
    padding-bottom: 30px;
}
.app-view-with-header {
    padding-top: 50px;
}
.app-view{
    background: #fff;
    color: #3c3c3c;
}
.tab{
    border-bottom: .01rem solid #ececec;
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 2;
    height: 0.4rem;
    display: flex;
    justify-content: space-around;
}
.tab .active{
    text-align: center;
    height: 100%;
    line-height: 0.4rem;
    font-size: .14rem;
}
.tab .active a {
    display: inline-block;
    height: 0.4rem;
    font-size: .14rem;
    color: #666666;
}
.tab .router-link-active a{
    color: #ff6700;
    border-bottom: 1px solid #ff6700;
}
</style>