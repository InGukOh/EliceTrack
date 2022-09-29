//배열의 모든 요소가 square number(정수의 제곱)인지 확인하는 함수를 작성하십시오.
const isSquare = (array) => {
  if (array.length > 0) {
    let res = array.filter((element) => Number.isInteger(Math.sqrt(element)));
    return res.length == array.length ? true : false;
  } else {
    return undefined;
  }
};

console.log(isSquare([]));
