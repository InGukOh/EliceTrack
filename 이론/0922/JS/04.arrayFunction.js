const list01 = ["메이", "엘리시아", "빌브이", "아포니아"];

for (let i = 0; i < list01.length; i++) {
  console.log(list01[i]);
}

//forEach
//방법1
list01.forEach(function (val, idx, arr) {
  console.log(val + " " + idx + " " + arr);
});
//방법2
list01.forEach((val, idx, arr) => {
  console.log(val + " " + idx + " " + arr[idx]);
});

const mei = {
  name: "메이",
  beauty: "제일 이쁨",
  skills: "제일 강함",
};
const eli = {
  name: "메이",
  beauty: "이쁨",
  skills: "강함",
};

const vilv = {
  name: "메이",
  beauty: "이쁨",
  skills: "약함",
};

const list02 = [mei, eli, vilv];

let res = list02.find((obj) => obj.name === "메이");
console.log(res);

res = list02.filter((obj) => obj.beauty === "제일 이쁨");
console.log(res);

const list03 = [1, 2, 3, 4, 5, 6];

const list03_sub = list03.map((num) => [num, num + 1]);
console.log(list03_sub);
res = list03_sub.flatMap((num) => num);
console.log(res);

let list04 = [0, 5, 4, 1, 100];
//sort
console.log(list04.sort());
//reverse
console.log(list04.reverse());
//오름차순
list04.sort((a, b) => a - b);
console.log(list04);
//내림차순
list04.sort((a, b) => b - a);
console.log(list04);

res = list04.reduce((a, b) => a + b);

console.log(res); //0 + 5 + 4 + 1 + 100
