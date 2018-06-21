/**
 * 定义栈类
 * 
 * @class Stack
 * 
 */
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        let size = this.size();
        return this.items[size - 1];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    print() {
        return this.items.toString();
    }
}

export default Stack;