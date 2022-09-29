// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
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
    let arr = order.split("\n");
    console.log(arr);

    // obj만들기
    let ans = {};
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i].split(" ");
        ans[tmp[0]] = tmp[1];
    }
    console.log(ans);

    // model과 비교해서 출력하기
    const keys = Object.keys(ans);

    console.log(keys);

    let orderList = "";

    orderList = keys.filter((item) => ans[item] !== "0");
    console.log("orderList1", orderList);

    orderList = orderList.map((item) =>
        (model[item] + " ").repeat(parseInt(ans[item])).trim()
    );
    console.log("orderList2", orderList);

    return console.log(orderList.join("\n"));
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
// module.exports = solution;
const test = "ASSEQQ 3\nFFFQWES 4\nQWEFVQW 0\nQWLVXA 3\nWWAAEBK 5";
solution(test);

// console.log(test.split(/[ ,\n]/));
