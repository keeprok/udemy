/*참조형 데이터 타입 */

/* 배열 */

const fruits = new Array('apple', 'banana', 'orange', 'grape', 'cherry', 'melon');
console.log(fruits.map((data, index) => ({ [index]: data })));

/*객체 */

const user = new Object();
user.name = '영록';
user.age = '26';
user.job = 'programmer';

console.log(user); // key-valuer 형태로 조회됨  , key 는 property로 들어감
