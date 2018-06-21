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
        <p>日常生活中有很多使用队列的例子,同时有很多是队列的修改版,例如优先队列</p>
        <p>机场登机的时候,老人和小孩优先登机</p>
        <p>实现优先队列,可以设置优先级,添加元素的时候在合适的位置插入元素</p>
        <pre>
            <code v-highlight>
                class Priority extends Queue {
                    add(element, priority) {
                        let flag = false;
                        for(lei i = 0; i &lt; items.length; i ++) {
                            if (priority &lt; items[i].priority) {
                                this.items.splice(i, 0, {
                                    element: element,
                                    priority: priority
                                });
                                flag = true;
                                break;
                            }
                        }
                        if (!flag) {
                            this.items.push({
                                element: element,
                                priority: priority
                            });
                        }
                    }
                }
            </code>
        </pre>
        <p>优先队列是通过集成队列而来的,但是add方法,优先队列与普通队列是不一样的</p>
        <h3>循环队列--击鼓传花</h3>
        <p>队列的另一个修改版就是循环队列,循环遍历元素,当某一个时刻,或者到达某一个条件就停下出来,删除该元素</p>
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