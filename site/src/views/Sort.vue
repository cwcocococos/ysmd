<template>
    <div>
        <header>
            <p class="top1">
                <i class="iconfont icon-sousuo1"></i>
                <input type="text" placeholder="8H可调节支撑腰靠">
            </p>
            <i class="iconfont icon-xinxi"></i>
        </header>
        <!--section-->
        <section>
            <article>
                <div class="left">
                    <ul v-for="(item,index) in shopTypeList">
                      <li :class="{'active' : shopIndex === index}" @click="selectMenu(index)"  >{{item.shopTypeName}} </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="both">
                        <!--<p class="p1"><img src="../assets/images/1.jpg" alt="">-->
                        <GoodsList :goodsList="goodsList[0]"></GoodsList>
                        <GoodsList :goodsList="goodsList[1]"></GoodsList>
                        <GoodsList :goodsList="goodsList[2]"></GoodsList>
                        <GoodsList :goodsList="goodsList[3]"></GoodsList>
                        <GoodsList :goodsList="goodsList[4]"></GoodsList>
                        <GoodsList :goodsList="goodsList[5]"></GoodsList>
                        <GoodsList :goodsList="goodsList[6]"></GoodsList>
                        <GoodsList :goodsList="goodsList[7]"></GoodsList>
                        <GoodsList :goodsList="goodsList[8]"></GoodsList>
                        <GoodsList :goodsList="goodsList[9]"></GoodsList>
                        <GoodsList :goodsList="goodsList[10]"></GoodsList>
                        <GoodsList :goodsList="goodsList[11]"></GoodsList>
                        <GoodsList :goodsList="goodsList[12]"></GoodsList>
                        <GoodsList :goodsList="goodsList[13]"></GoodsList>
                        <GoodsList :goodsList="goodsList[14]"></GoodsList>
                    </div>

                </div>
            </article>

        </section>

    </div>
</template>

<script>
    import axios from "axios"
    import GoodsList from "../components/Shopcontent/Goods"
    export default {
        name: "sort",
        components:{
            GoodsList
        },
        data(){
            return{
                shopTypeList : [],
                shopList:[],
                shopIndex:0,
                shopTypeName:[],
                goodsList:[]
            }

        },
        methods: {
            getShopList(){
                axios.get("getAllShopTypeList").then(({data})=>{
                    this.shopTypeList = data.shopTypeList;
                    // console.log(data)
                })
            },
            getGoodsList(){
                console.log(123)
                // axios.get("http://localhost/getAllshopList").then(({data})=>{
                //
                //     // this.shopList=data.shopList;
                //     console.log(data)
                // })
                axios.get('getAllshopList',{
                    params:{
                    },
                }).then(data=>{
                    // console.log(data)
                    this.shopList=data.data.shopList;
                    // console.log(data.data.shopList[0],11)
                    // console.log(data.data.shopTypeName)
                }).catch(function (error) {
                    console.log(error)
                })
            },
            sort(shopTypeName){
                axios.get('getGoodsByShopTypeId',{
                    params:{
                        shopTypeName
                    }
                }).then(data=>{
                    this.goodsList.push(data.data.shopList);
                    console.log((this.goodsList));
                })
            },
            selectMenu($index) {
                this.shopIndex = $index
            },
        //     //获取catgory菜单数据
        //     async getCategoryData() {
        //         await categoryData().then((res) => {
        //             console.log(res)
        //             this.categoryData = res.data
        //         })
        //     },
        //     //动态设置searc-wrap的高
        //     setSearchWrapHeight() {
        //         let $screenHeight = document.documentElement.clientHeight
        //         this.$refs.searchWrap.style.height = $screenHeight - 200 + 'px'
        //     },
        //     //左侧菜单和右侧区域联动
        //     selectMenu($index) {
        //         this.currentIndex = $index
        //     },
        //     selectProduct(title){
        //         this.$router.push('./product-list?keyword='+title)
        //     },
        //     goHome(){
        //         console.log(11111)
        //         this.$router.push('/home')
        //     }
        },
        mounted(){
            this.getShopList();
            this.getGoodsList();

        },
        created(){
            this.sort("手机");
            this.sort("电视");
            this.sort("电脑");
            this.sort("家电");
            this.sort("路由");
            this.sort("出行");
            this.sort("穿戴");
            this.sort("智能");
            this.sort("电源");
            this.sort("健康");
            this.sort("灯具");
            this.sort("儿童");
            this.sort("插线板");
            this.sort("音频");
            this.sort("箱包");
        }


    }

</script>

<style scoped>
    .active{
        color: #f37d0f;
    }
    header {
        height: 0.44rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 7px;
        border-bottom: 1px solid #eaeaea;
    }
    .top1 input{
        display: block;
        width: 3.1rem;
        height: 0.3rem;
        border: none;
        background: #f8f8f8;
        /*float: left;*/
        color: #b9b9b9;
        border-radius: 0.1rem;
        padding-left: 30px;
    }

    .top1 i{
        font-size: 0.15rem;
        position: absolute;
        top: 0.14rem;
        left: 0.1rem;
        color: #b9b9b9;
    }
    header i:nth-child(2) {
        /*float: right;*/
        font-size: 0.22rem;
        color: #c6c6c6;
    }
    /*section*/
    section {
        flex: 1;
        overflow: auto;
        justify-content: space-between;
        height: 100%;
    }
    article{
        display: flex;
        overflow: auto;
        height: 5.75rem;
    }
    .left{
        height: 5.75rem;
        position: absolute;
        overflow: auto;
        width:0.75rem;
        border-right:1px solid #eaeaea ;

    }
    .left li{
        width: 100%;
        height: 0.5rem;
        font-size:0.13rem;
        text-align:center;
        line-height:0.5rem ;
        border-bottom:1px solid #eaeaea ;
    }
    .right{
        width:3rem;
        margin-left: 0.75rem;
        overflow: auto;

    }
    .both{
         display: flex;
        flex-direction: column;
        align-items: center;
        height: 5.75rem;
        width: 3rem;
        overflow: auto;

    }
    /*.phone{*/
        /*height: 4.6rem;*/

    /*}*/
    .p1{
        width: 2.5rem;
        height:1rem;

    }
    /*.p1 img{*/
        /*width: 100%;*/
        /*height: 100%;*/
    /*}*/
    /*.phone ul{*/
        /*height: 3rem;*/

    /*}*/

    .phone ul li{
        height: 0.83rem;
        margin: 0.15rem 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: pink;
    }
    /*.phone ul li p{*/
        /*width: 33%;*/
        /*height: 0.83rem;*/
        /*padding: 0 0.1rem;*/
        /*text-align: center;*/
        /*font-size: 0.1rem;*/
        /*color: #7e7e7e;*/
    /*}*/

    /*.phone ul li p b img{*/
        /*width: 0.6rem;*/
        /*height: 0.6rem;*/
    /*}*/

    .house{
        width: 2.5rem;
        height: 2.65rem;
    }

    .noteCom{
        width: 2.5rem;
        height: 1.5rem;
    }
</style>