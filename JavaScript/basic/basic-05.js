/* 데이터 타입 확인 */

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof []); // object
console.log(typeof {}); // object

console.log([].constructor === Array);

//constructor : 모든 객체의 속성 , 어떤 생성자 함수를 통해 생성되었는지 확인가능

console.log(Object.prototype.toString.call(null));

function checkType(a) {
  return Object.prototype.toString.call(a);
}
