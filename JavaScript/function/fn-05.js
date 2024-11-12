/**콜백
 * 하나의 데이터로써 소괄호를 열고 닫지않으면 하나의 함수 데이터이고
 * 소괄호 안에있어야만 함수를 실행한다
 */

const a = () => {
  console.log('A');
};

const b = () => {
  console.log('B');
};

// a(b) b : 콜백

const c = (call) => {
  console.log('C');
  call();
};

c(b);

const sum = (a, b) => {
  setTimeout(() => {
    return a + b;
  }, 1000);
};

console.log(sum(1, 3));

const sum2 = (a, b, c) => {
  setTimeout(() => {
    return c(a + b);
  }, 5000);
};

sum2(1, 2, (value) => console.log(value));
