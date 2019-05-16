<template>
    <div id="UFooter">
        <div class="like">
            <img src="@/assets/images/usercnxh.jpg" alt="" class="test1">
        </div>
        <ul class="list">
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
            <li>
                <img src="@/assets/images/M8.jpg" alt="" />
                <b>小米8 SE 6+64GB</b>
                <p>￥1599</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UFooter"
    }
</script>

<style scoped>
    #UFooter{
        flex: 1;
        overflow: auto;
    }

    .list {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list li{
        width:1.85rem;
    }
    .list li img{
        width:100%;
    }

    .list li b{
        font-weight: normal;
        font-size:14px;
        padding-left:0.12rem;
        height:0.35rem;
        line-height:0.35rem;
        color:#191919;
        display:block;
    }
    .list li p{
        color: #ff6e02;
        font-size:12px;
        padding-left:0.12rem;
        padding-bottom: 0.05rem;
    }
</style>