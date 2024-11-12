const fn = async () => {
  // const res = await newDelayAdd(5);
  // console.log(res);

  try {
    const res = await newDelayAdd(13);
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
    /** finally 메서드나 구문 같은 경우에는
     * 비동기 코드 내부의 resolve, reject이 실행되는 것과 상관없이
     * 항상 실행되는 구조입니다.
     */
    console.log('완료!');
  }
};
fn();
