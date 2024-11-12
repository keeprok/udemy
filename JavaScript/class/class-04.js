class NewUser {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
  }
  getFullName() {
    return `${this.firstName}${this.lastName}`;
  }
}
const user = new NewUser('Riel', 'Lee');
console.log(user);

user.firstName = 'Wendy';
console.log(user);

console.log('1', user.getFullName());

//------------------------------------------------------- 여기만 조금더 확인해볼것

class NewUser2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    /** 함수이므로 다양한 로직이 추가될 수 있다. */
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    /** fuLtName이라는 속성에다가 값을 지정할 때 동작하는 메서드 */
    console.log(value); // Neo Kim
    this.firstName = '';
    this.lastName = '';
  }
}

const user2 = new NewUser2('9Diin', 'Park');

console.log(user2.fullName); // 9Diin Park

user2.lastName = 'kim';

console.log(user2.firstName);

/** set이라는 키워드를 통해서 만든 fulIName이라는 메서드는
 * 해당하는 ful LName에다가 이렇게 할당 연산자를 통해서 어떤 값을 지정하려고 할 때 동작하는 메서드라는
 */

user2.fullName = 'Neo Kim';

console.log(user2);
