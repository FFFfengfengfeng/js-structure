<template>
    <el-container id="app">
        <el-header>
            <el-menu mode="horizontal">
                <el-row>
                    <el-col :span="3">
                        <img class="s-logo" src="./assets/img/logo.png" alt="" srcset="">
                    </el-col>
                    <el-col :span="2" :offset="19">
                        <el-button class="s-log-out" type="primary" plain>退出</el-button>
                    </el-col>
                </el-row>
            </el-menu>
        </el-header>
        <el-container>
            <el-aside width="201px">
                <el-menu background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#ffd04b"
                         default-active="1"
                         :unique-opened=true
                         :router=true
                         class="el-menu-vertical-demo">
                    <el-menu-item index="/">
                        <i class="el-icon-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-extend"></i>
                            <span>推广</span>
                        </template>
                        <el-menu-item index="2-1" route="/extend/active">活动</el-menu-item>
                        <el-menu-item index="2-2" route="/extend/create">创意</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-state"></i>
                            <span>报表</span>
                        </template>
                        <el-menu-item index="3-1" route="/report/launch">投放报表</el-menu-item>
                        <el-menu-item index="3-2" route="/report/active">活动报表</el-menu-item>
                        <el-menu-item index="3-3" route="/report/create">创意报表</el-menu-item>
                        <el-menu-item index="3-4" route="/report/date">日期报表</el-menu-item>
                        <el-menu-item index="3-5" route="/report/time">时段报表</el-menu-item>
                        <el-menu-item index="3-6" route="/report/media">媒体报表</el-menu-item>
                        <el-menu-item index="3-7" route="/report/region">地域报表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-finance"></i>
                            <span>财务</span>
                        </template>
                        <el-menu-item index="4-1" route="/finance/consume">消费记录</el-menu-item>
                        <el-menu-item index="4-2" route="/finance/recharge">充值记录</el-menu-item>
                        <el-menu-item index="4-3" route="/finance/transfer">转账记录</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-users"></i>
                            <span>用户</span>
                        </template>
                        <el-menu-item index="5-1" route="/users/log">操作日志</el-menu-item>
                        <el-menu-item index="5-2" route="/users/info">账户信息</el-menu-item>
                        <el-menu-item index="5-3" route="/users/refer">提交资质</el-menu-item>
                        <el-menu-item index="5-4" route="/users/logo">品牌LOGO</el-menu-item>
                        <el-menu-item index="5-5" route="/users/warn">用户预警</el-menu-item>
                        <el-menu-item index="5-6" route="/users/safe">安全中心</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-tool"></i>
                            <span>工具</span>
                        </template>
                        <el-menu-item index="6-1" route="/tool/package">定向包</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "App",
    methods: {

    }
};
</script>

<style>
#app {
    height: 100%;
}
#app .el-header{
    padding: 0;
}
#app .el-table{
    margin-top: 20px;
}
#app .el-submenu .el-menu-item{
    padding-left: 52px !important;
}
#app .el-container,
#app .el-aside,
#app .el-menu{
    height: 100%;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
