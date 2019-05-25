<template>
    <div>
        <div class="toolbar">
            <el-form  :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="search" placeholder="请输入要搜索的广告"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" >
                        查询
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" @click="visible=true">添加广告</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
                v-loading="$store.state.isLoading"
                :data="advList"
                :border="true"
                style="width: 100%">
            <el-table-column
                    label="广告id"
                    width="250">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="广告名称">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.advName }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="广告的图片">
                <template slot-scope="scope">
                    <img width="100px" :src="$store.state.config.baseUrl+scope.row.advPic" alt="">
                </template>
            </el-table-column>
            <el-table-column
                    label="广告的类别">
                <template slot-scope="scope">
                    {{scope.row.advTypeName}}
                </template>
            </el-table-column>
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
                    >编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                    >删除</el-button>
                    <el-button
                            size="mini"
                            type="warning"
                            @click="advsTypeVisible=true;advTypeId=scope.row.advTypeId;advId=scope.row._id"
                    >添加广告类别</el-button>
                    <el-button
                            size="mini"
                            type="warning"

                    >添加广告</el-button>
                </template>
            </el-table-column>
        </el-table>
        <pageInfoTwo :pageIndex="pageIndex" :pageSum="pageSum"></pageInfoTwo>
        <addAdv :visible.sync="visible"></addAdv>
        <addAdvsType  v-if="advsTypeVisible" :advTypeId="advTypeId" :advId="advId" :visible.sync="advsTypeVisible"></addAdvsType>

    </div>
</template>

<script>
    // import bus from "@/bus"
    export default {
        name: "list",
        data(){
            return {
                visible:false,
                advsTypeVisible:false,
                advList:[],
                search:"",
                pageIndex:1,
                pageSum:1,
                advTypeId:"",
                advId:""
            }
        },
        methods:{
            getAdvList(pageI){
                this.$axios.get("advList",{
                    params:{
                        pageIndex:pageI,
                        search:this.search
                    }
                }).then(data=>{
                    this.advList=data.advList;
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
          this.getAdvList(1);
          this.$bus.$on("getAdvList",this.getAdvList);
        }
    }
</script>

<style scoped>

</style>