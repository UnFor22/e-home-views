<template>
    <div class="admin-list">
        <el-card>
            <div slot="header">
                管理员列表
            </div>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="姓名"
            width="140" class="tac">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.username }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="头像"
            width="140">
            <template slot-scope="scope">
                <img  :src="scope.row.avatar" class="avatar" alt="">
            </template>
            </el-table-column>
            <el-table-column
            label="性别"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.sex }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="工作"
            width="140">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.job }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="个性签名"
            width="220">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.desc }}</span>
            </template>
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                tableData:[]
            }
        },
        methods: {
            getData(){
                this.$axios.get('/admin/adminUser').then(res=> {
                    if(res.code == 200){ 
                        this.tableData = res.data
                        // console.log(this.tableData)
                    }
                })
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped>

</style>