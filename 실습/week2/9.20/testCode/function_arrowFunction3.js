// func
function fun() {
    this.num = 1234;
}

const funA = new fun();
console.log(funA.num); // 1234

//arrow func
const arrFun = () => {
    this.num = 1234;
};

const funB = new arrFun(); // Error
