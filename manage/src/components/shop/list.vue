<template>
    <div>
        <div class="toolbar">
            <el-form  :inline="true"  class="demo-form-inline">
                <el-form-item>
<<<<<<< Updated upstream
                    <el-input v-model="search" placeholder="请输入要搜索的商品"></el-input>
=======
                    <el-input v-model="search" placeholder="请输入要搜索的店铺"></el-input>
>>>>>>> Stashed changes
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" >
                        查询
                    </el-button>
                </el-form-item>
                <el-form-item>
<<<<<<< Updated upstream
                    <el-button type="warning" @click="visible=true">添加商品</el-button>
=======
                    <el-button type="primary" @click="visible=true">添加店铺</el-button>
>>>>>>> Stashed changes
                </el-form-item>
            </el-form>
        </div>
        <el-table
                v-loading="$store.state.isLoading"
                :data="shopList"
                :border="true"
                style="width: 100%">
            <el-table-column
<<<<<<< Updated upstream
                    label="商品id"
=======
                    label="店铺id"
>>>>>>> Stashed changes
                    width="250">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
<<<<<<< Updated upstream
                    label="商品名称">
=======
                    label="店铺名称">
>>>>>>> Stashed changes
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.shopName }}</span>
                </template>
            </el-table-column>
            <el-table-column
<<<<<<< Updated upstream
                    label="商品图片">
=======
                    label="店铺的图片">
>>>>>>> Stashed changes
                <template slot-scope="scope">
                    <img :src="$store.state.config.baseUrl+scope.row.shopPic" alt="">
                </template>
            </el-table-column>
            <el-table-column
<<<<<<< Updated upstream
                    label="商品类别">
=======
                    label="店铺的类别">
>>>>>>> Stashed changes
                <template slot-scope="scope">
                    {{scope.row.shopTypeName}}
                </template>
            </el-table-column>
<<<<<<< Updated upstream
             <el-table-column
                    label="商品价格">
                <template slot-scope="scope">
                    {{scope.row.shopPrice}}
                </template>
            </el-table-column>
             <el-table-column
                    label="商品描述">
                <template slot-scope="scope">
                    {{scope.row.shopContent}}
                </template>
            </el-table-column>
=======

>>>>>>> Stashed changes

            <el-table-column
                    label="上传时间">
                <template slot-scope="scope">
                    {{scope.row.addTime | date}}
                </template>
            </el-table-column>

            <el-table-column label="操作" width="400">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
<<<<<<< Updated upstream
=======
                    >编辑</el-button>
                    <el-button
                            size="mini"
>>>>>>> Stashed changes
                            type="danger"
                    >删除</el-button>
                    <el-button
                            size="mini"
<<<<<<< Updated upstream
                            type="warning"
=======
                            type="primary"
>>>>>>> Stashed changes
                            @click="goodsTypeVisible=true;shopTypeId=scope.row.shopTypeId;shopId=scope.row._id"
                    >添加商品类别</el-button>
                    <el-button
                            size="mini"
<<<<<<< Updated upstream
                            type="warning"
=======
                            type="primary"
>>>>>>> Stashed changes

                    >添加商品</el-button>
                </template>
            </el-table-column>
        </el-table>
        <pageInfoTwo :pageIndex="pageIndex" :pageSum="pageSum"></pageInfoTwo>
        <addShop :visible.sync="visible"></addShop>
        <addGoodsType  v-if="goodsTypeVisible" :shopTypeId="shopTypeId" :shopId="shopId" :visible.sync="goodsTypeVisible"></addGoodsType>

    </div>
</template>

<script>
    // import bus from "@/bus"
    export default {
        name: "list",
        data(){
            return {
                visible:false,
                goodsTypeVisible:false,
                shopList:[],
                search:"",
                pageIndex:1,
                pageSum:1,
                shopTypeId:"",
                shopId:""
            }
        },
        methods:{
            getShopList(pageI){
                this.$axios.get("shopList",{
                    params:{
                        pageIndex:pageI,
                        search:this.search
                    }
                }).then(data=>{
                    this.shopList=data.shopList;
                    this.pageIndex = data.pageIndex;
                    this.pageSum = data.pageSum;



                    // this.$store.commit("SET_PAGE_INFO",{
                    //     pageIndex:data.pageIndex,
                    //     pageSum:data.pageSum
                    // })
                })
            }
        },
        mounted(){
          this.getShopList(1);
          this.$bus.$on("getShopList",this.getShopList);
        }
    }
</script>

<style scoped>

</style>