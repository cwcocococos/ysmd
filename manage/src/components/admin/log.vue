<template>
    <div>
        <div class="toolbar">
            <el-form  :inline="true"  class="demo-form-inline">
                <el-form-item label="管理员">
                    <el-input  placeholder="请输入要搜索的管理员"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" >查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" @click="dialogFormVisible=true" >添加店铺类别</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
                v-loading="$store.state.isLoading"
                :data="$store.state.admin.adminLog"
                :border="true"
                style="width: 100%">
            <el-table-column
                    label="管理员日志id"
                    width="250">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理员账号">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.adminName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="管理员登陆时间">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.loginTime | date }}</span>
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
                </template>
            </el-table-column>
        </el-table>

        <pageInfo actionsName="getAdminLog"></pageInfo>
        <addShopType :visible.sync="dialogFormVisible"></addShopType>
    </div>
</template>

<script>
    import addShopType from "@/components/shop/addShopType"
    export default {
        name: "log",
        data(){
          return {
              dialogFormVisible:false,
          }
        },
        components:{
            addShopType
        },
        // methods:{
        //     currentChange(pageI){
        //         this.$store.dispatch("getAdminLog",pageI);
        //     }
        // },
        mounted(){
            // vuex
            this.$store.commit("SET_INIT");
            this.$store.dispatch("getAdminLog",1);
        }
    }
</script>

<style scoped>

</style>