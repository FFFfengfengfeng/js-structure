<template>
    <div class="container">
        <h2>第四章: 队列</h2>
        <p>队列与栈非常相似,但队列是先进先出的原则,像我们日常生活的排队</p>
        <h3>队列数据结构</h3>
        <p>队列遵循的时候FIFO原则,先进先出,从尾部添加元素,从顶部删除元素</p>
        <h3>创建队列</h3>
        <p>队列的创建也与栈非常类似,只不过是添加元素的方式不一样</p>
        <p>使用es6类的写法来定义队列类</p>
        <pre>
            <code v-highlight>
                class Queue {
                    constructor() {
                        this.items = [];
                    }
                }
            </code>
        </pre>
        <p>add(element)方法, 用于向队列尾部添加元素</p>
        <p>del()方法, 删除队列第一的元素,并返回该元素</p>
        <p>front()方法, 返回队列第一个元素</p>
        <p>isEmpty()方法, 判断队列是否为空</p>
        <p>size()方法, 返回队列的长度</p>
        <h4>向队列添加元素</h4>
        <pre>
            <code v-highlight>
                add(element) {
                    this.items.push(element);
                }
            </code>
        </pre>
        <h4>从队列删除元素</h4>
        <pre>
            <code v-highlight>
                del() {
                    return this.items.shift();
                }
            </code>
        </pre>
        <h4>查看队列第一的元素</h4>
        <pre>
            <code v-highlight>
                front() {
                    return this.items[0];
                }
            </code>
        </pre>
        <h4>检查队列是否为空</h4>
        <pre>
            <code v-highlight>
                isEmpty() {
                    return this.items.length === 0;
                }
            </code>
        </pre>
        <h4>打印队列元素</h4>
        <pre>
            <code v-highlight>
                print() {
                    return this.items.toString();
                }
            </code>
        </pre>
        <h4>使用Queue类</h4>
        <pre>
            <code v-highlight>
                let queue = new Queue();

                queue.add(2);
                queue.add(4);
                queue.print(); /* 2, 4 */
                queue.del();   /* 2 */
                queue.print(); /* 4 */
            </code>
        </pre>
        <h3>优先队列</h3>
        <p></p>
    </div>
</template>

<script>
export default {
    name: 'Queue',
    data() {
        return {

        };
    }
}
</script>

<style scoped>

</style>