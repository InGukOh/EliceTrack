// 지시사항을 참고하여 코드를 작성하세요.

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const answer = document.querySelector("#answer");

form.addEventListener("click", save);

function save(e) {
    e.preventDefault(); // 새로고침 방지
    // answer.innerHTML = input.value;
    answer.innerText = input.value;
    console.log("innerHTML : ", answer.innerHTML);
    console.log("outerHTML : ", answer.outerHTML);
    console.log("textContent : ", answer.textContent);
}

// JS로 태그안에 텍스트를 추가하는 방법은?
