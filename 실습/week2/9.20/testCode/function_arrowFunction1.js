// 호이스팅 차이
// function
function func() {
    return console.log("hi~");
}

func();

// arrow function

const arrFunc1 = () => console.log("hi~");
arrFunc1();
// arrFunc1();

const arrFunc2 = () => {
    console.log("test");
    return console.log("hi~");
};

arrFunc2();
