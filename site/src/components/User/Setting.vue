<template>
    <div id="Setting">
        <div class="item_li seven"
             v-for="item,index in navArr"
             @click="change(index)"
             :key="index"
             :class="item.name"
        >
            <div>
                <i :class="item.icon" style="font-size: 0.24rem"></i>
            </div>
            <a href="javascript:;">
                <span>{{item.title}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Setting",
        data(){
            return{
                navArr:[
                    {path:'/sz',name:"sz",icon:"iconfont icon-shezhi",title:"设置"},
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
    #Setting{
        background: #ffffff;
        margin-bottom: 0.62rem;
    }
    #Setting div{
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
    #Setting li>a{
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
    #Setting .seven>a{
        border-bottom: none;
    }
    #Setting div>a>span{
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
</style>