/*
let : 키워드
age : 식별자
30  : 데이터 
*/
let age = 30;

function setAge() {}

const obj = {
  age: 10,
  ['name']: '영록',
  name: '나나',
};
console.log(age);
console.log(obj['name']);

// 상수

const NATIONAILY = 'Koera';

/*
식별자 표기법
    카멜 케이스(Camel)    : ex) JavaScript => javaScript
    스네이크 케이스(Snake) : ex) JavaScript => java_script
    파스칼 케이스(Pascal)  :  ex) JavaScript => JavaScript
    케밥 케이스(Cabob) :    ex) JavaScript => java-script 
*/
