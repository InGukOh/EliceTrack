// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
function solution(jewel) {
    let arr = jewel.split(" ");
    arr = arr.map(() => "금");

    return console.log(arr.join(" "));
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
solution("금 은 동 금 은 동");
