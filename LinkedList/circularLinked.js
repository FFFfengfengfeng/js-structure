class CircularLinked {
  constructor(equal = defaultEqual) {
    this.head = undefined;
    this.equal = equal;
    this.count = 0;
    this.tail = undefined;
  }

  // 插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new DoubleNode(element);
      let current = this.head;
      if (index === 0) {
        if (!this.head) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        } 
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
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          let remove = this.head;
          current = this.getElementAt(this.size());
          this.head = this.head.next;
          current.next = this.head;
          current = remove;
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