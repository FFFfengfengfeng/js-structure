<template>
    <div id="app">
        <Header>
            <Row>
                <Col span="4" offset="17">学习JavaScript数据结构与算法（第2版）</Col>
            </Row>
        </Header>
        <Layout>
            <Sider>
                <Menu theme="light" active-name="/" @on-select="selectMenu">
                    <Menu-Item name="/">javascript简介</Menu-Item>
                    <Menu-Item name="/array">数组</Menu-Item>
                    <Menu-Item name="/stack">栈</Menu-Item>
                    <Menu-Item name="/queue">队列</Menu-Item>
                    <Menu-Item name="/list">链表</Menu-Item>
                    <Menu-Item name="/set">集合</Menu-Item>
                    <Menu-Item name="/hash">字典和散列表</Menu-Item>
                    <Menu-Item name="/tree">树</Menu-Item>
                    <Menu-Item name="/map">图</Menu-Item>
                    <Menu-Item name="/sort">排序和搜索算法</Menu-Item>
                    <Menu-Item name="/mode">算法模式</Menu-Item>
                    <Menu-Item name="/complex">算法复杂度</Menu-Item>
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
    name: 'App',
    data() {
        return { };
    },
    methods: {
        selectMenu: function(name) {
            this.$router.push({ path: name });
        }
    }
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
