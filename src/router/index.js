import Vue from 'vue'
import Router from 'vue-router'

// Chapter 1: introduction to javascript
const Intro = r => require.ensure([], () => r(require('../views/Intro.vue')), 'Intro');
// Chapter 2: array
const Array = r => require.ensure([], () => r(require('../views/Array.vue')), 'Array');

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Intro',
            component: Intro
        },
        {
            path: '/array',
            name: 'Intro',
            component: Intro
        }
    ]
})
