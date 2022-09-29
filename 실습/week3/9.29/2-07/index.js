//배열의 모든 요소가 square number(정수의 제곱)인지 확인하는 함수를 작성하십시오.
const isSquare = (array) => {
    console.log("test case : ", array);

    // 예외처리 : 빈배열 undefined
    if (array.length < 1) return undefined;

    // 예외처리 : 정수가 아닌 요소 있을 시 false
    const intArr = array.filter((item) => Number.isInteger(item));
    console.log("intArr: ", intArr);
    if (array.length !== intArr.length) return false;

    // 제곱근이 정수가 아닌 경우 false
    const sqrtInt = array.filter((item) => Number.isInteger(Math.sqrt(item)));
    console.log("sqrtInt: ", sqrtInt);

    const result = array.length === sqrtInt.length ? true : false;

    return result;
};

console.log(isSquare([1, 4, 9, 81, 36, 1024]));

module.exports = { isSquare };
