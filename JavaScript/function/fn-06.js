/** 재귀
 * 재귀 호출은 개념적으로 함수 내부에서 자기 자신을 다시 호출한다는것
 * 무한의로 실행되기 때문에 멈출수있는 조건식을 반드시 작성해야 한다
 */

const userA = {
  name: 'A',
  parent: null,
};
const userB = {
  name: 'B',
  parent: userA,
};
const userC = {
  name: 'C',
  parent: userB,
};
const userD = {
  name: 'D',
  parent: userC,
};

const getRootUser = (user, count = 0) => {
  if (user.parent) {
    return getRootUser(user.parent, count + 1);
  }
  return console.log([user, count]);
};

getRootUser(userD);
