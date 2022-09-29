const arr = ["월요일", "화요일", "수요일", "목요일", "금요일"];

// map
const map = arr.map((item) => "출근하는 " + item);
console.log(arr);
console.log(map);
/* 
"출근하는 월요일",
"출근하는 화요일",
"출근하는 수요일",
"출근하는 목요일",
"출근하는 금요일"
*/

// filter
const filter = map.filter((item, idx) => idx % 2 !== 0);
console.log(map);
console.log(filter);
/* 
"출근하는 화요일",
"출근하는 목요일",
*/
