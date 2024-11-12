function User(firstName, lastName) {
  this.firstName;
  this.lastName;
}
User.prototype.getFullName = function () {
  return `${this.firstName}${this.lastName}`;
};
const user = new User('Riel', 'Lee');
const user2 = new User('Jeff', 'Lee');

// -----------------------------------------

class NewUser {
  constructor(firstName, lastName) {
    this.firstName;
    this.lastName;
  }
  getFullName() {
    return `${this.firstName}${this.lastName}`;
  }
}
const user3 = new User('Riel', 'Lee');
const user4 = new User('Jeff', 'Lee');
