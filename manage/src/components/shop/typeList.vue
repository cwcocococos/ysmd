<template>
    <div>
        <div class="toolbar">
            <el-form  :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="search"  placeholder="请输入要搜索的商品类别"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" @click="$store.dispatch('getShopTypeList',{pageIndex:1,search})" >
                        查询
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" @click="dialogFormVisible=true">添加商品类别</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table
                v-loading="$store.state.isLoading"
                :data="$store.state.shop.shopTypeList"
                :border="true"
                style="width: 100%">
            <el-table-column
                    label="商品类别id"
                    width="250">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品类别名称">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.shopTypeName }}</span>
                </template>
            </el-table-column>
            <el-table-column label="商品类别的图片">
                <template slot-scope="scope">
                    <img :src="$store.state.config.baseUrl+scope.row.shopTypePic" alt="">
                </template>
            </el-table-column>


            <el-table-column
                    label="上传时间">
                <template slot-scope="scope">
                    {{scope.row.addTime | date}}
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                    >编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                    >删除</el-button>
                    <el-button size="mini" type="warning" @click="shop_visible=true;shopTypeId=scope.row._id">添加商品</el-button>
                </template>
            </el-table-column>
        </el-table>

        <pageInfo actionsName="getShopTypeList" :params="{search}"></pageInfo>
        <!--<div class="toolbar">-->
            <!--<el-pagination-->
                    <!--background-->
                    <!--layout="prev, pager, next"-->
                    <!--@current-change="pageI=>$store.dispatch('getShopTypeList',pageI)"-->
                    <!--:current-page="$store.state.pageInfo.pageIndex"-->
                    <!--:page-count="$store.state.pageInfo.pageSum"-->
            <!--&gt;-->
            <!--</el-pagination>-->
        <!--</div>-->
        <addShopType  :visible.sync="dialogFormVisible" ></addShopType>
        <!--<addShop v-if="shop_visible" :visible.sync="shop_visible" :shopTypeId="shopTypeId"></addShop>-->
        <addShop  :visible.sync="shop_visible" :shopTypeId="shopTypeId"></addShop>
    </div>
</template>

<script>
    export default {
        name: "type-list",
        data(){
            return {
                dialogFormVisible:false,
                shop_visible:false,
                search:"",
                shopTypeId:""
            }
        },
        methods:{

        },
        mounted(){
            this.$store.dispatch("getShopTypeList",{
                pageIndex:1
            })
        }
    }
</script>

<style scoped>

</style>