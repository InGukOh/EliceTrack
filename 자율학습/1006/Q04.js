// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
const action = (e) => {
  e.preventDefault();
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const link = data.message;
      dogImage.setAttribute("src", link);
    });
};

const btn = document.querySelector("#buttonSubmit");
const dogImage = document.querySelector("#dogImage");

btn.addEventListener("click", action);
/*
   <button class="button" id="buttonSubmit">클릭</button>
        <img id="dogImage"></img>
  */
