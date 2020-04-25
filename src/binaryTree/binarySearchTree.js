import { less, equal, bigger } from './utils'
import Node from './node'

class BinarySearchTree {
  constructor() {
    this.less = less
    this.equal = equal
    this.bigger = bigger
    this.root = null
  }

  // 向树中参入节点
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  // 向树中对比添加节点
  insertNode(node, key) {
    if (this.less(node.key, key)) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  // 搜索元素
  search(node = this.root, key) {
    if (node === null) {
      return false
    }
    if (node !== null) {
      if (this.less(node.key, key)) {
        search(node.left, key)
      } else if (this.bigger(node.key, key)){
        search(node.right, key)
      } else {
        return true
      }
    }
  }

  // 中序遍历
  inOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb)
  }

  // 中序遍历节点
  inOrderTraverseNode(node, cb) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, cb)
      cb(node.key)
      this.inOrderTraverseNode(node.right, cb)
    }
  }

  // 先序遍历
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb)
  }

  // 先序遍历节点
  preOrderTraverseNode(node, cb) {
    if (node !== null) {
      cb(node.key)
      this.preOrderTraverseNode(node.left, cb)
      this.preOrderTraverseNode(node.right, cb)
    }
  }

  // 后序遍历
  postOrderTraverse(cb) {
    this.postOrderTraverseNode(this.root, cb)
  }

  // 后序遍历节点
  postOrderTraverseNode(node, cb) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, cb)
      this.postOrderTraverseNode(node.right, cb)
      cb(node.key)
    }
  }

  // 树中的最小值
  min() {
    let current = this.root

    while(current !== null && current.left !== null) {
      current = current.left
    }

    return current
  }

  // 树中的最大值
  max() {
    let current = this.root

    while(current !== null && current.right !== null) {
      current = current.right
    }

    return current
  }

  // 删除某个节点
  remove(node = this.root, key) {
    
  }
}

export default BinarySearchTree