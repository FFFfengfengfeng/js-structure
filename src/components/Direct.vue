<template>
    <div>
        <!-- 新建活动 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>新建活动</h4>
            </div>
            <div class="text item">
                <el-form ref="form" 
                         :model="form"
                         label-width="100px">
                    <el-form-item label="活动名称:">
                        <el-input placeholder="请输入活动名称" v-model="form.actName"></el-input>
                    </el-form-item>
                    <el-form-item label="每日预算:">
                        <el-input placeholder="请输入不小于100的预算金额" v-model="form.actBudget"></el-input>
                    </el-form-item>
                    <el-form-item label="投放频次:">
                        <el-select v-model="form.actTimes" 
                                   placeholder="请选择活动区域" 
                                   :default-first-option="true"
                                   :filterable="true">
                            <el-option label="1" value="0"></el-option>
                            <el-option label="2" value="1"></el-option>
                            <el-option label="3" value="2"></el-option>
                            <el-option label="4" value="3"></el-option>
                            <el-option label="5" value="4"></el-option>
                            <el-option label="6" value="5"></el-option>
                            <el-option label="7" value="6"></el-option>
                            <el-option label="8" value="7"></el-option>
                            <el-option label="9" value="8"></el-option>
                            <el-option label="10" value="9"></el-option>
                            <el-option label="11" value="10"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="投放时间:">
                        <el-date-picker v-model="form.actDate"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="form.actDate"
                                        end-placeholder="form.actDate">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="投放小时:">
                        <el-radio-group v-model="form.actHour">
                            <el-radio :label="0">不限</el-radio>
                            <el-radio :label="1">选择时间段</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <!-- 广告目的 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>广告目的</h4>
            </div>
            <div class="text item">
                <el-form ref="form" 
                         :model="form"
                         label-width="100px">
                    <el-form-item label="推广类型:">
                        <el-radio-group v-model="form.actExtendType">
                            <el-radio :label="0">普通连接</el-radio>
                            <el-radio :label="1">安卓应用下载</el-radio>
                            <el-radio :label="2">苹果应用下载</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <template v-if="form.actExtendType === 0">
                        <el-form-item label="落地页:*">
                            <el-input type="textarea" placeholder="http://" resize="none" v-model="form.actLandPage"></el-input>
                        </el-form-item>
                    </template>
                    <template v-else-if="form.actExtendType === 1">
                        <el-form-item label="下载地址:*">
                            <el-input type="textarea" placeholder="http://" resize="none" v-model="form.actLandPage"></el-input>
                        </el-form-item>
                        <el-form-item label="应用市场:*">
                            <el-radio-group v-model="form.actExtendType">
                                <el-radio :label="0">应用宝</el-radio>
                                <el-radio :label="1">直接下载</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="APP包名:*">
                            <el-input placeholder="请输入APP包名" v-model="form.actName"></el-input>
                        </el-form-item>
                        <el-form-item label="APP名称:*">
                            <el-input placeholder="请输入APP名称" v-model="form.actName"></el-input>
                        </el-form-item>
                        <el-form-item label="APP版本:*">
                            <el-input placeholder="请输入APP版本" v-model="form.actName"></el-input>
                        </el-form-item>
                        <el-form-item label="APP大小:*">
                            <el-input placeholder="请输入APP大小" v-model="form.actName"></el-input>
                        </el-form-item>
                        <el-form-item label="APP描述:*">
                            <el-input placeholder="请输入APP描述" v-model="form.actName"></el-input>
                        </el-form-item>
                    </template>
                    <template v-else>
                        <el-form-item label="下载地址:*">
                            <el-input type="textarea" placeholder="http://" resize="none" v-model="form.actLandPage"></el-input>
                        </el-form-item>
                        <el-form-item label="APPID:*">
                            <el-input placeholder="请输入APPID" v-model="form.actName"></el-input>
                        </el-form-item>
                        <el-form-item label="APP名称:*">
                            <el-input placeholder="请输入APP名称" v-model="form.actName"></el-input>
                        </el-form-item>
                        <el-form-item label="APP版本:*">
                            <el-input placeholder="请输入APP版本" v-model="form.actName"></el-input>
                        </el-form-item>
                        <el-form-item label="APP大小:*">
                            <el-input placeholder="请输入APP大小" v-model="form.actName"></el-input>
                        </el-form-item>
                        <el-form-item label="APP描述:">
                            <el-input placeholder="请输入APP描述" v-model="form.actName"></el-input>
                        </el-form-item>
                    </template>
                </el-form>
            </div>
        </el-card>
        <!-- 广告位置 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>广告位设置</h4>
            </div>
            <div class="text item">
                <el-form ref="form" 
                         :model="form"
                         label-width="100px"
                         style="width: 820px;">
                    <el-form-item label="广告形式:">
                        <el-radio-group v-model="form.actAdFormat" @change="actAdFormatChange">
                            <el-radio :label="0">移动</el-radio>
                            <el-radio :label="1">PC</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="">
                        <el-checkbox-group size="small" v-model="form.actAdFormatList">
                            <div class="s-checkbox-img" v-if="form.actAdFormat === 0">
                                <img src="../assets/img/ad_type_spot.png" alt="">
                                <el-checkbox-button class="s-btn-spot" label="0">插屏</el-checkbox-button>
                            </div>
                            <div class="s-checkbox-img">
                                <img src="../assets/img/ad_type_video.png" alt="">
                                <el-checkbox-button class="s-btn-video" label="1">视频</el-checkbox-button>
                            </div>
                            <div class="s-checkbox-img" v-if="form.actAdFormat === 0">
                                <img src="../assets/img/ad_type_feed.png" alt="">
                                <el-checkbox-button class="s-btn-feed" label="2">信息流</el-checkbox-button>
                            </div>
                            <div class="s-checkbox-img">
                                <img src="../assets/img/ad_type_banner.png" alt="">
                                <el-checkbox-button class="s-btn-banner" label="3">横幅</el-checkbox-button>
                            </div>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="结算方式:">
                        <el-radio-group v-model="form.actSettlement">
                            <el-radio :label="0">CPM</el-radio>
                            <el-radio :label="1">CPV</el-radio>
                            <el-radio :label="2">CPC</el-radio>
                            <el-radio :label="3">CPA</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Direct',
    props: ['form'],
    methods: {
        actAdFormatChange: function() {
            this.$emit('clearActAdFormat');
        }
    }
}
</script>


<style scoped>
.el-select-dropdown__item.selected{
    font-weight: normal;
}

</style>