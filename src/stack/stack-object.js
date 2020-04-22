/**
 *
 *
 * @class Stack
 */
class Stack {
  constructor() {
    this._count = 0;
    this._items = {};
  }

  // 入栈
  push(el) {
    let { _count, _items } = this
    _items[_count] = el
    this._items = _items
    this._count ++
  }

  // 栈的长度
  size() {
    return this._count
  }

  isEmpty() {
    return this._count === 0
  }

  // 打印输出
  toString() {
    let { _count, _items } = this

    if (this.isEmpty()) {
      return ''
    }

    let arr = []
    
    for (let i = 0; i < _count; i ++) {
      arr.push(`${_items[i]}`)
    }

    return arr.join(',')
  }
}

export default Stack