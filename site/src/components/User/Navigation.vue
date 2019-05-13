<template>
    <div id="Navigation">
        <ul class="items">
            <li class="item_li"
                v-for="item,index in navArr"
                @click="change(index)"
                :key="index"
                :class="item.name"
            >
                <div>
                    <i :class="item.icon" style="font-size: 0.2rem"></i>
                </div>
                <a href="javascript:;">
                    <span>{{item.title}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data(){
            return{
                navArr:[
                    {path:'/xmhy',name:"xmhy",icon:"iconfont icon-huiyuan",title:"小米会员"},
                    {path:'/hyzx',name:"hyzx",icon:"iconfont icon-huangguan1",title:"会员中心"},
                    {path:'/fwzx',name:"fwzx",icon:"iconfont icon-fuwu",title:"服务中心"},
                    {path:'/xmzj',name:"xmzj",icon:"iconfont icon-ziyuan",title:"小米之家"},
                    {path:'/zgd',name:"zgd",icon:"iconfont icon-woshou",title:"直供点"},
                    {path:'/gdgn',name:"gdgn",icon:"iconfont icon-gengduo",title:"更多功能"},
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
    /*导航*/
    .items{
        background: #ffffff;
    }
    .items li{
        height: 0.53rem;
        position: relative;
        color: rgba(0,0,0,.54);
        line-height: 0;
        list-style: none;
    }
    .item_li:after{
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
    .items li>a{
        display: block;
        height: 100%;
        padding-right: .28rem;
        margin-left: 0.56rem;
        display: flex;
        box-align: center;
        box-pack: justify;
        color: currentColor;
        border-bottom: 1px solid rgba(0,0,0,.15);
    }
    .items li>a>span{
        font-size: .16rem;
        font-style: normal;
        color: rgba(0,0,0,.87);
        line-height: 0.53rem;
        display: block;
    }
    .item_li>.iconfont{
        font-size: 0.22rem;
    }
    .item_li>div{
        width: 0.53rem;
        height: 0.53rem;
        float: left;
    }
    .item_li div>i{
        display: block;
        line-height: 0.53rem;
        text-align: center;
        align-items: center;
    }
    .item_li .icon-huiyuan{
        color: #ffc313;
    }
    .item_li .icon-huangguan1{
        color: #fdb934;
    }
    .item_li .icon-fuwu{
        color: #fa6c5e;
    }
    .item_li .icon-ziyuan{
        color: #ff8940;
    }
    .item_li .icon-woshou{
        color: #7aafd7;
    }
    .item_li .icon-gengduo{
        color: #92da5c;
    }
</style>