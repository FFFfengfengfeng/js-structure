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
                                 :model="form"
                                 label-width="100px">
                            <el-form-item label="投放区域:">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">选择省份</el-radio>
                                    <el-radio :label="2">选择一、二线城市</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                    <el-collapse-item title="受众属性" name="2">
                        <el-form ref="form" 
                                 :model="form"
                                 label-width="100px">
                            <el-form-item label="基本属性:">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-form>
                    </el-collapse-item>
                    <el-collapse-item title="行为定向" name="3">
                        <el-form ref="form" 
                                 :model="form"
                                 label-width="100px">
                            <el-form-item label="行为定向:">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">行为分类</el-radio>
                                    <el-radio :label="2">行为指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="行为过滤:">
                                <el-radio-group v-model="radio2">
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
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="设备品牌:">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="操作系统:">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="操作系统:">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="联网方式:">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="运营商:">
                                <el-radio-group v-model="radio2">
                                    <el-radio :label="0">不限</el-radio>
                                    <el-radio :label="1">指定</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="媒体定向:">
                                <el-radio-group v-model="radio2">
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
        return {
            activeNames: ['1', '2', '3', '4']
        };
    }
}
</script>


<style scoped>
.el-collapse{
    /* border: 1px solid #ebeef5; */
}
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