/**this
 * 일반 함수의 this 는 호출 위치에서 정의
 * 화살표 함수의 this는 자신이 선언된 함수 범위에서 정의
 *
 */

const user1 = {
  firstName: 'Lee',
  lastName: 'young',
  age: 26,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user1.getFullName());

const user2 = {
  firstName: 'Lee',
  lastName: 'young',
  age: 26,
  getFullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user2.getFullName());

function user3() {
  this.firstName = 'Lee';
  this.lastName = 'young';

  return {
    firstName: 'Lee',
    lastName: 'young',
    age: 26,
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}
const user = user3();
console.log(user3().getFullName());
