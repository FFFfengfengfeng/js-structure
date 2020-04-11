class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count ++;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count --;
    return result;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  size() {
    return this.count;
  }
}