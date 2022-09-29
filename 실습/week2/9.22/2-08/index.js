/*지시사항을 따라 작성해주세요*/
let inputs = document.getElementsByTagName("input");
let loginButton = document.getElementsByTagName("button")[0];

let id = inputs[0];
let pw = inputs[1];

/*1. 버튼 활성화시키기*/
function activateBtn() {
    /* 여기에 작성해주세요 */
    if (id.value !== "" && pw.value !== "") {
        loginButton.classList.remove("deactivatedColor");
        loginButton.classList.add("activatedColor");
    } else {
        loginButton.classList.remove("activatedColor");
        loginButton.classList.add("deactivatedColor");
    }
}

pw.addEventListener("keyup", activateBtn);

/*2. 로그인 성공 여부 나타내기*/
function login() {
    /* 여기에 작성해주세요 */
    if (id.value === "elice" && pw.value === "1234") return window.alert("로그인 성공");
    else return window.alert("로그인 실패");
}

loginButton.addEventListener("click", login);
