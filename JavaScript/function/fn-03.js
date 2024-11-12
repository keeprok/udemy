function sum(a, b) {
  return a + b;
}
console.log(sum(7)); //NaN a=7 , b=NaN

function sum(a, b = 1) {
  return a + b;
}
console.log(sum(7)); //8  a=7 , b=1

function getName(user) {
  const { name } = user;
  return name;
}

function getName2({ user }) {
  return user;
}

const fruits = ['Apple', 'Banana', 'cherry'];
const numbers = [1, 2, 3, 4, 5];
function getSecond([a, b, c]) {
  console.log(b);
}

function getRest(...reset) {
  console.log(reset);
}
