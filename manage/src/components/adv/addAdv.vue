<template>
    <el-dialog title="添加广告" :visible="visible"  @update:visible="v=>$emit('update:visible',v)">
        <el-form :model="form" ref="myForm">
            <el-form-item prop="advTypeName" label="广告名称" label-width="150px">
                <el-input v-model="form.advName" style="width:300px;" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="advTypeName" label="广告描述" label-width="150px">
                <el-input v-model="form.advContent" style="width:300px;" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="advTypeName" label="广告价格" label-width="150px">
                <el-input v-model="form.advPrice" style="width:300px;" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="advTypeId" label="广告类别" label-width="150px">
                <el-select v-model="form.advTypeId" placeholder="请选择">
                    <el-option v-for="item in $store.state.adv.allAdvTypeList"
                            :key="item._id"
                            :label="item.advTypeName"
                            :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="广告图片" label-width="150px">
                <el-upload
                        :data = "form"
                        ref="upload"
                        class="upload-demo"
                        action="/ele/addAdv/"
                        name="advPic"
                        :auto-upload = "false"
                        :limit="1"
                        :on-success = "upSuccess"
                        list-type="picture">
                    <el-button size="small" type="warning">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:visible',false)">取 消</el-button>
            <el-button type="warning" @click="addAdv">确 定</el-button>
        </div>
    </el-dialog>

</template>

<script>
    // import bus from "@/bus"
    export default {
        name: "add-adv",
        props:["visible","advTypeId"],
        data(){
            return {
                form:{
                    advName:"",
                    advTypeId:"",
                    advPrice:"",
                    advContent:""
                }
            }
        },
        methods:{
            upSuccess(res){
                // console.log(res);
                // 清空表单
                this.$refs.myForm.resetFields();
                // 清空上传的文件
                this.$refs.upload.clearFiles();
                this.$bus.$emit("getAdvList",1);

                if(this.$route.name !== "advList"){
                    this.$router.push({name:"advList"});
                }
                console.log(33333,this.$route.name);

                this.$emit('update:visible',false);

            },
            addAdv(){
                this.$refs.upload.submit();
            }
        },
        watch:{
          advTypeId(newValue,oldValue){
              console.log(22222,newValue);
              if(newValue){
                  this.form.advTypeId=newValue;
              }
          }
        },
        mounted(){
            this.$store.dispatch("getAllAdvTypeList");
        }
    }
</script>

<style scoped>

</style>