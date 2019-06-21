let obj = {
    a: 1,
    b: 2,
    c: 3
}

let arr = Object.values(obj);

console.log(arr); // [1, 2, 3]

console.log(Object.values('foo')); //['f, 'o', 'o'] 隐式转换