const adult_list = (inputExample) => {
  let str = [];
  inputExample.forEach((inputExample) => {
    if (inputExample.age >= 20) {
      str.push(`<li>${inputExample.name}</li>`);
      str.push(`<li>${inputExample.age}</li>`);
    }
  });
  console.log(str);
  return str;
};

const child_list = (inputExample) => {
  let str = [];
  inputExample.forEach((inputExample) => {
    if (inputExample.age < 20) {
      str.push(`<li>${inputExample.name}</li>`);
      str.push(`<li>${inputExample.age}</li>`);
    }
  });
  console.log(str);
  return str;
};

// 아래의 배열 예시를 활용하여 실행해 보세요.
const inputExample = [
  {
    name: "제이슨",
    age: 12,
  },
  {
    name: "캐롤린",
    age: 5,
  },
  {
    name: "오바마",
    age: 30,
  },
  {
    name: "토르",
    age: 40,
  },
  {
    name: "아이언맨주니어",
    age: 12,
  },
  {
    name: "스파이더맨",
    age: 20,
  },
  {
    name: "알리사",
    age: 15,
  },
  {
    name: "나타샤",
    age: 35,
  },
  {
    name: "잭",
    age: 40,
  },
];

adult_list(inputExample);
child_list(inputExample);
