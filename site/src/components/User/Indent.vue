<template>
    <div class="Indent">
        <div class="content_indent">
            <div class="indent_box">
                <div class="indent_my">
                    我的订单
                </div>
                <div class="indent_total">
                    全部订单
                </div>
            </div>
            <ul class="indent_boxW">
                <li v-for="item,index in navArr"
                    @click="change(index)"
                    :key="index"
                    :class="item.name"
                >
                    <i :class="item.icon"></i>
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Indent",
        data(){
            return{
                navArr:[
                    {path:'/dfk',name:"dfk",icon:"iconfont icon-daifukuan",title:"待付款"},
                    {path:'/dsk',name:"dsk",icon:"iconfont icon-xiaohuoche",title:"待收货"},
                    {path:'/dpj',name:"dpj",icon:"iconfont icon-xiaoxi",title:"待评价"},
                    {path:'/thx',name:"thx",icon:"iconfont icon-qianzi",title:"退换修"},
                ],
                showIndex:0,
            }
        },
        methods:{
            change(index){
                this.showIndex=index;
                let p=this.navArr[index].path;
                this.$router.push({path:p})
            },
        }
    }
</script>

<style scoped>
    /* 我的订单*/
    .content_indent{
        height: 1.19rem;
        background: #ffffff;
    }
    .indent_box{
        background-color: #fff;
        height:0.44rem;
        color: rgba(0,0,0,.54);
        position: relative;
        padding-right:0.38rem;
        justify-content: space-between;
        align-items: center;
        display: flex;
        border-bottom: 1px solid rgba(0,0,0,.15);
    }
    .indent_box .indent_my{
        font-size: 0.14rem;
        padding: 0 0 0 0.16rem;
        color: rgba(0,0,0,.87);

    }
    .indent_box .indent_total{
        font-size: 0.12rem;
        color: #919191;
        align-items: center;
        display: flex;
    }
    .indent_box:after{
        content: "";
        position: absolute;
        right: 0.2rem;
        top: 50%;
        width: 0.08rem;
        height: 0.08rem;
        border-left: 1px solid currentColor;
        border-top: 1px solid currentColor;
        transform: translate3d(0,-50%,0) rotate(135deg);
        -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
    }
    .indent_boxW{
        padding: 0 0.34rem;
        justify-content: space-between;
        align-items: center;
        display: flex;
    }
    .indent_boxW li{
        display: flex;
        position: relative;
        align-content: space-between;
        padding: 0.16rem 0 0.13rem 0;
        font-size: 0.12rem;
        color: #353535;
        flex-direction: column;
    }
    .dfk .icon-daifukuan{
        width: 0.26rem;
        height:0.3rem;
        font-size: 0.26rem;
        margin: 0 auto;
    }
    .dsk .icon-xiaohuoche,.dpj .icon-xiaoxi,.thx .icon-qianzi{
        width: 0.26rem;
        height:0.3rem;
        font-size: 0.20rem;
        margin: 0 auto;
        text-align: center;
    }

</style>