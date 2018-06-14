<template>
    <div class="container">
        <h2>第一章</h2>
        <h3>环境搭建</h3>
        <p>javascript不像java,python,c等语言,需要自己配置开发环境,运行javascript非常简单</p>
        <p>通过浏览器控制台运行(chrome或firefox)</p>
        <p>可以使用web服务器运行javascript(如: xampp)</p>
        <p>还可以使用nodejs搭建web服务器</p>
        <h3>Javascript基础</h3>
        <p>在html中编写js有两种方式:</p>
        <p>通过<strong>&lt;script&gt;&lt;/script&gt;</strong>标签,将js代码都写在这个标签里</p>
        <p>第二种方式可以用指定&lt;script&gt;的<strong>src</strong>属性,使用外部链接的js脚本</p>
        <h4>变量</h4>
        <p>js有多种数据类型,string, number, bolean, object, null, undefined; es6中新加了Symbol的数据类型</p>
        <p>虽然js有多种数据类型,但js声明变量并不需要声明类型</p>
        <h4>变量作用域</h4>
        <p>js中没有块级作用域,但有函数作用域,同时有一个全局作用域,所有函数都能访问全局作用域,
            但全局作用域并不能访问函数中声明的变量,开发当中应该尽量减少使用全局作用域,因为这样会造成全局污染</p>
        <h4>操作符</h4>
        <p>js中有非常多的操作符</p>
        <p>常用的操作符</p>
        <ul>
            <li>1.算数操作符</li>
            <li>2.赋值操作符</li>
            <li>3.比较操作符</li>
            <li>4.逻辑操作符</li>
            <li>5.位操作符</li>
            <li>6.一元操作符</li>
            <li>7.其他操作符</li>
        </ul>
        <h4>真值和假值</h4>
        <p>在js中除了true和false可以表示真假之后,其他类型在判断的时候将会隐式调用类型转换并进行真假值的求值操作</p>
        <p>转换表格</p>
        <Table border :columns="columns1" :data="data1"></Table>
        <h4>相等操作符(==和===)</h4>
        <p>当使用==操作符时,如果两个比较的数据不是同一种数据类型,将会进行隐式的类型转换</p>
        <p>而===操作符,不仅会比较值是否相等,还会比较类型是否相等</p>
        <h4>控制语句</h4>
        <p>条件控制语句:</p>
        <pre>
            <code v-highlight>
                if (condition) {
                    branch
                } else if (condition) {
                    branch
                } else {
                    branch
                }
            </code>
        </pre>
        <p>循环语句:</p>
        <pre>
            <code v-highlight>
                /*while 循环*/ 
                while(condition) {
                    /*do something*/
                }

                /*do...while循环*/
                do {
                    /*do something*/
                } while(condition)

                /*for循环*/
                for(condition) {
                    /*do something*/
                }
            </code>
        </pre>
        <h4>函数</h4>
        <p>函数在js中非常重要,是一等公民;</p>
        <p>声明函数的语法: function关键字 函数名(参数) {}</p>
        <pre>
            <code v-highlight>
                function a() {
                    /* do something */
                }
            </code>
        </pre>
        <h4>js面向对象</h4>
        <p>js中的对象是一组名值对的集合</p>
        <p>面向对象就是通过类,创建很多的对象,在类中定义对象的特性</p>
        <h3>调试工具</h3>
        <p>调试是开发当中很重要的一环(大部分时间我们都用在调试上)</p>
        <p>我们可以通过浏览器的控制台进行调试 F12可以打开浏览器的控制台</p>
        <p>除了浏览器的控制台, 很多IDE都带有debug的功能, webStrom, Sublime Text等</p>
        <h3>ECMAScript概述</h3>
        <p>现在主流浏览器已经对ECMAScript的新特性有很好的兼容,而且通过自动化构建工具gulp, grunt或者打包工具webpack我们可以尽情使用ES6,ES7的新特性</p>
        <p>ECMAScript和javascript的关系, ECMAScript是一个标准, javascript是一个实现, actionScript和Jscript都遵循这个标准或者说规范</p>
        <p>在使用es6或者es7的新特性之前,我们可以从MDN上查看这些特性的兼容性,针对项目作出选择</p>
        <h4>使用babel</h4>
        <p>babel是个什么东东,简单说,babel就是可以让我们尽情使用es6,es7的新特性,babel将会编译成es5的代码,同时为我们提供叠片</p>
        <h3>ES6新增</h3>
        <p>let和const</p>
        <p>模板字面量</p>
        <p>解构</p>
        <p>展开操作符</p>
        <p>箭头函数</p>
        <p>类</p>
        <h4>let和const代替var声明</h4>
        <p>es5中使用var声明的变量,可以重复声明,后者将会覆盖之前的值,同时js中没有块级作用域</p>
        <p>let和const声明可以作为一个块级作用域的替代方案,同时重复声明将会报错,这让js的表现更加合理</p>
        <p>const跟let的作用一样,不过const声明的变量是只读类型,不能修改,修改将会报错,就是一个常量</p>
        <p>因此,我们可以将不改的变量都用const声明,都需要或可能要重新赋值的变量才使用let声明</p>
        <h4>模板字面量</h4>
        <p>es6中新加的模板字面量是一个非常有用的特性</p>
        <p>举个例子:</p>
        <pre>
            <code v-highlight>
                /* es5中字符串拼接 */
                var str = '';
                for(var i = 0; i &lt; data.length; i ++) {
                    str += '&lt;p&gt;' + data[i].name + '&lt;/p&gt;';
                }

                /* es6中拼接字符串 */
                let str = '';
                for(let i = 0; i &lt; data.length; i ++) {
                    str += `&lt;p&gt;${data[i].name}&lt;/p&gt;`;
                }
            </code>
        </pre>
        <p>好处一目了然,代码更加优雅,可读性更强,这只是其中一个好处</p>
        <h4>箭头函数</h4>
        <p>如果之前了解过coffeeScript的话, 箭头函数就很好理解了</p>
        <p>箭头函数的写法:</p>
        <pre>
            <code v-highlight>
                /* 箭头函数 */
                let a = (args) => {
                    /* do something */
                }
            </code>
        </pre>
        <p>箭头函数,与普通函数在表现上有一些差异, 对象中的函数如果用箭头函数, this将不再指向这个对象而是window</p>
        <p>所有如果使用vue开发,methods中声明的方法如果用箭头函数将会找不到vue实例而报错</p>
        <h4>函数默认参数</h4>
        <p>es6允许我们在声明函数的时候, 给参数定义默认值</p>
        <pre>
            <code v-highlight>
                /* es5的做法 */
                function something(a) {
                    var a = a || 0;
                }

                /* es6的做法 */
                function something(a = 0) {

                }
            </code>
        </pre>
        <p>在声明函数的时候同时定义了默认参数, 不再需要多些额外的判断</p>
        <h4>声明展开和剩余参数</h4>
        <p>在es5中,我们通过apply()把数组转化为参数</p>
        <pre>
            <code v-highlight>
                var params = [1, 2, 3];

                /* es5的做法 */
                function something() {
                    
                }
                something.apply(undefined, params);

                /* es6的做法 */
                function something(...params) {

                }
            </code>
        </pre>
        <p>同时展开操作符也可以作为剩余参数作为使用</p>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            columns1: [
                {
                    title: '数据类型',
                    key: 'type'
                },
                {
                    title: '转换成布尔值',
                    key: 'value'
                }
            ],
            data1: [
                {
                    type: 'undefined',
                    value: 'false',
                },
                {
                    type: 'null',
                    value: 'false'
                },
                {
                    type: '布尔值',
                    value: 'true还是true, false还是false'
                },
                {
                    type: '数字',
                    value: '+0, -0和NaN都是false, 其他都是true'
                },
                {
                    type: '字符串',
                    value: '如果是空字符串则为false, 其他都是true'
                },
                {
                    type: '对象',
                    value: 'true'
                }
            ]
        };
    }
}
</script>

<style scoped>

</style>