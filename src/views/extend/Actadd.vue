<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>新建活动</h4>
            </div>
            <div class="text item">
                <el-form ref="form" 
                         :model="form"
                         label-width="100px">
                    <el-form-item label="活动名称:">
                        <el-input placeholder="请输入活动名称" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="每日预算:">
                        <el-input placeholder="请输入不小于100的预算金额" v-model="form.region"></el-input>
                    </el-form-item>
                    <el-form-item label="投放频次:">
                        <el-select v-model="form.region" 
                                   placeholder="请选择活动区域" 
                                   :default-first-option="true"
                                   :filterable="true">
                            <el-option label="区域一" value="0"></el-option>
                            <el-option label="区域二" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="投放时间:">
                        <el-date-picker v-model="value6"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="投放小时:">
                        <el-radio-group v-model="form.resource">
                            <el-radio :label="0">不限</el-radio>
                            <el-radio :label="1">选择时间段</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>广告目的</h4>
            </div>
            <div class="text item">
                <el-form ref="form" 
                         :model="form"
                         label-width="100px">
                    <el-form-item label="活动名称:">
                        <el-input placeholder="请输入活动名称" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="每日预算:">
                        <el-input placeholder="请输入不小于100的预算金额" v-model="form.region"></el-input>
                    </el-form-item>
                    <el-form-item label="投放频次:">
                        <el-select v-model="form.region" 
                                   placeholder="请选择活动区域" 
                                   :default-first-option="true"
                                   :filterable="true">
                            <el-option label="区域一" value="0"></el-option>
                            <el-option label="区域二" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="投放时间:">
                        <el-date-picker v-model="value6"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="投放小时:">
                        <el-radio-group v-model="form.resource">
                            <el-radio :label="0">不限</el-radio>
                            <el-radio :label="1">选择时间段</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>推广位设置</h4>
            </div>
            <div class="text item">
                <el-form ref="form" 
                         :model="form"
                         label-width="100px">
                    <el-form-item label="活动名称:">
                        <el-input placeholder="请输入活动名称" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="每日预算:">
                        <el-input placeholder="请输入不小于100的预算金额" v-model="form.region"></el-input>
                    </el-form-item>
                    <el-form-item label="投放频次:">
                        <el-select v-model="form.region" 
                                   placeholder="请选择活动区域" 
                                   :default-first-option="true"
                                   :filterable="true">
                            <el-option label="区域一" value="0"></el-option>
                            <el-option label="区域二" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="投放时间:">
                        <el-date-picker v-model="value6"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="投放小时:">
                        <el-radio-group v-model="form.resource">
                            <el-radio :label="0">不限</el-radio>
                            <el-radio :label="1">选择时间段</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: '0',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: 0,
                desc: ''
            },
            value6: '',
            rules: {
                name: [{ required: true, message: '请输入活动名称', trigger: 'change' }],
                region: [{ required: true, message: '请输入不小于100的预算金额', trigger: 'blur' }]
            }
        }
    }
}
</script>

<style scoped>
.el-form{
    width: 460px;
}
.el-card{
    margin-bottom: 20px;
}
.el-select-dropdown__item.selected{
    font-weight: normal;
}
</style>


