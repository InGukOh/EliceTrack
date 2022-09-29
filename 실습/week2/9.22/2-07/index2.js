const boxs = document.querySelectorAll(".favorites-icon");
console.log(boxs);

function clickBox() {
    // boxs.forEach((box) => box.classList.remove("on"));
    this.classList.toggle("on");
}

function checkBox() {
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener("click", clickBox);
    }
}

checkBox();
