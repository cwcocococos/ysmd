<template>
        <div class="phone" >
            <!--<p class="p1"><img src="../assets/images/1.jpg" alt=""></p>-->
            <!--<p class="p1"><img :src="'http://127.0.0.1/'+item.shopTypePic"></p>-->
            <ul v-for="item in shopTypeList">
                <p class="p1"><img :src="'http://127.0.0.1/'+item.shopTypePic"></p>
                <li v-for="(item,i) in goodsList">
                    <p>
                        <b><img :src="'http://127.0.0.1/'+item.shopPic" alt=""></b>
                        {{item.shopName}}
                    </p>
                </li>
            </ul>

        </div>

</template>

<script>
    import  axios from "axios"
    export default {
        name: "Goods",
        props:['goodsList'],
        data(){
          return{
              shopTypeList:[]
          }
        },
        methods: {
            getShopList() {
                axios.get("getAllShopTypeList").then(({data}) => {
                    this.shopTypeList = data.shopTypeList;
                    // console.log(data)
                })
            },
        },
        mounted() {
            this.getShopList();
        }

    }
</script>

<style scoped>
    .phone{
        display: flex;

    }
    .p1{
        width: 2.5rem;
        height:1rem;
        text-align: center;
        margin-left: 20px;
    }
    .p1 img{
        width: 100%;
        height: 100%;
    }
    .phone ul{
        width:3rem;
        display: flex;
        flex-wrap: wrap;
    }

    .phone ul li{
        height: 0.83rem;
        margin: 0.2rem 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 33%;
        flex-wrap:wrap ;

    }
    .phone ul li p{
        height: 0.83rem;
        padding: 0 0.1rem;
        text-align: center;
        font-size: 0.1rem;
        color: #7e7e7e;
    }

    .phone ul li p b img{
        width: 0.6rem;
        height: 0.6rem;
    }


</style>