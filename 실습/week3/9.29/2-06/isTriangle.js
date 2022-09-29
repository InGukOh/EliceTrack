// 지시사항에 따라 코드를 작성합니다.

function isTriangle(a, b, c) {
  //  sort 사용
  if (a < 0 || b < 0 || c < 0) return false;
  //const sortArr = [a, b, c].sort(); // 이렇게 하면 유니코드 코드 포인트를 따르기 때문에 제대로 정렬되지 않는다.
  const sortArr = [a, b, c].sort((a, b) => b - a);

  if (sortArr[0] < sortArr[1] + sortArr[2]) return true;
  else return false;

  // 모든 케이스 생각
  // if (a > b) {
  //     if(a > c){
  //         if (a < b + c) return true;
  //         else return false;
  //     }
  // }else if(a>c) {

  // }
}
// 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
const inputA = 7;
const inputB = 7;
const inputC = 15;

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.

isTriangle([inputA, inputB, inputC]);
module.exports = { inputs: [inputA, inputB, inputC], func: isTriangle };
