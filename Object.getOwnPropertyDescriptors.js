let obj = {
    name: '123',
    age: '24',
    subject: {
		en: 88,
		zh: 98
    }
};

console.log(Object.getOwnPropertyDescriptors(obj));

/*
{ name:
   { value: '123',
     writable: true,
     enumerable: true,
     configurable: true },
  age:
   { value: '24',
     writable: true,
     enumerable: true,
     configurable: true } }
*/

let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

console.log(clone);

obj.name = '345';
obj.subject.en = 100;
obj.subject.zh = 100;

console.log(`obj:`);
console.log(obj);
console.log(`clone:`);
console.log(clone);

let zz = JSON.parse(JSON.stringify(obj));
obj.subject.en = 99;
console.log('obj:');
console.log(obj);
console.log('zz:');
console.log(zz);
