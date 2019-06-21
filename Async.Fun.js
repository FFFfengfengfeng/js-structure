async function fun1() {
    return 1 + 2;
}

async function fun2() {
    let x = await fun1();
    console.log(x + 2);
}

console.log(fun1()); //Promise { 3 }

fun1().then(x=> {console.log(x)}) // 3

console.log(fun2()); // 5

// await 只能在一个async函数内部使用