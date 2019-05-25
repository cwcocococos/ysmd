<template>
    <div class="sj-shopList">
        <div class="shopList-con" v-for="(item,i) in shopList">
            <img :src="$store.state.config.url+item.shopPic" alt="">
            <h3>
                <p>{{item.shopName}}</p>
                <p>{{item.shopContent}}</p>
                <p>￥{{item.shopPrice}}</p>
                <div class="buybtn">立即购买</div>
            </h3>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "sj",
        methods:{
            getShopList(params){
                axios.get("getShopListByTypeName",{
                    params
                }).then(data=>{
                    console.log(data)
                    this.shopList=data.data.shopList;
                    console.log(this.shopList)
                })
            }
        },
        data(){
            return {
                shopList:[],
                shopTypeName:"手机"
            }
        },
        mounted() {
            this.getShopList({
                shopTypeName:this.shopTypeName
            });
        }
    }
</script>

<style scoped>
    .sj-shopList{
        padding:0 0.0625rem;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .sj-shopList .shopList-con{
        width:50%;
        height:2.73rem;
        background: #fff;
        margin-top:0.055rem;
    }
    .sj-shopList .shopList-con img{
        width:1.78rem;
        height:1.78rem;
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