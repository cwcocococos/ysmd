<template>
    <div id="footer">
        <router-link to="/" class="title alive">
            <i class="iconfont icon-shouye"></i>
            <p>首页</p>
        </router-link>
        <router-link to="/sort" class="title">
            <i class="iconfont icon-fenlei"></i>
            <p>分类</p>
        </router-link>
        <router-link to="/shopcar" class="title">
            <i class="iconfont icon-gouwuche1"></i>
            <p>购物车</p>
        </router-link>
        <router-link to="/my" class="title">
            <i class="iconfont icon-wodedangxuan"></i>
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
 
  /* footer */
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
    color:#cdccc7
  }
  #footer .title .iconfont{
    display:block;
    font-size:.18rem;
    color:#767676;
  }
  #footer .alive p{
    color:#ed7d33;
  }
  #footer .alive .iconfont{
    color:#ed7d33;
  }
</style>