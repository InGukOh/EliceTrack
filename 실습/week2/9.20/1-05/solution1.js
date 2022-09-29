// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.

function solution(gold, info) {
    const arr = info.split("\n").map((arr) => arr.split(" "));
    console.log(arr);

    const ans = arr.map((arr) => {
        if (arr[3] === "하락") {
            gold = (gold * (100 - parseInt(arr[2].slice(0, -1)))) / 100;
        } else {
            gold = (gold * (100 + parseInt(arr[2].slice(0, -1)))) / 100;
        }
        console.log(gold);

        const goldToString = `${arr[0]} 금가격 ${Math.floor(gold).toLocaleString(
            "ko-KR"
        )}원`;
        console.log(goldToString);
        return goldToString;
    });

    return ans.join("\n");
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
// module.exports = solution;
solution(
    8800,
    "20220802 달러변동 10% 하락\n20220803 달러변동 5% 상승\n20220806 금리변동 2% 상승\n20220807 국제정세변동 5% 상승\n20220809 달러변동 2% 상승\n20220812 금리변동 7% 상승\n20220817 금리변동 10000,000000% 상승"
);
