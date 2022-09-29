// this 차이
// function
function fun() {
    this.name = "하이";
    return {
        name: "바이",
        speak: function () {
            console.log(this.name); // 바이
        },
    };
}

const fun1 = new fun();
fun1.speak(); // 바이

// arrow func
function arrFun() {
    this.name = "하이";
    return {
        name: "바이",
        speak: () => {
            console.log(this.name); // 하이
        },
    };
}

const fun2 = new arrFun();
fun2.speak(); // 하이
