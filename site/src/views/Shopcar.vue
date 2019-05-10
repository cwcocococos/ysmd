<template>
    <div class="main">
        <header>
            <div class="top">
                <p></p>
                <p>购物车</p><i class="iconfont">&#xe61e;</i>
            </div>
            <div class="denglu">
                <p>登陆后享受更多优惠</p><a href="#">去登陆></a>
            </div>
        </header>

        <seclion>
            <div class="cart">
                <i class="iconfont">&#xe604;</i><p>购物车还是空的</p><button>去逛逛</button>
            </div>
            <div class="like">
                <img src="@/assets/images/cnxh.jpg" alt="" class="test1">
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
        </seclion>
        <div class="Settlement">
            <div class="Choice">
                <i class="iconfont">&#xe67e;</i> 全选
            </div>


            <div class="Total">
                合计:<b>￥0.00</b>
            </div>

            <button>结算</button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Shopcar"
    }
</script>

<style scoped>
 .main{
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     height:100%;
 }
    .top {
        height: .495rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }

    .top p {
        margin-top: 15px;
        color: #404040;
        font-size: 20px;
        font-family: "黑体"
    }

    .top i {
        font-size: 20px;
        margin-top: 15px;
        margin-right: 10px;
        color: #b1b1b1;

    }

    .denglu {
        height: .51rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        line-height: .51rem;

    }

    .denglu p {
        font-size: 12px;
        margin-left: 15px;
    }


    .denglu a {
        font-size: 12px;
        margin-right: 15px;
        font-family: "宋体";
        color: #b1b1b1;
    }
    .cart{
        display: flex;
        justify-content: space-between;
        margin: 20px 25px 0 25px;


    }
    .cart i{
        font-size: 45px;

        color: #e3e3e3;

    }
    .cart p {
        font-size:25px;

        color: #e3e3e3;
    }
    .cart button{

        width: .59rem;
        height: .23rem;
        border: 2px solid #868686;
        margin-top:7px;
    }
    seclion{
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

        margin-top:0.05rem;
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
    }
 .Settlement {
     height: .495rem;
     font-size: 14px;
     display: flex;
     justify-content: space-between;
     align-items: center;


 }

 .Settlement b {
     color: #ff6e02;


 }
  .Settlemen i {
     margin-left:10px;
     color: #ff6e02;
 }

 .Settlement button {
     width: 1.13rem;
     height: .49rem;
     background: #ccc;
     color: white;
 }
 .Choice{
     margin-left:10px;
 }
 .Total{
     margin-left:110px;
 }

</style>