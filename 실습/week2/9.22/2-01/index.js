var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/

// blockOne.addEventListener("mouseenter", function () {
//     this.classList.add("red");
// });

blockOne.addEventListener("mouseenter", () => {
    console.log(blockOne.outerHTML);
    // blockOne.className = "red";
    blockOne.classList.add("red");
});

blockTwo.addEventListener("mouseenter", function () {
    // blockTwo.className = "yellow";
    blockTwo.classList.add("yellow");
});

function green() {
    // blockThree.className = "green";
    blockThree.classList.add("green");
}

blockThree.addEventListener("mouseenter", green);

// 차이점

// 여러개 등록 차이
// function test1() {
//     console.log("DOM요소 프로퍼티 사용방법1 ");
// }

// function test2() {
//     console.log("DOM요소 프로퍼티 사용방법2 ");
// }

// blockTwo.onclick = function () {
//     test1();
//     test2();
// };

function eventListener() {
    console.log("이벤트 리스너 이용");
}

blockThree.addEventListener("click", eventListener);

// 이벤트 삭제
function remove() {
    console.log("이벤트 삭제1");
}

// 불가능
blockTwo.addEventListener("dblclick", () => console.log("이벤트 삭제"));
blockTwo.removeEventListener("dblclick", () => console.log("이벤트 삭제"));

// 가능
blockTwo.addEventListener("dblclick", remove);
blockTwo.removeEventListener("dblclick", remove);

// tip
blockThree.addEventListener("dblclick", () => console.log("이벤트 한번만 실행하기"), {
    once: true,
});
