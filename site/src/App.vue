<template>
  <div id="app">
    <div class="main">
      <router-view />
    </div>
    <Footer v-show="!(path ==='/shop'|| path==='/search'||path ==='/dfk'||path ==='/dsk'||path ==='/dpj'||path ==='/qb'||path ==='/register') "></Footer>
    <ShopMain v-show="(path ==='/shop')"></ShopMain>
    <Shopfooter v-show="(path ==='/shop')"></Shopfooter>
    <!--<div v-if="isfooter">-->
    <!--<Footer></Footer>-->
    <!--</div>-->
  </div>
</template>

<script>
import Footer from "@/components/Footer"
import Shopfooter from "@/components/Shopcontent/Shopfooter"
import ShopMain from "@/components/Shopcontent/ShopMain"
export default {
  name:'app',
  components :{
    Footer,
    Shopfooter,
    ShopMain
  },
  data(){
    return{
      path:''
    }
  },
  mounted() {
    this.path = this.$route.path;
    // console.log(this.$route.path)
  },
  watch:{
    $route(to,from){
      this.path = to.path
    }
  }
  // data(){
  //   return {
  //    isfooter: true
  //   }
  // },

//   watch: {
//     $route(to, from) {
//       if (this.$route.path === "/shop") {
//         this.isfooter = false;
//       }
//     }
//   }
}

</script>

<style>

  #app{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
  }
  .main{
    overflow: auto;
  }

</style>
