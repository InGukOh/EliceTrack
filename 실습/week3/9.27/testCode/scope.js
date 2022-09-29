// // function level scope
// var x = 1;

// if (true) {
//     var x = 10; // 블록 scope가 인정되지 않는다.
//     console.log("if문 안의 x : ", x); // 10
// }
// console.log("if문 안의 x : ", x); // 10

// for (var i = 0; i < 100; i++) {
//     // do nothing
// }
// console.log("for문 밖의 x : ", x); // 100

// function scopeTest() {
//     var y = "function level scope";
//     console.log("function 안의 y : ", y); // error
// }
// scopeTest();
// console.log("function 밖의 y : ", y); // error

console.log("===========================================================");

// // block level scope
// const x = 1;

// if (true) {
//     const x = 10; // 블록 scope가 인정된다.
//     console.log("if문 안의 x : ", x); // 10
// }
// console.log("if문 밖의 x : ", x); // 1

// for (var i = 0; i < 100; i++) {
//     // do nothing
//     const y = 10;
//     if (i === 99) console.log("for문 안의 y : ", y); // 10
// }
// // console.log("for문 밖의 y : ", y); // error

// function scopeTest() {
//     const y = "block level scope";
//     console.log("function 안의 y : ", y); // block level scope
// }
// scopeTest();
// console.log("function 밖의 y : ", y); // error

// console.log("===========================================================");

// let x = 1;

// if (true) {
//     let x = 10; // 블록 scope가 인정된다.
//     console.log("if문 안의 x : ", x); // 10
// }
// console.log("if문 밖의 x : ", x); // 1

// for (let i = 0; i < 100; i++) {
//     // do nothing
//     if (i === 99) console.log("for문 안의 i : ", i); // 99
// }
// // console.log("for문 밖의 i : ", i); // error

// function scopeTest() {
//     let y = "block level scope";
//     console.log("function 안의 y : ", y); // block level scope
// }
// scopeTest();
// console.log("function 밖의 y : ", y); // error
