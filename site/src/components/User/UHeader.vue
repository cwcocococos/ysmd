<template>
    <div id="UHeader">
        <header class="app-header-wrapper app-shell-header" style="">
            <div class="app-header-left">
                <a class="app-header-item" onclick="">
                    <img src="../../assets/images/userzuo.png"/>
                </a>
            </div>
            <div class="app-header-middle">
                我的订单
            </div>
            <div class="app-header-right">
                <a class="app-header-item" onclick="">
                    <div class="iconfont app-header-icon icon-sousuo" style="font-size: 0.2rem"></div>
                </a>
                <a class="app-header-item" onclick="">
                    <div class="iconfont app-header-icon icon-gouwuche" style="font-size: 0.2rem"></div>
                </a>
            </div>
        </header>
        <div class="app-view-wrapper">
            <div class="page-order-list app-view app-view-with-header app-view-with-footer">
                <ol data-v-f43516aa="" class="tab">
                    <li class="">
                        <a onclick="">全部</a>
                    </li>
                    <li class="active">
                        <a onclick="">待付款</a>
                    </li>
                    <li class="">
                        <a onclick="">待收货</a>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UHeader",
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

</style>