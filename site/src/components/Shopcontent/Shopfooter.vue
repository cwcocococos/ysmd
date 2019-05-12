<template>
    <footer>
        <p class="bot1">
            <i class="iconfont icon-aixin"></i>喜欢
        </p>
        <p class="bot2">
            <i class="iconfont icon-gouwuche"></i>购物车
        </p>
        <p class="bot3">
            加入购物车
        </p>
    </footer>
</template>

<script>
    export default {
        name: "Shopfooter"
    }
</script>

<style scoped>
    footer{
        height: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

    }
    .bot1,.bot2{
        width: 0.81rem;
        height: 0.46rem;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        align-items: center;
        margin-top: 3px;
        color: #343434;
    }
    .bot1{
        border-right: 1px solid #8c8c8c;
    }
    .bot1 i,.bot2 i{
        font-size: 24px;
        color: #8c8c8c;
    }
    .bot3{
        width: 2.13rem;
        height: 0.5rem;
        background: #ff6b01;
        font-size: 16px;
        text-align: center;
        line-height: 0.5rem;
        color: white;
    }
</style>