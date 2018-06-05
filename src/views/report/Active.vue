<template>
    <div>
        <el-row>
            <el-col :span="5">
                <el-button type="primary" plain size="small">导出</el-button>
            </el-col>
            <el-col :span="10" :offset="9">
                <el-row>
                    <el-col :span="8">
                        <el-select v-model="actType" placeholder="选择活动">
                            <el-option label="全部" value="0"></el-option>
                            <el-option label="待投放" value="1"></el-option>
                            <el-option label="投放" value="2"></el-option>
                            <el-option label="暂停" value="3"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="8">
                        <el-date-picker v-model="actDate"
                                        type="date"
                                        placeholder="选择日期">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="8">
                        <el-input v-model="actName" placeholder="请输入活动或ID">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </el-col>
                </el-row>
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


