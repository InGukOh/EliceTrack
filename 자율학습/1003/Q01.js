//비동기 처리 Asynchronous callback
function printWithDelay(print, timeout) {
  //2.`setTimeout`을 이용해서 비동기 처리 함수를 완성합니다.
  setTimeout(() => {
    console.log(print);
  }, timeout);

  //setTimeout(print, timeout);
}

//3. `printWithDelay()`를 실행해서 3초 늦게 "async callback" 문장을 띄우는 코드를 작성하세요.17번째 줄 코드와 형식은 비슷합니다.

printWithDelay("async callback", 3000);
//printWithDelay(() => console.log("async callback"), 3000);

//1. 동기처리 함수를 그대로 수행하는 `printImmediately()` 함수가 이미 선언되어 있습니다. 이 함수와 이 함수를 실행하는 코드를 살펴보세요.
function printImmediately(print) {
  print();
}

//동기처리
printImmediately(() => console.log("hello"));

module.exports = { printWithDelay };
