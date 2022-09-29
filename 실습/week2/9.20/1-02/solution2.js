// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
function solution(jewel) {
    const arr = jewel.split(" ");
    console.log(arr);

    let ans = [];
    arr.forEach((item) => {
        if (item === "은" || item == "동") {
            ans.push("금");
        } else ans.push("금");
    });

    return console.log(ans.join(" "));
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
solution("금 은 동 금 은 동");
