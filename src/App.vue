<template>
    <div id="app">
        <Header>
            <Row>
                <Col span="4" offset="17">学习JavaScript数据结构与算法（第2版）</Col>
            </Row>
        </Header>
        <Layout>
            <Sider>
                <Menu theme="light" active-name="1">
                    <Menu-Item name="1">javascript简介</Menu-Item>
                    <Menu-Item name="2">数组</Menu-Item>
                    <Menu-Item name="3">栈</Menu-Item>
                    <Menu-Item name="4">队列</Menu-Item>
                    <Menu-Item name="5">链表</Menu-Item>
                    <Menu-Item name="6">集合</Menu-Item>
                    <Menu-Item name="7">字典和散列表</Menu-Item>
                    <Menu-Item name="8">树</Menu-Item>
                    <Menu-Item name="9">图</Menu-Item>
                    <Menu-Item name="10">排序和搜索算法</Menu-Item>
                    <Menu-Item name="11">算法模式</Menu-Item>
                    <Menu-Item name="12">算法复杂度</Menu-Item>
                </Menu>
            </Sider>
            <Content>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.ivu-layout{
    width: 1190px;
    margin: 0 auto;
}
.ivu-layout-header{
    color: #FFF;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
