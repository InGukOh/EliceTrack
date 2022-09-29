const boxs = document.querySelectorAll(".favorites-icon");

function checkBox() {
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener("click", () => {
            const checkedBox = document.querySelector(".on");
            if (checkedBox !== null) checkedBox.classList.remove("on");
            boxs[i].classList.add("on");
        });
    }
}

checkBox();
