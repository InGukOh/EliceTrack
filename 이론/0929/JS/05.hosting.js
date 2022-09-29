print();

function print() {
  console.log("Hello");
}

let hi = "hi";

function say() {
  console.log(hi);
  // let hi = "hello";
}

say();

let fnc1 = function () {
  console.log("fnc1 호출");
};

fnc1();

class Cat {}
const cat = new Cat();

let x = 1;
{
  console.log(x);

  let x = 2;
}
