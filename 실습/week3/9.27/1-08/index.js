var numbers = [175, 50, 25];

document.write("일반함수<br/>");
document.write(numbers.reduce(myFunc));

function myFunc(total, num) {
    return total - num;
}

document.write("<br/><br/>화살표함수<br/>");

document.write(
    numbers.reduce((total, num, idx, arr) => {
        console.log("total: ", total);
        console.log("num: ", num);
        console.log("idx: ", idx);
        console.log("arr: ", arr);
        return total - num;
    })
);
