class Queue {
  constructor() {
    this.count = 0;
    this.first = 0;
    this.items = {};
  }

  // 向队列尾部添加一个或多个元素
  add(elements) {
    this.items[this.count] = elements;
    this.count ++;
  }

  // 删除队列第一个元素
  remove() {
    if (this.isEmpty()) {
      return undefined;
    }
    const first = this.items[this.first];
    delete this.items[this.first];
    this.first ++;

    return first;
  }

  // 返回队列第一个元素
  front() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.first];
  }

  // 队列长度
  size() {
    return this.count - this.first;
  }

  // 队列是否为空
  isEmpty() {
    return this.size() === 0;
  }

  // 清空队列
  clear() {
    this.items = {};
    this.first = 0;
    this.count = 0;
  }

  toString() {
    if(this.isEmpty()) {
      return '';
    }

    let arr = [];

    for (let i = this.first; i < this.count; i ++) {
      arr.push(this.items[i]);
    }

    return arr.join(',');
  }
}