class Deque {
  constructor() {
    this.count = 0;
    this.first = 0;
    this.items = {};
  }

  // 从队列开端添加元素
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.first > 0) {
      this.first --;
      this.items[this.first] = element;
    } else {
      let i = this.count;
      while(i > 0) {
        this.items[i] = this.items[i - 1];
        i --;
      }

      this.first = 0;
      this.count ++;
      this.items[0] = element;
    }
  }

  // 从队列开端删除元素
  removeFront() {
    const result = this.items[this.first];
    delete this.items[this.first];
    this.first ++;
    return result;
  }

  // 从队列结尾添加元素
  addBack(element) {
    this.items[this.count] = element;
    this.count ++;
  }

  // 从队列结尾删除元素
  removeBack() {
    this.count --;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // 是否为空
  isEmpty() {
    return this.size() === 0;
  }

  // 队列长度
  size() {
    return this.count - this.first;
  }
}