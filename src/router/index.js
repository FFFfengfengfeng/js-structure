import Vue from 'vue'
import Router from 'vue-router'

// Chapter 1: introduction to javascript
const Intro = r => require.ensure([], () => r(require('../views/Intro.vue')), 'Intro');
// Chapter 2: array
const Array = r => require.ensure([], () => r(require('../views/Array.vue')), 'Array');
// Chapter 3: Stack
const Stack = r => require.ensure([], () => r(require('../views/Stack.vue')), 'Stack');
// Chapter 4: Queue
const Queue = r => require.ensure([], () => r(require('../views/Queue.vue')), 'Queue');
// Chapter 5: List
const List = r => require.ensure([], () => r(require('../views/List.vue')), 'List');
// Chapter 6: Set
const Set = r => require.ensure([], () => r(require('../views/Set.vue')), 'Set');
// Chapter 7: Hash
const Hash = r => require.ensure([], () => r(require('../views/Hash.vue')), 'Hash');
// Chapter 8: Tree
const Tree = r => require.ensure([], () => r(require('../views/Tree.vue')), 'Tree');
// Chapter 9: Map
const Map = r => require.ensure([], () => r(require('../views/Map.vue')), 'Map');
// Chapter 10: Sort
const Sort = r => require.ensure([], () => r(require('../views/Sort.vue')), 'Sort');
// Chapter 11: Sort
const Mode = r => require.ensure([], () => r(require('../views/Mode.vue')), 'Mode');
// Chapter 12: Complex
const Complex = r => require.ensure([], () => r(require('../views/Complex.vue')), 'Complex');

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
            name: 'Array',
            component: Array
        },
        {
            path: '/stack',
            name: 'Stack',
            component: Stack
        },
        {
            path: '/queue',
            name: 'Queue',
            component: Queue
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/set',
            name: 'Set',
            component: Set
        },
        {
            path: '/hash',
            name: 'Hash',
            component: Hash
        },
        {
            path: '/tree',
            name: 'Tree',
            component: Tree
        },
        {
            path: '/map',
            name: 'Map',
            component: Map
        },
        {
            path: '/sort',
            name: 'Sort',
            component: Sort
        },
        {
            path: '/mode',
            name: 'Mode',
            component: Mode
        },
        {
            path: '/complex',
            name: 'Complex',
            component: Complex
        }
    ]
})
