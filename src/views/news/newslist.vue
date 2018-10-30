<template>
    <div>
        <el-card>
            <div slot="header">
                管理员列表
            </div>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            label="新闻标题"
            width="200"
            prop="title"
            class="tac">
            <!-- <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.title }}</span>
            </template> -->
            </el-table-column>
            <el-table-column
            label="头图"
            width="140">
            <template slot-scope="scope">
                <img  :src="scope.row.img" class="avatar" alt="">
            </template>
            </el-table-column>
            <el-table-column
            label="作者"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.author.username }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="分类"
            width="140">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.type.title }}</span>
            </template>
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope)">编辑</el-button>
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
                this.$axios.get('/admin/news').then(res=> {
                    if(res.code == 200){ 
                        this.tableData = res.data
                        console.log(this.tableData)
                    }
                })
            },
            handleEdit(index, row) {
                console.log(row);
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

<style>
.avatar {
    width: 80px;
    height: 80px;

}
</style>