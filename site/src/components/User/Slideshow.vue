<template>
    <div class="daPrint">
            <el-carousel trigger="click" height="100%">
                <el-carousel-item v-for="item in picArr" :key="item">
                    <h3 class="small"><img :src="item" alt=""></h3>
                </el-carousel-item>
            </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Slideshow",
        data(){
            return {
                picArr:[
                    require("../../assets/images/userlb.jpg"),
                    require("../../assets/images/userlb2.webp"),
                    require("../../assets/images/userlb3.webp"),
                ]
            }
        }
    }
</script>

<style scoped>
    /*轮播图*/
    .daPrint{
        height: 1.18rem;
        width: 100%;
    }
    .el-carousel{
        height:100%;
        width: 100%;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size:0.14rem;
        opacity: 0.75;
        line-height: 1.18rem;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>