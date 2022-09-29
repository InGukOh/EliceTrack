// case1
function myFn() {
    return console.log(this);
}
myFn();
console.log("=".repeat(60));
// case2
const fn2 = {
    title: "Hello World!",
    tags: [1, 2, 3, 4],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(tag);
            console.log(this); // fn2
        }, this); // 여기는 일반 함수 바깥, fn2 객체를 참조할 수 있다.
    },
};
fn2.showTags();
console.log("=".repeat(60));

// case5
const fn3 = {
    title: "Hello World!",
    tags: [1, 2, 3, 4],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(tag);
            console.log(this); // fn3
        });
    },
};
fn3.showTags();
