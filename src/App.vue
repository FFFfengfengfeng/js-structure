<template>
    <el-container id="app">
        <el-header>
            <el-menu class="el-menu-demo"
                     mode="horizontal">
            </el-menu>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#ffd04b"
                         default-active="1"
                         unique-opened="true"
                         class="el-menu-vertical-demo" 
                         @open="handleOpen" 
                         @close="handleClose">
                    <el-menu-item index="1">
                        <i class="el-icon-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-extend"></i>
                            <span>推广</span>
                        </template>
                        <el-menu-item index="1-1">活动</el-menu-item>
                        <el-menu-item index="1-2">创意</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-state"></i>
                            <span>报表</span>
                        </template>
                        <el-menu-item index="1-1">投放报表</el-menu-item>
                        <el-menu-item index="1-2">活动报表</el-menu-item>
                        <el-menu-item index="1-2">创意报表</el-menu-item>
                        <el-menu-item index="1-2">日期报表</el-menu-item>
                        <el-menu-item index="1-2">时段报表</el-menu-item>
                        <el-menu-item index="1-2">媒体报表</el-menu-item>
                        <el-menu-item index="1-2">地域报表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-finance"></i>
                            <span>财务</span>
                        </template>
                        <el-menu-item index="1-1">消费记录</el-menu-item>
                        <el-menu-item index="1-2">充值记录</el-menu-item>
                        <el-menu-item index="1-2">转账记录</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-users"></i>
                            <span>用户</span>
                        </template>
                        <el-menu-item index="1-1">操作日志</el-menu-item>
                        <el-menu-item index="1-2">账户信息</el-menu-item>
                        <el-menu-item index="1-2">提交资质</el-menu-item>
                        <el-menu-item index="1-2">品牌LOGO</el-menu-item>
                        <el-menu-item index="1-2">用户预警</el-menu-item>
                        <el-menu-item index="1-2">安全中心</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-tool"></i>
                            <span>工具</span>
                        </template>
                        <el-menu-item index="1-1">定向包</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "App",
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
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
#app .el-container,
#app .el-aside,
#app .el-menu{
    height: 100%;
}
</style>
