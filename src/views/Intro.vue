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
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {

        };
    }
}
</script>

<style scoped>

</style>