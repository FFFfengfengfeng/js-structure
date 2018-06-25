<template>
    <div class="container">
        <h2>第五章: 链表</h2>
        <p>链表是一种灵活的数据结构,我们可以动态地从中添加元素,删除元素</p>
        <p>链表向下分也有双向链表和循环链表等</p>
        <h3>链表的数据结构</h3>
        <p>链表跟数组不一样的地方是,链表中的元素含有一个指针,指向他的下一位,这使得我们在删除和添加元素的时候,不需要改变其他元素,只需要改变引用</p>
        <h3>创建链表</h3>
        <p>创建一个LinkedList类作为链表类</p>
        <pre>
            <code v-highlight>
                class LinkedList {
                    createNode(element) {

                    }
                }
            </code>
        </pre>
        <h4>向链表尾部添加元素</h4>
        <p>从链表中添加元素有两种情况,第一种是当链表为空的时候</p>
        <p>直接向链表添加该元素,同时修改链表的长度和链表的head</p>
        <p>当链表已经存在元素的时候,需要遍历链表,将链表最后一个元素的next修改为当前添加的元素,同时修改链表的长度</p>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {

        };
    }
}
</script>

<style scoped>

</style>