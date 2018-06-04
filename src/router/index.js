import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 异步加载路由
 */
// 首页
const Home = r => require.ensure([], () => r(require('../views/home/Home.vue')), 'Home');
// 推广-活动
const Active = r => require.ensure([], () => r(require('../views/extend/Active.vue')), 'Active');
// 推广-创意
const Create = r => require.ensure([], () => r(require('../views/extend/Create.vue')), 'Create');
// 报表-投放
const Launch = r => require.ensure([], () => r(require('../views/report/Launch.vue')), 'Launch');
// 报表-活动
const Ractive = r => require.ensure([], () => r(require('../views/report/Active.vue')), 'Active');
// 报表-创意
const Rcreate = r => require.ensure([], () => r(require('../views/report/Create.vue')), 'Create');
// 报表-日期
const Rdate = r => require.ensure([], () => r(require('../views/report/Date.vue')), 'Date');
// 报表-媒体
const Media = r => require.ensure([], () => r(require('../views/report/Media.vue')), 'Media');
// 报表-时段
const Time = r => require.ensure([], () => r(require('../views/report/Time.vue')), 'Time');
// 报表-地域
const Region = r => require.ensure([], () => r(require('../views/report/Region.vue')), 'Region');
// 财务-消费记录
const Consume = r => require.ensure([], () => r(require('../views/finance/Consume.vue')), 'Consume');
// 财务-充值记录
const Recharge = r => require.ensure([], () => r(require('../views/finance/Recharge.vue')), 'Recharge');
// 财务-转账记录
const Transfer = r => require.ensure([], () => r(require('../views/finance/Transfer.vue')), 'Transfer');
// 用户-操作日志
const Log = r => require.ensure([], () => r(require('../views/users/Log.vue')), 'Log');
// 用户-账户信息
const Info = r => require.ensure([], () => r(require('../views/users/Info.vue')), 'Info');
// 用户-品牌logo
const Logo = r => require.ensure([], () => r(require('../views/users/Logo.vue')), 'Logo');
// 用户-提交资质
const Refer = r => require.ensure([], () => r(require('../views/users/Refer.vue')), 'Refer');
// 用户-用户预警
const Warn = r => require.ensure([], () => r(require('../views/users/Warn.vue')), 'Warn');
// 用户-安全中心
const Safe = r => require.ensure([], () => r(require('../views/users/Safe.vue')), 'Safe');
// 工具-定向包
const Directional = r => require.ensure([], () => r(require('../views/tool/Directional.vue')), 'Directional');


export default new Router({
    routes: [
        // 首页
        { path: '/', component: Home },
        // 推广
        { path: '/extend/active', component: Active },
        { path: '/extend/create', component: Create },
        // 报表
        { path: '/report/active', component: Ractive }, 
        { path: '/report/create', component: Rcreate },
        { path: '/report/date', component: Rdate },
        { path: '/report/launch', component: Launch },
        { path: '/report/media', component: Media },
        { path: '/report/region', component: Region },
        { path: '/report/Time', component: Time },
        // 财务
        { path: '/finance/consume', component: Consume }, 
        { path: '/finance/recharge', component: Recharge },
        { path: '/finance/transfer', component: Transfer },
        // 用户
        { path: '/users/info', component: Info }, 
        { path: '/users/log', component: Log },
        { path: '/users/logo', component: Logo },
        { path: '/users/refer', component: Refer },
        { path: '/users/safe', component: Safe },
        { path: '/users/warn', component: Warn },
        // 工具
        { path: '/tool/directional', component: Directional }, 
    ]
})
