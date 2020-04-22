import Stack from '../src/stack/stack-object'

test('栈size()', () => {
  let stack = new Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  expect(stack.size()).toBe(3)
})

test('栈pop()', () => {
  let stack = new Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  expect(stack.pop()).toBe(3)
})

test('栈isEmpty()', () => {
  let stack = new Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  expect(stack.isEmpty()).toBe(false)
})

test('栈toString()', () => {
  let stack = new Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  expect(stack.toString()).toBe('1,2,3')
})