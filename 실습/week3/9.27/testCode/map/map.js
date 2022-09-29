//- 고차 함수 사용하기
const numbers = [1, 2, 3, 4, 5];

// 제곱근 구하기
const squares = numbers.map(Math.sqrt);

console.log(squares);
// [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]

// 곱 구하기
const double = (value) => value * 2;
const doubles = numbers.map(double);

console.log(doubles);
// [2, 4, 6, 8, 10]

//- 새로운 형태의 값 생성하기
const users1 = [
    { name: "YD", age: 22 },
    { name: "Bill", age: 32 },
    { name: "Andy", age: 21 },
    { name: "Roky", age: 35 },
];

const ages = users1.map((user) => user.age);

console.log(ages);
// [22, 32, 21, 35]

// - 특정 요소만 재정의하기
const users2 = [
    { name: "YD", age: 22 },
    { name: "Bill", age: 32 },
    { name: "Andy", age: 21 },
    { name: "Roky", age: 35 },
];

const newUsers = users2.map((user) => {
    if (user.name === "YD") {
        return { ...user, age: 18 };
    }

    return { ...user };
});

console.log(newUsers);
// [{name: "YD", age: 18}, {name: "Bill", age: 32}, {name: "Andy", age: 21}, {name: "Roky", age: 35}]

// - 문자를 배열로 바꾸기
const message = "Hello world";

const newMessage = Array.prototype.map.call(message, (char) => `${char}`);

console.log(newMessage);
// ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
