/**
 * items: 用于保存栈的数据
 * 
 * push(), 添加一个或多个元素到栈
 * pop(), 移除栈顶
 * peek(), 返回栈顶
 * isEmpty(), 判断栈是否为空
 * clear(), 清除栈的元素
 * size(), 返回栈的长度
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(elements) {
    this.items.push(elements);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}