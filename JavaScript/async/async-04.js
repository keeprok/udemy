const delayAdd = (index, callback, error) => {
  setTimeout(() => {
    if (index > 10) {
      error(`${index}는 10보다 클 수 없습니다.`);
      return;
    }
    console.log('index:', index);
    callback(index + 1);
  }, 1000);
};

delayAdd(
  4,
  (res) => console.log(res),
  (err) => console.error(err)
);

delayAdd(
  13,
  (res) => console.log(res),
  (err) => console.error(err)
);
// Promise 사용전

const newDelayAdd = (idx) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idx > 10) {
        reject(`${idx}는 10보다 클 수 없습니다.`);
        return;
      }
      console.log('index:', idx);
      resolve(idx + 1);
    }, 1000);
  });
};

newDelayAdd(9)
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  /** finally 메서드나 구문 같은 경우에는
   * 비동기 코드 내부의 resolve, reject이 실행되는 것과 상관없이
   * 항상 실행되는 구조입니다.
   */
  .finally(() => console.log('완료'));
