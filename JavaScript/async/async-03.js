const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  });
};
const b = () => console.log(3);

a().then(b);

/**a() 함수는 Promise 인스턴스를 반환하는 비동기로 만들어진 코드이고
 * resolve 실행까지 기다렸다가 다음 코드를 진행
 *
 * awiat 이라는 키워드는 뒤쪽에 있는 비동기 함수의 실행을 기다린다는 의미를 가지고잇다
 * 단 await 라는 키워드를 사용하려면  async를 사용하는 함수 안에서 작성되어야 한다
 *
 * 또한 async/await 은 Promise 를 반환하는 함수에만 사용해야한다
 *
 */
