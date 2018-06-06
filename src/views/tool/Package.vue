<template>
    <div>
        <el-row>
            <el-col :span="5">
                <router-link to="/tool/packAdd">
                    <el-button type="primary" plain size="small">添加定向包</el-button>
                </router-link>
            </el-col>
            <el-col :span="4" :offset="15">
                <el-input v-model="actName" placeholder="请输入活动或ID">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-table :data="tableData"
                      border
                      style="width: 100%">
                <el-table-column fixed
                                 prop="date"
                                 label="日期"
                                 min-width="150">
                </el-table-column>
                <el-table-column prop="name"
                                 label="姓名"
                                 min-width="120">
                </el-table-column>
                <el-table-column prop="province"
                                 label="省份"
                                 min-width="120">
                </el-table-column>
                <el-table-column prop="city"
                                 label="市区"
                                 min-width="120">
                </el-table-column>
                <el-table-column prop="address"
                                 label="地址"
                                 min-width="300">
                </el-table-column>
                <el-table-column prop="zip"
                                 label="邮编"
                                 min-width="120">
                </el-table-column>
                <el-table-column fixed="right"
                                 label="操作"
                                 min-width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            actType: "",
            actDate: new Date(),
            actName: "",
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]
        };
    },
    methods: {
        handleClick(row) {
            console.log(row);
        }
    },
};
</script>

<style scoped>

</style>


