<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>卡片名称</h4>
            </div>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="公司名称:*">
                    <el-input v-model="form.comName"></el-input>
                </el-form-item>
                <el-form-item label="网站名称:*">
                    <el-input v-model="form.webName"></el-input>
                </el-form-item>
                <el-form-item label="公司网址:*">
                    <el-input v-model="form.comSite"></el-input>
                </el-form-item>
                <el-form-item label="通讯地址:*">
                    <el-input v-model="form.comAddr"></el-input>
                </el-form-item>
                <el-form-item label="行业分类:*">
                    <el-input v-model="form.comType"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>联系信息</h4>
            </div>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="联系人:*">
                    <el-input v-model="form.comPeople"></el-input>
                </el-form-item>
                <el-form-item label="联系电话:">
                    <el-input v-model="form.comPhone"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h4>其他信息</h4>
            </div>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="关联QQ:*">
                    <el-input v-model="form.comQQ"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                comName: '',
                webName: '',
                comSite: '',
                comAddr: '',
                comType: '',
                comQQ: ''
            }
        };
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
</style>


