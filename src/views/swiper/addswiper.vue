<template>
    <div>
        <el-card>
            <div slot="header">
                添加轮播图
            </div>
            <el-form ref="form" :model="form" label-width="90px" label-position="left">
                <el-form-item label="轮播图头图">
                    <uploadAvatar v-model="form.img"></uploadAvatar>
                </el-form-item>
                <el-form-item label="分类">
                    <el-select v-model="form.type" placeholder="请选择分类">
                        <el-option v-for="item in categories" :value="item._id" 
                        :label="item.title"
                        :key="item._id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input-number v-model="form.sort" :min="1" :step="1" ></el-input-number>
                </el-form-item>
                <el-form-item label="是否显示">
                    <el-switch
                        v-model="form.status"
                        active-text="显示"
                        inactive-text="不显示"
                        :active-value="1"
                        :inactive-value="0">
                    </el-switch>
                </el-form-item>
                <el-form-item label="标题">
                    <el-input v-model="form.title" required></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import uploadAvatar from '../../components/upload-avatar'
    export default {
        components:{
            uploadAvatar
        },
        data(){
            return{
                form:{
                    title:'',
                    sort:'',
                    status:'',
                    img:'',
                    type:''
                },
                categories:[]
            }
        },
        methods: {
            getCategory(){
                this.$axios.get('/admin/category').then(res=>{
                    if(res.code == 200){
                        this.categories = res.data
                        // console.log(this.categories)
                    }
                })
            },
            onSubmit() {
                this.$axios.post('/admin/swiper',this.form).then(res => {
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$router.push('/layout/swiperlist')
                    }
                })
                // console.log(this.form);
            }
        },
        created(){
            this.getCategory()
        }
    }
</script>

<style>
.ql-editor {
    min-height: 200px;
}
</style>