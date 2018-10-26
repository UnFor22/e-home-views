<template>
    <div>
        <el-menu     
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#001d26"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>首页</span>
            </template>   
            <router-link to='/layout'>
                <el-menu-item index="1-1">首页</el-menu-item>
            </router-link>
            <router-link to='/'>
                <el-menu-item index="1-2">登录页</el-menu-item>
            </router-link>        
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
            <i class="el-icon-menu"></i>
            <span>管理员管理</span>
            </template>
            <router-link to='/layout/adminList'>
                <el-menu-item index="2-1">管理员列表</el-menu-item>
            </router-link>
            <router-link to='/layout/addadmin'>
                <el-menu-item index="2-2">添加管理员</el-menu-item>
            </router-link>
        </el-submenu>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
.el-menu-vertical-demo {
    height: 100vh;
}
</style>