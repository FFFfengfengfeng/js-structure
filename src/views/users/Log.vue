<template>
    <div>
        <el-row>
            <el-col :span="5">
                <el-button type="primary" plain size="small">导出</el-button>
            </el-col>
            <el-col :span="10" :offset="9">
                <el-row>
                    <el-col :span="8" :offset="16">
                        <el-date-picker v-model="actDate"
                                        type="date"
                                        placeholder="选择日期">
                        </el-date-picker>
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
                                 label="日志内容"
                                 min-width="150">
                </el-table-column>
                <el-table-column prop="name"
                                 label="操作帐号"
                                 min-width="120">
                </el-table-column>
                <el-table-column prop="province"
                                 label="操作IP"
                                 min-width="120">
                </el-table-column>
                <el-table-column prop="city"
                                 label="操作时间"
                                 min-width="120">
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