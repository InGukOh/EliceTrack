function random(arr1, arr2) {
  var sum = 0,
    factor = 0,
    random = Math.random();
  for (var i = arr2.length - 1; i >= 0; i--) {
    console.log("sum : " + sum + ` arr2[${i}] : ` + arr2[i]);
    sum += arr2[i]; //
    console.log("sum res : " + sum);
  }
  random *= sum; //
  console.log(random);
  for (var i = arr2.length - 1; i >= 0; i--) {
    factor += arr2[i];
    console.log("factor : " + factor);
    if (random <= factor) return arr1[i];
  }
  return null;
}

// test
var a = ["1", "2", "3", "4"];
var b = [0.1, 0.2, 0.3, 0.4];
console.log(random(a, b));
