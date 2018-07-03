<template>
    <div class="container">
        <h2>第7章: 字典和散列</h2>
        <p>在字典和散列中,采用的是[键,值]键值对的形式去储存数据</p>
        <h3>字典</h3>
        <p>字典也成为映射,字典当中是通过键,来实现值的映射</p>
        <h2>创建字典</h2>
        <p>在ES6中了,除了set之外,还添加了map这种数据结构,map类就是字典</p>
        <p>通过扩展map类,实现更多字典的方法</p>
        <p>字典的构造函数</p>
        <pre>
            <code v-highlight>
                function Dictionary() {
                    this.items = {};
                }
            </code>
        </pre>
        <p>与set类似,字典同样使用对象作为存储元素的容器</p>
        <p>声明字典所要使用的方法: </p>
        <p>set(key, value), 为字典添加元素</p>
        <p>delete(key), 通过key移除字典中对应的元素</p>
        <p>has(key), 如果某个键存在字典中就返回true,否则返回false</p>
        <p>get(key), 通过键查找特定的元素并返回</p>
        <p>clear(), 清空字典</p>
        <p>size(), 返回字典的包含元素的数量,与数组的length属性类似</p>
        <p>keys(), 将字典所包含的所有键名以数组形式返回</p>
        <p>values(), 将字典的所有数值以数组的形式返回</p>
    </div>
</template>

<script>
export default {
    name: 'Array',
    data() {
        return {

        };
    }
}
</script>

<style scoped>

</style>