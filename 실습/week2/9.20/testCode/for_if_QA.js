let arr = ["엘리스sw3기", "레이서분들", "모두모두 화이팅~!", "2반 책오"];

for (let i = 0; i < arr.length; i++) {
    console.log("arr : ", arr);
    console.log("\narr.length : ", arr.length, "\ni : ", i);
    arr.shift();
}
