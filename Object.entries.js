let obj = {
    a: 1,
    b: 2,
    c: 3
}

let arr = Object.entries(obj);

console.log(arr);

Object.entries(obj).forEach(([key, value]) => {
    console.log(`key: ${key}, value: ${value}`);
});