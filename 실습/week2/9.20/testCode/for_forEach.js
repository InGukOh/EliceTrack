const testArr = [
    ["hello", "world"],
    [1, 2, 3],
];

// for
for (let i = 0; i < testArr.length; i++) {
    let arr = testArr[i];
    console.log(arr);
    for (let j = 0; j < arr.length; j++) {
        let tmp = arr[j];
        console.log(tmp);
    }
}

console.log("\n--------------------------------------\n");

// forEach
testArr.forEach((arr) => {
    console.log(arr);
    arr.forEach((tmp) => {
        console.log(tmp);
    });
});
