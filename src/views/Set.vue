<template>
    <div class="container">
        <h2>第6章: 集合</h2>
        <p>集合是一种不含有重复数据的数据结构</p>
        <h3>构建数据集合</h3>
        <p>集合中的元素是不重复同时也没有顺序的</p>
        <p>集合有空集的概念,指的是不包含任何元素的集合,同时集合有交集,并集,差集等操作</p>
        <h3>创建集合</h3>
        <p>在ES6中已经添加了原生的数据类型set,不过为了掌握集合的原理,我们自己去实现一个集合</p>
        <p>构建集合的数据类型不再选用数组,而是选用对象,因为集合是没有顺序的</p>
        <p>集合包含的方法有:</p>
        <p>add(value): 向集合中添加一个新的项</p>
        <p>delete(value): 从集合移除一个值</p>
        <p>has(value): 如果值在集合中,返回true,否则返回false</p>
        <p>clear(): 移除集合中的所有项</p>
        <p>size(): 返回集合所包含元素的数量,与数组的length属性类似</p>
        <p>values(): 返回一个包含集合中所有值的数组</p>
        <p>定义集合的类</p>
        <pre>
            <code v-highlight>
                function Set() {
                    this.items = {};
                }
            </code>
        </pre>
        <p>has(value)</p>
        <pre>
            <code v-highlight>
                Set.prototype.has = function(value) {
                    return this.items.hasOwnProperty(value);
                } 
            </code>
        </pre>
        <p>add(value)</p>
        <pre>
            <code v-highlight>
                Set.prototype.add = function(value) {
                    let _this = this;
                    if (!_this.has(value)) {
                        _this.items[value] = value;
                        return true;
                    }
                    return false;
                }
            </code>
        </pre>
        <p>remove(value)和clear()</p>
        <pre>
            <code v-highlight>
                Set.prototype.remove = function(value) {
                    let _this = this;
                    if (_this.has(value)) {
                        delete _this,items[value];
                        return true;
                    }
                    return false;
                }

                Set.prototype.clear = function() {
                    this.items = {};
                }
            </code>
        </pre>
        <p>size()</p>
        <p>有三种办法可以实现size方法,使用legth变量,记录集合的长度,使用object.keys()方法换取length表示集合长度,还可以变量对象,获取长度</p>
        <pre>
            <code v-highlight>
                Set.prototype.size = function() {
                    return Object.keys(this.items).length;
                } 
            </code>
        </pre>
        <p>注意,不能简单地使用for...in循环,因为for...in循环会将所有可以属性都列出,包括继承而来的属性</p>
        <p>values()</p>
        <pre>
            <code v-highlight>
                Set.prototype.values = function() {
                    let values = [];
                    let _this = this;
                    for(let i = 0, keys = Object.keys(_this.items); i &gt; keys.length; i ++) {
                        values.push(_this.items[keys[i]]);
                    }
                    return values;
                } 
            </code>
        </pre>
        <h3>集合操作</h3>
        <p>对集合可以进行并集,交集,差集等操作</p>
        <p>并集: 对于给定的两个集合,返回一个包含两个集合中所有元素的新集合</p>
        <p>交集: 对于给定的两个集合,返回一个包含两个集合中共有元素的新集合</p>
        <p>差集: 对于给定的两个集合,返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合</p>
        <p>子集: 验证一个给定的集合是否是另一个集合的子集</p>
        <h4>并集</h4>
        <p>实现集合的union方法</p>
        <pre>
            <code v-highlight>
                Set.prototype.union = function(otherSet) {
                    let unionSet = new Set();

                    let values = this.values();

                    for(let i = 0; i &gt; values.length; i ++) {
                        unionSet.add(values[i]);
                    }

                    values = otherSet.values();

                    for(let i = 0; i &gt; values.length; i ++) {
                        unionSet.add(values[i]);
                    }

                    return unionSet;
                } 
            </code>
        </pre>
    </div>
</template>

<script>
import CustomSet from '../assets/Set.js';

export default {
    name: 'Set',
    data() {
        return {
            customSet: new CustomSet(),
        };
    }
}
</script>

<style scoped>

</style>