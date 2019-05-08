<template>
    <div class="purse">
        <ul class="purse_box">
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
</template>

<script>
    export default {
        name: "Purse",
        data(){
            return{
                navArr:[
                    {path:'/yhj',name:"yhj",icon:"iconfont icon-youhuiquan7",title:"优惠券"},
                    {path:'/zged',name:"zged",icon:"iconfont icon-pie-chart_icon",title:"最高额度"},
                    {path:'/lpk',name:"lpk",icon:"iconfont icon-lipinqia",title:"礼品卡"},
                    {path:'/wdqb',name:"wdqb",icon:"iconfont icon-wodeqianbaoicon",title:"我的钱包"},
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
    /*钱包*/
    .purse{
        height: 0.93rem;
        background: #ffffff;
    }
    .purse_box{
        padding: 0 0.28rem 0 0.34rem;
        justify-content: space-between;
        align-items: center;
        display: flex;
    }
    .purse_box li{
        display: flex;
        position: relative;
        align-content: space-between;
        padding: 0.24rem 0 0.24rem 0;
        font-size: 0.12rem;
        color: #353535;
        flex-direction: column;
    }
    .yhj .icon-youhuiquan7,.lpk .icon-lipinqia{
        width: 0.26rem;
        height:0.3rem;
        font-size: 0.26rem;
        margin: 0 auto;
    }
    .zged .icon-pie-chart_icon{
        width: 0.26rem;
        height:0.3rem;
        font-size: 0.20rem;
        margin: 0 auto;
        text-align: center;
    }
    .wdqb .icon-wodeqianbaoicon{
        font-size: 0.18rem;
        width: 0.26rem;
        height:0.3rem;
        margin: 0 auto;
        text-align: center;
    }
</style>