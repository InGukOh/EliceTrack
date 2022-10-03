// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

/**
 * <form>
        <label class="label" >이름
          <input type="text" id="inputName" placeholder="박태환" />
        </label>
      </form>
 */
let timeset;
const timerAlert = () => {
  if (timeset) clearTimeout(timeset);
  const inpNaVal = inputName.value;
  timeset = setTimeout(() => alert(`${inpNaVal}`), 1000);
};
const inputName = document.querySelector("#inputName");
inputName.addEventListener("input", timerAlert);

/**
       * 
       * // 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
let alertTimer
function alertWhenTypingStops() {
  // 앞선 타이머를 리셋
  if (alertTimer) {
    clearTimeout(alertTimer)
  }
  
  const name = nameElem.value
  // 타이머 시작
  alertTimer = setTimeout(() => alert(`입력된 이름: ${name}`), 1000)
}

const nameElem = document.querySelector('#inputName')

nameElem.addEventListener("input", alertWhenTypingStops) 
       */
