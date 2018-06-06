<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>设置定向</h4>
            </div>
            <div class="text item">
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="受众区域&足迹" name="1">
                        <el-form ref="form" 
                                 label-width="100px"
                                 style="width: 820px;">
                            <el-form-item label="投放区域:">
                                <el-radio-group v-model="form.actArea">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">选择省份</el-radio>
                                    <el-radio :label="2">选择一、二线城市</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <template v-if="form.actArea === 1">
                                <el-form-item label="">
                                    <el-checkbox v-model="form.regionList" 
                                                :label="0">华北</el-checkbox>
                                    <el-checkbox-group class="s-checkbox-group" v-model="form.provincesList">
                                        <el-checkbox :label="0">北京</el-checkbox>
                                        <el-checkbox :label="1">天津</el-checkbox>
                                        <el-checkbox :label="2">河北</el-checkbox>
                                        <el-checkbox :label="3">山西</el-checkbox>
                                        <el-checkbox :label="4">内蒙古</el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="">
                                    <el-checkbox v-model="form.regionList" 
                                                :label="1">东北</el-checkbox>
                                    <el-checkbox-group class="s-checkbox-group" v-model="form.provincesList">
                                        <el-checkbox :label="5">辽宁</el-checkbox>
                                        <el-checkbox :label="6">吉林</el-checkbox>
                                        <el-checkbox :label="7">黑龙江</el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </template>
                            <template v-if="form.actArea === 2">
                                <el-form-item label="">
                                    <el-checkbox v-model="form.regionList" 
                                                :label="0">一线城市</el-checkbox>
                                    <el-checkbox-group class="s-checkbox-group" v-model="form.provincesList">
                                        <el-checkbox :label="0">北京</el-checkbox>
                                        <el-checkbox :label="1">天津</el-checkbox>
                                        <el-checkbox :label="2">河北</el-checkbox>
                                        <el-checkbox :label="3">山西</el-checkbox>
                                        <el-checkbox :label="4">内蒙古</el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="">
                                    <el-checkbox v-model="form.regionList" 
                                                :label="1">二线城市</el-checkbox>
                                    <el-checkbox-group class="s-checkbox-group" v-model="form.provincesList">
                                        <el-checkbox :label="5">辽宁</el-checkbox>
                                        <el-checkbox :label="6">吉林</el-checkbox>
                                        <el-checkbox :label="7">黑龙江</el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </template>
                        </el-form>
                    </el-collapse-item>
                    <el-collapse-item title="受众属性" name="2">
                        <el-form ref="form" 
                                 label-width="100px"
                                 style="width: 820px;">
                            <el-form-item label="基本属性:">
                                <el-radio-group v-model="form.basicAttr">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="" v-if="form.basicAttr === 1">
                                <el-transfer v-model="value2"
                                             :data="data2">
                                </el-transfer>
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                    <el-collapse-item title="行为定向" name="3">
                        <el-form ref="form" 
                                 label-width="100px"
                                 style="width: 820px;">
                            <el-form-item label="行为定向:">
                                <el-radio-group v-model="form.behaviorDirect">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">行为分类</el-radio>
                                    <el-radio :label="2">行为指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="行为过滤:">
                                <el-radio-group v-model="form.behaviorFilter">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                    <el-collapse-item title="受众设备&行为" name="4">
                        <el-form ref="form" 
                                 :model="form"
                                 label-width="100px">
                            <el-form-item label="设备类型:">
                                <el-radio-group v-model="form.deviceType">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="设备品牌:">
                                <el-radio-group v-model="form.deviceBrand">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="操作系统:">
                                <el-radio-group v-model="form.deviceSystem">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="联网方式:">
                                <el-radio-group v-model="form.deviceNetwork">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="运营商:">
                                <el-radio-group v-model="form.deviceOperator">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="媒体定向:">
                                <el-radio-group v-model="form.deviceMedia">
                                    <el-radio :label="0">移动</el-radio>
                                    <el-radio :label="1">视频</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Setting',
    props: ['form'],
    data() {
        const generateData2 = () => {
            const data = [];
            const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
            const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
            cities.forEach((city, index) => {
            data.push({
                label: city,
                key: index,
                pinyin: pinyin[index]
            });
            });
            return data;
        };
        return {
            activeNames: ['1', '2', '3', '4'],
            data2: generateData2(),
            value2: [],
        };
    }
}
</script>


<style scoped>
.el-select-dropdown__item.selected{
    font-weight: normal;
}
</style>