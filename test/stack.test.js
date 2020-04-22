import Stack from '../src/stack/stack-object'

let stack = new Stack()

test('向栈添加元素', () => {
  stack.push('第一个')

  expect(stack.size()).toBe(1)
})