const str = "엘리스 SW엔지니어 3기 과정 레이서분들 안녕하세요";

console.log(str.substr(0, 3)); // 엘리스

console.log("\n" + "===========" + str + "===========");
console.log(str.substring(0, 3)); // 엘리스
console.log(str.substring(3)); // SW엔지니어 3기 과정 레이서분들 안녕하세요
console.log(str.substring(4, 10)); // SW엔지니어

console.log("\n" + "===========" + str + "===========");
console.log(str.slice(0, 3)); //  엘리스
console.log(str.slice(3)); //  SW엔지니어 3기 과정 레이서분들 안녕하세요
console.log(str.slice(4, 10)); // SW엔지니어

console.log("\n" + "===========" + str + "===========");
console.log(str.replace("안녕하세요", "화이팅~!")); // 엘리스 SW엔지니어 3기 과정 레이서분들 화이팅~!
console.log(str); // 엘리스 SW엔지니어 3기 과정 레이서분들 안녕하세요

console.log("\n" + "===========" + str + "===========");
console.log(str.split(" ")); // [ '엘리스', 'SW엔지니어', '3기', '과정', '레이서분들', '안녕하세요' ]
console.log(str.split("")); // 한글자씩 나눠서 arr로 반환
console.log(str.split("SW")); // [ '엘리스 ', '엔지니어 3기 과정 레이서분들 안녕하세요' ]
console.log(str.split()); // [ '엘리스 SW엔지니어 3기 과정 레이서분들 안녕하세요' ]
console.log(str); // 엘리스 SW엔지니어 3기 과정 레이서분들 안녕하세요
