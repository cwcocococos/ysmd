<template>
  <div id="app">
    <div class="main">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer"
export default {
  name:'app',
  components :{
     Footer
  }
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
