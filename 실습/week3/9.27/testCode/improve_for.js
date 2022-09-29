// forEach
console.log("==================forEach======================");
const arr = ["엘리스", "sw", "3기", "레이서 분들", " 화이팅"];

for (let i = 0; i > arr.length; i++) {
    console.log(item);
}

arr.forEach((item) => {
    console.log(item);
});

console.log("==================for ... in======================");
// for ... in

let obj = {
    name: "엘리스",
    age: 3,
    jobs: "레이서",
    track: "sw엔지니어",
};

for (let key in obj) {
    console.log("key :", key, "\nvalue :", obj[key]);
}
console.log("\n");

for (const idx in arr) {
    // console.log(idx);
    console.log(arr[idx]);
}
console.log("=================for ... of=======================");

// for ... of
for (const item of arr) {
    console.log(item);
}
