<template>
    <div>
        <div class="toolbar">
            <el-form  :inline="true"  class="demo-form-inline">
                <el-form-item label="用户">
                    <el-input  placeholder="请输入要搜索的用户"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" >查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
                v-loading="$store.state.isLoading"
                :data="$store.state.user.userReg"
                :border="true"
                style="width: 100%">
            <el-table-column
                    label="用户日志id"
                    width="250">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="用户账号">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.phoneId }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="用户登陆时间">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.regTime | date }}</span>
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

        <pageInfo actionsName="getUserReg"></pageInfo>
    </div>
</template>

<script>
    export default {
        name: "reg",
        data(){
            return {
                dialogFormVisible:false,
            }
        },
        mounted(){
            // vuex
            this.$store.commit("SET_INIT");
            this.$store.dispatch("getUserReg",1);
        }
    }
</script>

<style scoped>

</style>