// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

/**
 *  
      <button class="button" id="buttonSubmit">클릭</button>
      <h4 id="password"></h4>
 */

const MakeRDC = (e) => {
  e.preventDefault();

  fetch("https://randomuser.me/api/?password=upper,lower,number")
    .then((res) => res.json())
    .then((datas) => {
      console.log(datas);
      //   console.log(datas.find(data => data.result));
      //   pwd.innerHTML = randomCode.value;
      console.log(typeof datas.results[0].login.password);
      console.log(datas.results[0].login.password);

      pwd.innerHTML = datas.results[0].login.password;
    });
};

const btn = document.querySelector("#buttonSubmit");
const pwd = document.querySelector("#password");

btn.addEventListener("click", MakeRDC);
