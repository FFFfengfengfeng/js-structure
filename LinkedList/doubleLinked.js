function defaultEqual(a, b) {
  return a === b;
}

class DoubleNode {
  constructor(element, next, prev) {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinked {
  constructor(equal = defaultEqual) {
    this.head = undefined;
    this.equal = equal;
    this.count = 0;
    this.tail = undefined;
  }

  // 向双向链表插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      let node = new DoubleNode(element);
      if (index === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        this.tail = node;
        node.prev = current;
      } else {
        let prev = this.getElementAt(index - 1);
        node.next = prev.next;
        prev.next.prev = node;
        node.prev = prev;
        prev.next = node;
      }
      this.count ++;
      return true;
    }

    return false;
  }

  // 从任意位置删除元素
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        let current = this.getElementAt(index);
        let prev = current.prev;
        let next = current.next;
        prev.next = next;
        next.prev = prev;
      }
      this.count --;
      return current.element;
    }

    return undefined;
  }
}