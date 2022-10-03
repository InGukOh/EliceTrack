// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

const Hexcode = (e) => {
  e.preventDefault();
  const userColor = inputed.value;

  fetch("data.json")
    .then((res) => res.json())
    .then((datas) => {
      const colorData = datas.find((data) => data.color === userColor);
      hexaCode.innerHTML = colorData.value;

      hexaCode.style.color = colorData.value;
    });
};

const inputed = document.querySelector("#inputColor");
const btn = document.querySelector("#buttonSubmit");
const hexaCode = document.querySelector("#hexaCode");

btn.addEventListener("click", Hexcode);
