function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }

  return increase;
}
const increase = makeCounter();
increase();
increase();
increase();

var fn;
function foo() {
  var a = 5;

  function baz() {
    console.log(a);
  }

  fn = baz;
}

function bar() {
  fn();
}

foo();

bar();
