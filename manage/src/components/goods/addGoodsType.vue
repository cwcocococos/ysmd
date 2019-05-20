<template>
    <el-dialog title="添加商品类别" :visible="visible"  @update:visible="v=>$emit('update:visible',v)">
        <el-form :model="form" ref="myForm">
            <el-form-item prop="goodsTypeName" label="商品类别名称" label-width="150px">
                <el-input v-model="form.goodsTypeName" style="width:300px;" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="shopId" label="选择店铺" label-width="150px">
                <el-select @change="getShopListByTypeId" v-model="form.shopTypeId" placeholder="请选择店铺类别">
                    <el-option v-for="item in $store.state.shop.allShopTypeList"
                               :key="item._id"
                               :label="item.shopTypeName"
                               :value="item._id">
                    </el-option>
                </el-select>

                <el-select v-model="form.shopId" style="margin-left:10px;" placeholder="请选择店铺">
                    <el-option v-for="item in shopList"
                               :key="item._id"
                               :label="item.shopName"
                               :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:visible',false)">取 消</el-button>
<<<<<<< Updated upstream
            <el-button type="primary">确 定</el-button>
=======
            <el-button type="primary"  @click="addGoodsType">确 定</el-button>
>>>>>>> Stashed changes
        </div>
    </el-dialog>

</template>

<script>
    // import bus from "@/bus"
    export default {
        name: "add-goods-type",
        props:["visible","shopTypeId","shopId"],
        data(){
            return {
                form:{
                    goodsTypeName:"",
                    shopId:"",
                    shopTypeId:""
                },
                shopList:[]
            }
        },
        methods:{
            getShopListByTypeId(){
                console.log(this.form.shopTypeId)
                this.$axios.get("getShopListByTypeId",{
                    params:{
                        shopTypeId:this.form.shopTypeId
                    }
                }).then(data=>{
                    this.shopList=data.shopList;
                })

<<<<<<< Updated upstream
=======
            },
            upSuccess(res){
                if(res.ok === 1){
                    this.$message({
                        message: '恭喜你，添加店铺类别成功！',
                        type: 'success'
                    });
                    // 清空表单
                    this.$refs.myForm.resetFields();
                    // 清空上传的文件
                    this.$refs.upload.clearFiles();
                    this.$store.dispatch("getShopTypeList",{
                        pageIndex:1
                    })
                    this.$emit('update:visible',false);
                }else{
                    this.$message.error(res.msg);
                }
                console.log(res);
            },
            addShopType(){
                this.$refs.upload.submit();
>>>>>>> Stashed changes
            }
        },
        mounted(){
            if(this.$store.state.shop.allShopTypeList.length<1)
                this.$store.dispatch("getAllShopTypeList");
            if(this.shopTypeId){
                this.form.shopTypeId = this.shopTypeId;
                this.getShopListByTypeId()
            }
            if(this.shopId)
                this.form.shopId = this.shopId;

            console.log(this.shopTypeId,this.shopId)

        }
    }
</script>

<style scoped>

</style>