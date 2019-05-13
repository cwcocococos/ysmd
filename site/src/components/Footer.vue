<template>
    <div id="footer">
        <router-link tag="li"  :to="{path:'/main'}" class="title" >
            <i class="iconfont icon-shouye"></i>
            <p>首页</p>
        </router-link>
        <router-link tag="li"  :to="{path:'/sort'}" class="title">
            <i class="iconfont icon-fenlei"></i>
            <p>分类</p>
        </router-link>
        <router-link tag="li"  :to="{path:'/shopcar'}" class="title">
            <i class="iconfont icon-gouwuche1"></i>
            <p>购物车</p>
        </router-link>
        <router-link tag="li"  :to="{path:'/my'}" class="title">
            <i class="iconfont icon-wodedangxuan"></i>
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data () {
            return {
            }
        },
        methods: {
        }

    }
</script>

<style scoped>
 @import "../../public/iconfont/iconfont.css";
  /* footer */
 #footer{
     position: fixed;
     z-index: 9999;
     bottom: 0;
     left: 0;
     right: 0;
     background: #fff;
     transition: transform .2s ease-out;
     box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
     font-size: .12rem;
 }
  #footer{
    height:.495rem;
    display:flex;
    border-top:1px solid #b7b7b7;
    justify-content:space-around;
    font-size:.14rem;
  }
  #footer .title{
    height:.495rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
      color:#767676;

      /*color:#cdccc7*/
  }
  #footer .title i{
    display:block;
    font-size:.18rem;

  }
  .router-link-active p{
      color:#ed7d33;
  }
 .router-link-active i{
     color:#ed7d33;
 }
  /*#footer .alive p{*/
    /*color:#ed7d33;*/
  /*}*/
  /*#footer .alive .iconfont{*/
    /*color:#ed7d33;*/
  /*}*/
</style>