// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

/**
 *   <label class="label" >이름
          <input type="text" id="inputName" placeholder="박태환" />
        </label>
        <br />
        <button id="buttonSubmit">클릭</button>
 */
const timeAlert = (e) => {
  e.preventDefault();
  const toVal = inputValues.value;
  setTimeout(() => {
    alert(`입력된 이름 : ${toVal}`);
  }, 2000);
};

const inputValues = document.querySelector("#inputName");
const btn = document.querySelector("#buttonSubmit");
btn.addEventListener("click", timeAlert);

/**
           * // 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
function alertAfter2Seconds(e) {
  // 새로고침 방지 (form의 버튼은 default 행위가 새로고침인데, 이 default 행위를 막아야 함)
  e.preventDefault()
  
  const name = nameElem.value
  setTimeout(() => alert(`입력된 이름: ${name}`), 2000)
}


const nameElem = document.querySelector('#inputName')
const buttonElem = document.querySelector('#buttonSubmit')

buttonElem.addEventListener("click", alertAfter2Seconds)
           * 
           */
