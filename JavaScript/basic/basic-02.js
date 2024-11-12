/*원시타입 */

const str1 = 'Hello, World!';
const str2 = 'World!';
const str3 = `Hello, ${str2}`;
console.log(str3);

/*숫자 */

const num1 = 123;
const num2 = -123;
const num3 = -123.123;
const pi = 3.14;

console.log(num3 + undefined);
console.log(typeof (num3 + undefined)); //NAN
console.log(typeof pi);

const a = 0.1;
const b = 0.2;
console.log(a + b); // 0.300000000004
console.log(typeof (a + b).toFixed(1)); // string
console.log(typeof Number(a + b).toFixed(1)); // Number
console.log(Number(a + b).toFixed(1)); //0.3 (Number없어도 0.3)

/*Boolean */

// const truthy = true;
// const falsy = false;

// if (trurhy) {
//   console.log('참', truthy);
// } else {
//   console.log('거짓', falsy);
// }
// /*null, undefined */
// let value1 = null;
// console.log(value1); //null
// console.log(typeof value1);
// setTimeout(() => {
//   value1 = 30;
//   console.log(value1); //30
// }, 1000);
// let value2;
// console.log(value2); //undefined

/**----------------------------- */

const user = {
  name: 'gdiin', //key-value
  age: 32,
};
console.log(Object.keys(user).find((key) => user[key] === 32)); //age
