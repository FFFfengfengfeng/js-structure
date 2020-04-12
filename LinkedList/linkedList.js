function defaultEqual(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.next = undefined;
    this.element = element;
  }
}

class LinkedList {
  constructor(equal = defaultEqual) {
    this.count = 0;
    this.head = undefined;
    this.equal = equal;
  }

  // 向链表添加元素
  // 如果链表为空则加到链表头, 如果不为空在加到链尾
  add(element) {
    const node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next !== undefined) {
        current = current.next;
      }
      current.next = node;
    }
    this.count ++;
  }

  // 根据特定位置删除元素
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index == 0) {
        this.head = current.next;
      } else {
        let prev = this.getElementAt(index - 1);
        current = this.getElementAt(index);
        prev.next = current.next;
      }
      this.count --;
      return current.element;
    }
    return undefined;
  }

  // 获取某个位置的元素
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== undefined; i ++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }

  // 在任意位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count ) {
      let node = new Node(element), current;
      if (index === 0) {
        current = this.head;
        node.next = current;
        this.head = node;
      } else {
        let prev = this.getElementAt(index - 1);
        current = prev.next;
        node.next = current;
        prev.next = node;
      }
      this.count ++;
      return true;
    }
    return false;
  }

  // 返回某个元素
  infexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== undefined; i ++) {
      if (this.equal(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 删除元素
  remove(element) {
    const index = this.infexOf(element);
    return this.removeAt(index);
  }

  // 是否为空
  isEmpty() {
    return this.count === 0;
  }

  // 返回链表长度
  size() {
    return this.count;
  }

  // 获取链的开端
  getHead() {
    return this.head;
  }
}