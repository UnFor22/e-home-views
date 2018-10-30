<template>
    <div>
        <el-card>
            <div slot="header">
                添加新闻
            </div>
            <el-form ref="form" :model="form" label-width="80px" label-position="left">
                <el-form-item label="作者">
                    <el-select v-model="form.author" placeholder="请选择作者">
                        <el-option v-for="item in authors" :value="item._id" 
                        :label="item.username"
                        :key="item._id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="新闻头图">
                    <uploadAvatar v-model="form.img"></uploadAvatar>
                </el-form-item>
                <el-form-item label="分类">
                    <el-select v-model="form.type" placeholder="请选择分类">
                        <el-option v-for="item in categories" :value="item._id" 
                        :label="item.title"
                        :key="item._id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="标题">
                    <el-input v-model="form.title" required></el-input>
                </el-form-item>
                <el-form-item label="内容" class="textarea">
                    <quill-editor 
                    v-model="form.content"
                    @change="onEditorChange($event)"></quill-editor>
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
                    title: '',
                    content: '',
                    contentText: '',
                    img: '',
                    author: '',
                    type: '',
                    look_num: 100
                },
                authors: [],
                categories:[]
            }
        },
        methods: {
            getAuthor(){
                this.$axios.get('/admin/adminUser').then(res=>{
                    if(res.code == 200){
                        this.authors = res.data
                        // console.log(res)
                    }
                })
            },
            onEditorChange({ quill, html, text }) {
                this.form.contentText = text
                // console.log(this.form.content)
            },
            getCategory(){
                this.$axios.get('/admin/category').then(res=>{
                    if(res.code == 200){
                        this.categories = res.data
                        // console.log(this.categories)
                    }
                })
            },
            onSubmit() {
                this.$axios.post('/admin/news',this.form).then(res => {
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$router.push('/layout/newslist')
                    }
                })
                // console.log(this.form);
            }
        },
        created(){
            this.getAuthor()
            this.getCategory()
        }
    }
</script>

<style>
.ql-editor {
    min-height: 200px;
}
</style>