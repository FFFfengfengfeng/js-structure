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
            <el-button type="primary" plain size="small">新建活动</el-button>
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
        }
    }
}
</script>

<style scoped>

</style>


