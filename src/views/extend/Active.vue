<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="投放状态:">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
            <el-col :span="10" :offset="8">
                <div class="grid-content bg-purple">
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-input placeholder="请输入名称或ID" :model="input5">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </el-col>
                        <el-col :span="10">
                            <el-date-picker :model="value6"
                                            type="daterange"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <router-link to="/extend/actadd">
                <el-button type="primary" plain size="small">新建活动</el-button>
            </router-link>
            <el-button type="primary" plain size="small">活动导出</el-button>
            <el-button type="primary" plain size="small">投放</el-button>
            <el-button type="primary" plain size="small">暂停</el-button>
            <el-button type="primary" plain size="small">改价</el-button>
            <el-button type="primary" plain size="small">改预算</el-button>
            <el-button type="primary" plain size="small">改速度</el-button>
            <el-button type="primary" plain size="small">改定向</el-button>
            <el-button type="primary" plain size="small">改时间</el-button>
            <el-button type="primary" plain size="small">复制活动</el-button>
            <el-button type="primary" plain size="small">批量删除</el-button>
        </el-row>
        <el-row>
            <el-table :data="tableData"
                      border
                      style="width: 100%">
                <el-table-column fixed
                                 type="selection"
                                 width="80">
                </el-table-column>
                <el-table-column prop="name"
                                 label="ID"
                                 width="120">
                </el-table-column>
                <el-table-column label="操作"
                                 width="190">
                    <template slot-scope="scope">
                        <el-tooltip placement="top">
                            <div slot="content">修改活动</div>
                            <el-button type="info" icon="el-icon-edit" plain size="mini"></el-button>
                        </el-tooltip>
                        <el-tooltip placement="top">
                            <div slot="content">设置定向</div>
                            <el-button type="info" icon="el-icon-setting" plain size="mini"></el-button>
                        </el-tooltip>
                        <el-tooltip placement="top">
                            <div slot="content">删除活动</div>
                            <el-button type="info" icon="el-icon-edit" plain size="mini"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
                <el-table-column prop="name"
                                 label="投放"
                                 width="120">
                </el-table-column>
                <el-table-column prop="name"
                                 label="状态">
                    <template slot-scope="scope">
                        <el-tooltip placement="top">
                            <div slot="content">用户余额不足</div>
                            <el-button type="warning" icon="el-icon-warning" plain size="mini"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
                <el-table-column prop="name"
                                 label="活动名称"
                                 width="120">
                    <template slot-scope="scope">
                        <el-tooltip placement="top">
                            <div slot="content">修改活动名称</div>
                            <el-button type="info" plain size="mini" icon="el-icon-edit">{{ scope.row.name }}</el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
                <el-table-column label="投放日期"
                                 width="200">
                    <template slot-scope="scope">
                        {{scope.row.start}}~ {{scope.row.end}}
                    </template>
                </el-table-column>
                <el-table-column label="每日预算"
                                 width="160">
                    <template slot-scope="scope">
                        <el-tooltip placement="top">
                            <div slot="content">修改预算</div>
                            <el-button type="info" plain size="mini" icon="el-icon-edit">￥{{ scope.row.budget }}</el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
                <el-table-column label="出价类型">
                    <template slot-scope="scope">
                        <template v-if="scope.row.bidType === '1'">
                            动态CPC
                        </template>
                        <template v-else>
                            动态CPA
                        </template>
                    </template>
                </el-table-column>
                <el-table-column label="出价" width="120">
                    <template slot-scope="scope">
                        <el-tooltip placement="top">
                            <div slot="content">修改出价</div>
                            <el-button type="info" plain size="mini" icon="el-icon-edit">￥{{ scope.row.bid }}</el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
                <el-table-column prop="exposure" label="曝光量"></el-table-column>
                <el-table-column prop="click" label="点击率"></el-table-column>
                <el-table-column label="点击均价">
                    <template slot-scope="scope">￥{{scope.row.clickPrice}}</template>
                </el-table-column>
                <el-table-column label="展示均价">
                    <template slot-scope="scope">￥{{scope.row.showPrice}}</template>
                </el-table-column>
                <el-table-column label="花费">
                    <template slot-scope="scope">￥{{scope.row.cost}}</template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            input5: '',
            value6: '',
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                start: '2018-05-23',
                end: '2018-05-23',
                budget: '500.00',
                bidType: '2',
                bid: '8.00',
                exposure: 0,
                click: '0.00%',
                clickPrice: '0.00',
                showPrice: '0.00',
                cost: '0.00'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                start: '2018-05-23',
                end: '2018-05-23',
                budget: '500.00',
                bidType: '2',
                bid: '8.00',
                exposure: 0,
                click: '0.00%',
                clickPrice: '0.00',
                showPrice: '0.00',
                cost: '0.00'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                start: '2018-05-23',
                end: '2018-05-23',
                budget: '500.00',
                bidType: '1',
                bid: '8.00',
                exposure: 0,
                click: '0.00%',
                clickPrice: '0.00',
                showPrice: '0.00',
                cost: '0.00'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                start: '2018-05-23',
                end: '2018-05-23',
                budget: '500.00',
                bidType: '2',
                bid: '8.00',
                exposure: 0,
                click: '0.00%',
                clickPrice: '0.00',
                showPrice: '0.00',
                cost: '0.00'
            }]
        }
    }
}
</script>

<style scoped>

</style>


