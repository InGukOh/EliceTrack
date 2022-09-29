class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    color = "red";
    speed = 30;

    booster(num) {
        this.speed += num;
    }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.log("==================car1=================");
console.log(myCar1.name);
console.log(myCar1.year);
console.log(myCar1.color);
console.log(myCar1.speed);

myCar1.booster(20);
console.log(myCar1.speed);
console.log("==================car2=================");
console.log(myCar2.name);
console.log(myCar2.year);
console.log(myCar2.color);
console.log(myCar2.speed);

myCar2.booster(100);
console.log(myCar2.speed);
