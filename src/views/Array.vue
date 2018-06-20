<template>
    <div class="container">
        <h2>第二章: 数组</h2>
        <p>数组是最简单的内存数据结构,js中的数组非常强大,不仅可以动态改变数组长度,而且数组中可以保存不同数据类型的元素</p>
        <p>这是其他语言比不上的,不过在开发中,保持数组元素的数据类型一致是最好的实践</p>
        <h3>使用用数组</h3>
        <p>为什么要用数组, 举个例子, 当我们要记录一个班级的学生的学号的时候, 就非常符合使用数组的场景,因为不可能声明50个变量(假设班上有50个人)</p>
        <p>js中创建和初始化数组非常简单</p>
        <p>通过new Array()创建一个数组实例</p>
        <p>同时可以通过字面量创建数组, 如: a = [1, 2, 3]</p>
        <p>数组创建之后我们可以访问数组的元素, 可以通过下标去访问数组的元素如: a[0]</p>
        <p>因此我们可以通过循环的方式,访问数组中的每一个元素</p>
        <h3>添加元素</h3>
        <p>js中向数组添加元素有几种方法</p>
        <p>第一种可以用push方法, push方法将会想数组末尾添加元素</p>
        <pre>
            <code v-highlight>
                var arr = [1, 2, 3];
                arr.push(4);
                console.log(arr); // [1, 2, 3, 4]
            </code>
        </pre>
        <p>第二种可以用unshift方法, unshift方法将会向数组首位添加元素</p>
        <pre>
            <code v-highlight>
                var arr = [1, 2, 3];
                arr.unshift(4);
                console.log(arr); // [4, 1, 2, 3]
            </code>
        </pre>
        <h3>删除元素</h3>
        <p>删除数组中的元素同样有两种方法,删除数组最后一位元素的pop()方法和删除数组第一位元素的shift()方法</p>
        <h3>任意位置添加和删除数组的方法</h3>
        <p>数组还有一个splice()方法</p>
        <p>使用splice()方法可以删除或添加任意位置的元素,该方法第一个参数是需要操作的开始下标,第二个参数是一个可选参数,表示需要移除的个数,之后的表示添加的元素</p>
        <pre>
            <code v-highlight>
                var arr = [1, 2, 3];
                arr.splice(1, 0, 4);
                console.log(arr); // [1, 4, 2, 3]
            </code>
        </pre>
        <h3>二维和多维数组</h3>
        <p>例子: </p>
        <pre>
            <code v-highlight>
                var arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

                /* 遍历二维数组 */
                for(var i = 0; i &lt; arr.length; i ++) {
                    for(var j = 0; j &lt; arr[i].length; j ++) {
                        console.log(arr[i][j]);
                    }
                }
            </code>
        </pre>
        <h3>js中数组方法参考</h3>
        <p>js中的数组有很多有用的方法,参照表格</p>
        <Table border :columns="columns1" :data="data1"></Table>
        <h3>数组合并</h3>
        <p>concat()方法是用于合并两个数组,这个方法不会改变原数组,会返回一个新的副本(深拷贝)</p>
        <h3>ES6和数组的新功能</h3>
        <p>ES6数组新增了'Symbol.iterator'属性,可以迭代数组</p>
        <pre>
            <code v-highlight>
                var arr = [1, 2, 3, 4, 5];

                /* Symbol.iterator */
                var iterator = arr[Symbol.iterator]();

                while(iterator.next().value !== undefined) {
                    console.log(iterator.next().value);
                }
            </code>
        </pre>
        <p>新增方法对照表</p>
        <Table border :columns="columns2" :data="data2"></Table>
        <h4>Array.from</h4>
        <p>可以调用Array.from方法复制一个数组,或者从数组中过滤元素</p>
        <h4>Array.of</h4>
        <p>Array.of可以根据传入的参数创建一个新的数组,也可以使用该方法复制一个已有的数组</p>
        <h3>输出数组为字符串</h3>
    </div>
</template>

<script>
export default {
    name: 'Array',
    data() {
        return {
            columns1: [
                {
                    title: '方法名',
                    key: 'name'
                }, 
                {
                    title: '描述',
                    key: 'intro'
                }
            ],
            data1: [
                {
                    name: 'concat',
                    intro: '连接2个或更多数组,并返回结果'
                },
                {
                    name: 'every',
                    intro: '对数组的每一项都执行给定的函数, 如果每一项都是true, 则返回true'
                },
                {
                    name: 'filter',
                    intro: '对数组的每一项都执行给定的函数,返回true的项所组成的数组'
                },
                {
                    name: 'forEach',
                    intro: '对数组的每一项都执行给定的函数,没有返回值'
                },
                {
                    name: 'join',
                    intro: '将数组连接成字符串'
                },
                {
                    name: 'indexOf',
                    intro: '返回与参数相等元素的索引,没有则返-1'
                },
                {
                    name: 'lastIndexof',
                    intro: '从数组末尾向前搜索与参数相等元素的索引,没有则返回-1'
                },
                {
                    name: 'map',
                    intro: '对数组的每个元素都执行给定函数,返回函数返回值所组成的数组'
                },
                {
                    name: 'reverse',
                    intro: '颠倒数组的顺序,第一位变成最后一位'
                },
                {
                    name: 'splice',
                    intro: '传入索引值,将索引范围的元素作为新数组返回'
                },
                {
                    name: 'some',
                    intro: '对数组执行相同的函数,如果有一项返回true,则返回true'
                },
                {
                    name: 'sort',
                    intro: '按字母顺序进行排序或者按照传入的函数执行比较'
                },
                {
                    name: 'toString',
                    intro: '讲数组作为字符串输出'
                },
                {
                    name: 'valueOf',
                    intro: '和toString类似,将数组作为字符串返回'
                }
            ],
            columns2: [
                {
                    title: '方法名',
                    key: 'name'
                }, 
                {
                    title: '描述',
                    key: 'intro'
                }
            ],
            data2: [
                {
                    name: 'entries',
                    intro: '返回一个迭代器,调用next()方法,返回的value是一个数组,0是数组下标,1是数组元素'
                },
                {
                    name: 'keys',
                    intro: '返回一个迭代器,调用next()方法,返回的value是数组下标'
                },
                {
                    name: 'fill',
                    intro: '使用静态值填充一个数组,用法跟splice类似'
                },
                {
                    name: 'copyWithin',
                    intro: '复制元素中的一系列元素到该数组的指定位置'
                },
                {
                    name: 'find',
                    intro: '接收一个函数,搜索满足回调函数条件的值,找不到的时候返回false'
                },
                {
                    name: 'findIndex',
                    intro: '接收一个函数,搜索满足回调函数条件的下标,不满足会返回-1'
                },
                {
                    name: 'includes',
                    intro: '如果数组包含某个元素,则返回true, 否则返回false, 如果传入一个开始索引,会从开始索引开始搜索'
                }
            ]
        };
    }
}
</script>

<style scoped>

</style>
