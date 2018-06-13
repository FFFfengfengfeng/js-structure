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