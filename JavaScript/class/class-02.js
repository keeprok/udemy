/** 파스칼 케이스를 함수로 만든다 */
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//=>

const user = new User('Riel', 'Lee');
const user2 = new User('Jeff', 'Lee');

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(user.getFullName());
console.log(user2.getFullName());
