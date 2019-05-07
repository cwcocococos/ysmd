<template>
    <div class="toolbar">
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="currentChange"
                :current-page="$store.state.pageInfo.pageIndex"
                :page-count="$store.state.pageInfo.pageSum"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "page-info",
        props:["actionsName","params"],
        methods:{
            currentChange(pageIndex){
                this.$store.dispatch(this.actionsName,{
                    ...this.params?this.params:{},
                    ...{
                        pageIndex
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>