function hello() {
  return 'Hello World';
}

function pluseOne(num) {
  if (typeof num !== 'number') {
    console.log('숫자를 입력해주세요');
  }
  return num + 1;
}
