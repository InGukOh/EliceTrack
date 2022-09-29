const obj = {
    name: "엘리스",
    age: 3,
    text: "응애",
};

console.log(obj.name); // 엘리스
console.log(obj["age"]); // 3

const str = "text";
console.log(obj[str]); // 응애
