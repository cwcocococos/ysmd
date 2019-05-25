<template>
    <el-dialog title="添加广告类别" :visible="visible"  @update:visible="v=>$emit('update:visible',v)">
        <el-form :model="form" ref="myForm">
            <el-form-item prop="advsTypeName" label="广告类别名称" label-width="150px">
                <el-input v-model="form.advsTypeName" style="width:300px;" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="advId" label="选择广告" label-width="150px">
                <el-select @change="getAdvListByTypeId" v-model="form.advTypeId" placeholder="请选择广告类别">
                    <el-option v-for="item in $store.state.adv.allAdvTypeList"
                               :key="item._id"
                               :label="item.advTypeName"
                               :value="item._id">
                    </el-option>
                </el-select>

                <el-select v-model="form.advId" style="margin-left:10px;" placeholder="请选择广告">
                    <el-option v-for="item in advList"
                               :key="item._id"
                               :label="item.advName"
                               :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:visible',false)">取 消</el-button>
            <el-button type="warning">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "addAdvsType",
        props:["visible","advTypeId","advId"],
        data(){
            return {
                form:{
                    advsTypeName:"",
                    advId:"",
                    advTypeId:""
                },
                advList:[]
            }
        },
        methods:{
            getAdvListByTypeId(){
                console.log(this.form.advTypeId)
                this.$axios.get("getAdvListByTypeId",{
                    params:{
                        advTypeId:this.form.advTypeId
                    }
                }).then(data=>{
                    this.advList=data.advList;
                })

            }
        },
        mounted(){
            if(this.$store.state.adv.allAdvTypeList.length<1)
                this.$store.dispatch("getAllAdvTypeList");
            if(this.advTypeId){
                this.form.advTypeId = this.advTypeId;
                this.getAdvListByTypeId()
            }
            if(this.advId)
                this.form.advId = this.advId;

            console.log(this.advTypeId,this.advId)

        }
    }
</script>

<style scoped>

</style>