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
        <p>has和set方法</p>
        <pre>
            <code v-highlight>
                Dictionary.prototype.has = function(key) {
                    return key in this.items;
                }

                Dictionary.prototype.set = function(key, value) {
                    this.items[key] = value;
                }
            </code>
        </pre>
        <p>delete方法</p>
        <pre>
            <code v-highlight>
                Dictionary.prototype.delete = function(key) {
                    if (this.has(key)) {
                        delete this.items[key];
                        return true;
                    }
                    return false;
                }
            </code>
        </pre>
        <p>get和values方法</p>
        <pre>
            <code v-highlight>
                Dictionary.prototype.get = function(key) {
                    return this.has(key) ? this.items[key] : undefined;
                }

                Dictionary.prototype.values = function() {
                    let values = [];

                    for(let key in this.items) {
                        if (this.has(key)) {
                            values.push(this.items[key]);
                        }
                    }
                    return values;
                }
            </code>
        </pre>
        <p>clear, size, keys, getItems方法</p>
        <pre>
            <code v-highlight>
                Dictionary.prototype.clear = function() {
                    this.items = {};
                }

                Dictionary.prototype.size = function() {
                    return Object.keys(this.items).length;
                }

                Dictionary.prototype.keys = function() {
                    return Object.keys(this.items);
                }

                Dictionary.prototype.getItems = function() {
                    return this.items;
                }
            </code>
        </pre>
        <h3>使用Dictionary类</h3>
        <p>
            <Input v-model="key" placeholder="输入key" style="width: 150px"></Input>
            <Input v-model="value" placeholder="输入value" style="width: 150px"></Input>
            <Button type="primary" @click="hashSet">调用set方法</Button>
        </p>
        <p>
            <Input v-model="query" placeholder="输入query" style="width: 150px"></Input>
            <Input v-model="result" placeholder="结果" style="width: 150px"></Input>
            <Button type="primary" @click="hashHas">调用has方法</Button>
        </p>
        <p>dictionary.size: {{size}}</p>
        <h3>散列表</h3>
        <p>散列表,hashTable类或者hashMap,是Dictionary类的一种散列表实现方式</p>
        <p>散列算法的作用是尽可能快地找到一个值,散列函数算出一个键作为列表中值的索引,通过键可以快速的找到这个值</p>
        <p>最常见的散列函数是lose lose,方法就是简单地将每个键值中的每个字母的ASCII值相加</p>
        <h3>创建散列表</h3>
        <p>使用数组表示数据结构,构建散列表</p>
        <pre>
            <code v-highlight>
                function HashTable() {
                    this.table = [];
                }
            </code>
        </pre>
        <p>散列表包含三个方法</p>
        <p>put(key, value),向散列表增加一个新的项</p>
        <p>remove(key),根据键值从散列表中移除值</p>
        <p>get(key),根据键返回值</p>
        <p>同时,需要一个散列函数去构建键值</p>
        <pre>
            <code v-highlight>
                function loseloseHashCode(key) {
                    var hash = 0;
                    for(var i = 0, len = key.length; i &gt; len; i ++) {
                        hash += key.charCodeAt(i);
                    }
                    return hash % 37;
                }
            </code>
        </pre>
        <p>给定一个key值,根据key中每个字符串的ASCII码值和得到一个数字,并将数字累加,并求模运算,得到一个较小的数值</p>
        <p>实现散列表的方法</p>
        <p>put方法</p>
        <pre>
            <code v-highlight>
                HashTable.prototype.put = function(key, value) {
                    var position = loseloseHashCode(key);
                    this.table[position] = value;
                }
            </code>
        </pre>
        <p>get方法</p>
        <pre>
            <code v-highlight>
                HashTable.prototype.get = function(key) {
                    return this.table[loseloseHashCode(key)]; 
                }
            </code>
        </pre>
        <p>remove方法</p>
        <pre>
            <code v-highlight>
                HashTable.prototype.remove = function(key) {
                    this.table[loseloseHashCode(key)] = undefined;
                }
            </code>
        </pre>
        <h3>使用hashTable类</h3>
        <p>
            <Input v-model="hashTabelKey" placeholder="输入key" style="width: 150px"></Input>
            <Input v-model="hashTabelValue" placeholder="输入value" style="width: 150px"></Input>
            <Button type="primary" @click="hashTabelPut">调用put方法</Button>
        </p>
        <p>
            <Input v-model="hashTabelGetKey" placeholder="输入key" style="width: 150px"></Input>
            <Button type="primary" @click="hashTabelGet">测试get方法</Button>
            <span>{{hashTabelGetKeyValue}}</span>
        </p>
        <h3>处理散列值的冲突</h3>
        <p>一些键会有相同的散列值,因此可能会出现同一个位置,但有两个值需要使用,这就是冲突</p>
        <p>在js中,当反生这种冲突的时候,同一个位置只会记录最后添加的值,造成数据丢失</p>
        <p>解决冲突有几种办法,分离连接,线性探查,双散列法</p>
    </div>
</template>

<script>
import Hash from '../assets/Dictionary.js';
import HashTable from '../assets/hash.js';

export default {
    name: 'Hash',
    data() {
        return {
            key: '',
            value: '',
            query: '',
            result: '',
            hash: new Hash(),
            size: 0,

            hashTable: new HashTable(),  
            hashTabelKey: '',
            hashTabelValue: '',
            hashTabelGetKey: '',
            hashTabelGetKeyValue: '',
        };
    },

    methods: {
        hashSet: function() {
            let key = this.key,
                value = this.value;
            this.hash.set(key, value);
            this.size = this.hash.size();
            console.log(this.hash.keys());
            console.log(this.hash.values());
            console.log(this.hash.getItems());
        },
        hashHas: function() {
            this.result = this.hash.has(this.query).toString();
        },
        hashTabelPut: function() {
            const _this = this;

            this.hashTable.put(_this.hashTabelKey, _this.hashTabelValue);
        },
        hashTabelGet: function() {
            const _this = this;

            _this.hashTabelGetKeyValue = _this.hashTable.get(_this.hashTabelGetKey);
        }
    }
}
</script>

<style scoped>

</style>