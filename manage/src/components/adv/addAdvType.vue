<template>
    <!--<el-dialog title="添加店铺类别" :visible.sync="visible">-->
    <el-dialog title="添加广告类别" :visible="visible"  @update:visible="v=>$emit('update:visible',v)">
        <el-form :model="form" ref="myForm">
            <el-form-item prop="advTypeName" label="广告类别名称" label-width="200px">
                <el-input v-model="form.advTypeName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="广告类别图片">
                <el-upload
                        :data = "form"
                        ref="upload"
                        class="upload-demo"
                        action="/ele/addAdvType/"
                        name="advTypePic"
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
            <el-button type="warning" @click="addAdvType">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "addAdvType",
        data(){
            return {
                form:{
                    advTypeName:""// 广告类别名称
                }
            }
        },
        props:["visible"],
        methods:{
            // 上传图片成功
            upSuccess(res){
                if(res.ok === 1){
                    this.$message({
                        message: '恭喜你，添加广告类别成功！',
                        type: 'success'
                    });
                    // 清空表单
                    this.$refs.myForm.resetFields();
                    // 清空上传的文件
                    this.$refs.upload.clearFiles();
                    this.$store.dispatch("getAdvTypeList",{
                        pageIndex:1
                    })
                    this.$emit('update:visible',false);
                }else{
                    this.$message.error(res.msg);
                }
                console.log(res);
            },
            addAdvType(){
                this.$refs.upload.submit();
            }
        }
    }
</script>

<style scoped>

</style>