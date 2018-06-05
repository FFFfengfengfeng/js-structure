<template>
    <div>
        <Direct :form="form"></Direct>
        <Setting :form="form"></Setting>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>广告出价</h4>
            </div>
            <div class="text item">
                <el-form ref="form" 
                         :model="form"
                         label-width="100px">
                    <el-form-item label="出价:">
                        <el-input placeholder="请输入活动名称" v-model="form.actName"></el-input>
                    </el-form-item>
                    <el-form-item label="防作弊:">
                        <el-radio-group v-model="form.actAdFormat">
                            <el-radio :label="0">是</el-radio>
                            <el-radio :label="1">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="防作弊程度:">
                        <el-radio-group v-model="form.actAdFormat">
                            <el-radio :label="0">低</el-radio>
                            <el-radio :label="1">中</el-radio>
                            <el-radio :label="1">高</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
import Direct from '../../components/Direct';
import Setting from '../../components/Setting';

export default {
    components: { Direct, Setting },
    data() {
        return {
            form: {
                actName     : '',     // 活动名称
                actBudget   : '',    // 活动预算
                actTimes    : '2',     // 投放频次
                actDate     : [new Date(), new Date()],     // 投放日期
                actHour     : 0,     // 投放小时
                actLandPage : '', // 落地页
                actExtendType: 0, // 推广类型
                actAdFormat: 0, // 广告形式
                actSettlement: 0, // 结算方式
            },
        }
    }
}
</script>

<style scoped>
.el-form{
    width: 460px;
}
</style>


