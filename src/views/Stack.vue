<template>
    <div class="container">
        <h2>第三章: 栈</h2>
        <h3>栈数据结构</h3>
        <h4>栈的定义</h4>
        <p>栈是一种后进先出的数据结构</p>
        <p>生活中很多常见的栈的例子,一叠书,底下的最先放下</p>
        <p>最先进入的位置为栈底,最后进入的是栈顶</p>
        <h4>创建栈</h4>
        <p>定义类,同时选取数组作为保存栈的数据结构</p>
        <pre>
            <code v-highlight>
                function Stack() {
                    this.items = [];
                }
            </code>
        </pre>
        <p>为栈定义一些方法:</p>
        <p>push(), 添加一个或几个元素到栈顶</p>
        <p>pop(), 移除栈顶的元素, 同时返回被移除的元素</p>
        <p>peek(), 返回栈顶的元素, 不修改栈</p>
        <p>isEmpty(), 如果栈没有元素则返回true, 否则返回false</p>
        <p>clear(), 移除栈里的所有元素</p>
        <p>size(), 返回栈里的元素个数, 类似数组length属性</p>
        <h4>向栈添加元素</h4>
        <p>push()方法是想栈的栈顶添加元素,可以使用数组的push()方法实现</p>
        <pre>
            <code v-highlight>
                Stack.prototype.push() = function(element) {
                    this.items.push(element);
                }
            </code>
        </pre>
        <h4>从栈移除元素</h4>
        <p>pop()方法是用于从栈的栈顶移除元素,可以使用数组的pop()方法实现</p>
        <pre>
            <code v-highlight>
                Stack.prototype.pop() = function(element) {
                    this.items.pop(element);
                }
            </code>
        </pre>
        <h4>查看栈顶元素</h4>
        <p>peek()方法用于查看栈顶的元素</p>
        <pre>
            <code v-highlight>
                Stack.prototype.peek() = function() {
                    return this.items[items.length - 1];
                }
            </code>
        </pre>
        <h4>检查栈是否为空</h4>
        <p>isEmpty()用于检查数组是否一个元素都没有</p>
        <pre>
            <code v-highlight>
                Stack.prototype.isEmpty() = function() {
                    return this.items.length === 0;
                }
            </code>
        </pre>
        <h4>清空和打印栈元素</h4>
        <p>clear()方法用于清空栈的所有数据</p>
        <pre>
            <code v-highlight>
                Stack.prototype.clear() = function() {
                    this.items = [];
                }
            </code>
        </pre>
        <p>print()方法是用于辅助输出栈的元素</p>
        <pre>
            <code v-highlight>
                Stack.prototype.print() = function() {
                    return this.items.toString();
                }
            </code>
        </pre>
        <p>size()方法是用于返回栈的长度</p>
        <pre>
            <code v-highlight>
                Stack.prototype.size() = function() {
                    return this.items.length;
                }
            </code>
        </pre>
        <h4>使用栈</h4>
        <pre>
            <code v-highlight>
                var stack = new Stack();
                
                stack.push(5);
                stack.push(8);
                stack.print(); /* 5, 8 */
                stack.size();  /* 2 */
                stack.peek();  /* 8 */
                stack.pop();
                stack.print(); /* 5 */
            </code>
        </pre>
        <h3>ES6和栈</h3>
        <p>ES6因为有类,所以在创建stack用es6的class实现的话,语法将会更加简洁</p>
    </div>
</template>

<script>
export default {
    name: 'Stack',
    data() {
        return {

        };
    }
}
</script>

<style scoped>

</style>