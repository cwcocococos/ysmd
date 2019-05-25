<template>
    <div>
        <div class="toolbar">
            <el-form  :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="search"  placeholder="请输入要搜索的和广告类别"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" @click="$store.dispatch('getAdvTypeList',{pageIndex:1,search})" >
                        查询
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" @click="dialogFormVisible=true">添加广告类别</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table
                v-loading="$store.state.isLoading"
                :data="$store.state.adv.advTypeList"
                :border="true"
                style="width: 100%">
            <el-table-column
                    label="广告类别id"
                    width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="广告类别名称">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.advTypeName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="广告类别的图片">
                <template slot-scope="scope">
                    <img :src="$store.state.config.baseUrl+scope.row.advTypePic" alt="">
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
                    <el-button
                            size="mini"
                            type="warning"
                            @click="adv_visible=true;advTypeId=scope.row._id"
                    >添加广告</el-button>
                </template>
            </el-table-column>
        </el-table>

        <pageInfo actionsName="getAdvTypeList" :params="{search}"></pageInfo>
        <addAdvType  :visible.sync="dialogFormVisible" ></addAdvType>
        <!--<addShop v-if="shop_visible" :visible.sync="shop_visible" :shopTypeId="shopTypeId"></addShop>-->
        <addAdv  :visible.sync="adv_visible" :advTypeId="advTypeId"></addAdv>
    </div>
</template>

<script>
    export default {
        name: "typeList",
        data(){
            return {
                dialogFormVisible:false,
                adv_visible:false,
                search:"",
                advTypeId:""
            }
        },
        methods:{

        },
        mounted(){
            this.$store.dispatch("getAdvTypeList",{
                pageIndex:1
            })
        }
    }
</script>

<style scoped>

</style>