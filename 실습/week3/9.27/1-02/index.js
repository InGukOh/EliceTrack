// 아래 코드가 수행될 수 있도록 exchange 폴더에서 모듈을 import 하세요.
import * as asia from "./exchange/asia.js";
import { dollarToWon } from "./exchange/dollar.js";
import euroToWon, { changeName } from "./exchange/euro.js";

// 내 풀이
// import { yuanToWon, yenToWon } from '../exchange/asia.js';
// import { dollarToWon } from '../exchange/dollar.js';
// import euroToWon from '../exchange/euro.js';

console.log(euroToWon(100));
console.log(dollarToWon(200));
console.log(asia.yuanToWon(300));
console.log(asia.yenToWon(400));
console.log(changeName());
