class OwnSet {
  constructor() {
    this.items = {};
  }

  // 添加元素
  add(element) {
    if (this.has(element)) {
      return false;
    }

    this.items[element] = element;
    return true;
  }

  // 判断是否有该元素
  has(element) {
    return this.items[element] === element;
  }
  
  // 删除一个元素
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  }

  // 清空集合
  clear() {
    this.items = {};
  }

  // 集合长度
  size() {
    return Object.keys(this.items).length;
  }

  // 集合的值的数组
  values() {
    return Object.values(this.items);
  }

  // 并集运算
  unicon(other) {
    let result = new OwnSet();

    this.values().forEach(v => {
      result.add(v);
    });
    other.values().forEach(v => {
      result.add(v);
    });

    return result;
  }

  // 交集
  intersection(other) {
    let result = new OwnSet();

    if (other.size() > this.size()) {
      other.values().forEach(v => {
        if (this.has(v)) {
          result.add(v);
        }
      })
    } else {
      this.values().forEach(v => {
        if (other.has(v)) {
          result.add(v);
        }
      });
    }

    return result;
  }

  // 差集
  difference(other) {
    let result = new OwnSet();

    this.values().forEach(v => {
      if (!other.has(v)) {
        result.add(v);
      }
    });

    return result;
  }

  isSubsetOf(other) {
    let result = new OwnSet();

    this.values().every(v => {
      if (!other.has(v)) {
        return false;
      }
    });

    return true;
  }
}