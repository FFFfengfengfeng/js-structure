let arr = [1, 2, 3, 4, 5];

// 普通使用
console.log(arr.includes(4));
// 普通使用
console.log(arr.includes(6));
// 从下标为4开始搜索
console.log(arr.includes(1, 4));
// 下标大于数组长度
console.log(arr.includes(1, 100));
// 下标为负数
console.log(arr.includes(5, -1));