/*지시사항을 따라 작성해주세요*/

function scrollUp(e) {
    /*1. 함수를 적용할 target 변수 지정하기*/
    const btn = document.querySelector(`#${e}`);
    // const btn = document.getElementById(e);

    /*2. 버튼 클릭 시 화면의 최상단으로 이동하기*/
    btn.addEventListener("click", () =>
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    );
}
scrollUp("scroll-btn");
window.scrollUp();

// target 지정하는 방법들
// window객체
