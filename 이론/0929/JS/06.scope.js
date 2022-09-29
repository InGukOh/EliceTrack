let x = "global x";
let y = "global y";

function outer() {
  let z = "local z";
  console.log("outer 영역이야 ");
  console.log(z);
  function inner() {
    let x = "local x";
    console.log("inner 영역이야");
    console.log(x);
  }
  inner();
}

outer();
