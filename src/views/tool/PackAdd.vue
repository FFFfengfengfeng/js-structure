<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>设置定向包名称</h4>
            </div>
            <div>
                <el-form label-width="100px">
                    <el-form-item label="定向包名称:">
                        <el-input placeholder="定向包名称"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <Setting :form="form"></Setting>
    </div>
</template>

<script>
import Setting from '../../components/Setting';

export default {
    components: { Setting },
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
        };
    },

}
</script>

<style scoped>

</style>