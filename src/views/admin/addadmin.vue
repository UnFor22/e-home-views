<template>
    <div class="add-admin">
        <el-card>
            <div slot="header">
                添加管理员
            </div>
            <el-form ref="form" :model="formData" label-width="80px" class="add-form" label-position="left">
                <el-form-item label="用户头像">
                    <uploadAvatar class="upload-avatar" v-model="formData.avatar"></uploadAvatar>
                </el-form-item>
                <el-form-item label="用户名" required>
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" required>
                    <el-input type='password' v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="formData.nickname"></el-input>
                </el-form-item>
                <el-form-item label="职业">
                    <el-select v-model="formData.job" placeholder="请选择职业">
                    <el-option label="工程师" value="0"></el-option>
                    <el-option label="教师" value="1"></el-option>
                    <el-option label="律师" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="性别">
                     <el-select v-model="formData.sex" placeholder="请选择性别">
                    <el-option label="女" value="0"></el-option>
                    <el-option label="男" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="个性签名">
                    <el-input type="textarea" v-model="formData.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
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
            return {
                formData:{
                    username: '',
                    nickname: '',
                    avatar: '',
                    password: '',
                    desc: '',
                    job: '',
                    phone: '',
                    sex: ''
                }
            }
        },
        methods: {
            onSubmit() {
                // console.log(this.formData)
                this.$axios.post('/admin/adminUser',this.formData).then(res=> {
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$router.push('/layout/adminList')
                    }
                })
            }
        }
    }
</script>

<style scoped lang='scss'>
.add-form {
    el-form-item{
        text-align: left;
        .upload-avatar {
            border: 1px solid #000;
        }
    }
}
</style>