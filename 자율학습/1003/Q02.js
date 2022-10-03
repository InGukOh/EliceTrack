// 지시사항에 따라 코드를 작성합니다.
const countDownThree = function () {
  console.log(3);
  setTimeout(() => {
    console.log(2);
  }, 1000);
  setTimeout(() => {
    console.log(1);
  }, 2000);
  setTimeout(() => {
    console.log("끝");
  }, 3000);
};

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [], func: countDownThree };
