// const fruits = ["사과", "바나나", "체리"] ;
const fruits = new Array('사과', '바나나', '체리');

console.log(fruits);
console.log(fruits.length);
console.log(fruits.incLudes('바나나'));
console.log(fruits.includes('오렌지'));

/** 프로토타입
 * 아래 코드는 getName이라는 함수를 새롭게 만든 것
 * */

Array.prototype.getName = function () {
  console.log(this); // ["사과", "바나나", "체리"]
};
fruits.getName();
const newArr = [];
newArr - getName(); // []

/** 정리하면, 프로토타임이라는 것은 new 키워드를 통해서 환든 생성장 할수에서 반환된 결과
 * 여기서는 frults라는 배열 데이터 혹은 인스턴스라고 일컫는다.
 * 이렇게 인스턴스에서 쓸 수 있는 별도의 속성이나 메서드를 등록하는 객체 *
 * 우리가 원시 타입, 참조 타입들도 마찬가지로 다양하나 데이터들은 생성자 함수를 통해서 반환된 결과이고
 * 우리가 그동안 생성자 함수를 사용하지 않고, 각각의 데이터를 만든 것은 더 쉽게 만들 수 있게 각각의 리터럴 방식으로 만들었을 뿐입니다.
 */

const user = {
  firstName: '9Diin',
  lastName: 'Park',
  getFullName: function () {
    /** 객체 데이터 내부에서  일반 함수를 통해 메서드를 만들게 되면 this라는 키워드를 통해 접근할 수 있었죠? */
    return `${this.firstName} ${this.lastName}`;
  },
  /** 또한, 객체 데이터 내부에 있는 속성에서 function 키워드를 사용하는 일반함수를 활당한다면
   * 속성 뒤에 있는 콜론(:) 기호와 function 키워드를 생략할 수 있다고도 배웠습니다.
   */
};

const user2 = {
  firstName: '9Diin',
  lastName: 'Park',
};

/** user = user 2 거의 비슷 만약 user2의 getFullName이 필요할경우
 * 1. 추가 할시 매우 비효율적 ... getFulWame: function () {...
 * 2. 매서드 불러오는 구조 : call 사용 user.getFullName.call(user2) (비효율적)
 */
