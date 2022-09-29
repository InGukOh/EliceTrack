const model = {
    ASSEQQ: "티셔츠",
    BLEWLQS: "스프라이트티",
    BMWQWFF: "나시",
    ELLAKKE: "청바지",
    FFFQWES: "니트",
    NKFKEKQ: "후드티",
    QWEFVQW: "양말",
    QWLVXA: "모자",
    VNDNVSA: "슬랙스",
    WEDAQDC: "운동복",
    WWAAEBK: "원피스",
};

function solution(order) {
    const arr = order.split("\n").map((arr) => arr.split(" "));
    console.log(arr);
    let orderList = arr.filter((arr) => arr[1] !== "0");

    orderList = orderList.map((arr) =>
        (model[arr[0]] + " ").repeat(parseInt(arr[1])).trim()
    );

    return console.log(orderList.join("\n"));
}

const test = "ASSEQQ 3\nFFFQWES 4\nQWEFVQW 0\nQWLVXA 3\nWWAAEBK 5";
solution(test);
