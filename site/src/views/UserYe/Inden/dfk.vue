<template>
    <div>
        <UHeader></UHeader>
        <div class="empty">您还没有待支付订单</div>
        <UFooter></UFooter>
    </div>
</template>

<script>
    import UHeader from "@/components/User/UHeader"
    import UFooter from "@/components/User/UFooter"
    export default {
        name: "dfk",
        components:{UHeader,UFooter}
    }
</script>

<style scoped>
    .empty {
        font-size: 0.16rem;
        text-align: center;
        background: url(../../../assets/images/userempty.png) 50% 0 no-repeat;
        background-size: 1rem 1rem;
        padding-top: 1.3rem;
        padding-bottom: 0.2rem;
        color: #999;
        margin: 0.52rem 0.41rem 0;
    }
</style>