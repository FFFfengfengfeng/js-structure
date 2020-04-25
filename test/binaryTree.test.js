import BinarySearchTree from '../src/binaryTree/binarySearchTree'

let tree = new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

let inOrder = [] 
let preOrder = []
let postOrder = []

tree.inOrderTraverse((key) => {
  inOrder.push(key)
})

tree.preOrderTraverse((key) => {
  preOrder.push(key)
})
tree.postOrderTraverse((key) => {
  postOrder.push(key)
})

test('中序遍历', () => {
  expect(inOrder.join(',')).toBe('3,5,6,7,8,9,10,11,12,13,14,15,18,20,25')
});
test('先序遍历', () => {
  expect(preOrder.join(',')).toBe('11,7,5,3,6,9,8,10,15,13,12,14,20,18,25')
});
test('后序遍历', () => {
  expect(postOrder.join(',')).toBe('3,6,5,8,10,9,7,12,14,13,18,25,20,15,11')
});
test('树的最大值', () => {
  expect(tree.max().key).toBe(25)
});
test('树的最小值', () => {
  expect(tree.min().key).toBe(3)
});
test('树的搜索', () => {
  expect(tree.search(3)).toBe(true)
});