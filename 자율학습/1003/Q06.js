// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
/**
 *  <label class="label" >이름
          <input type="text" id="inputName" placeholder="박태환" />
          <h4 id="score">0</h4>
        </label>
 */
let increaseScore;
const timerAlert = () => {
  if (increaseScore) return;

  increaseScore = true;

  setTimeout(() => {
    const newScore = parseInt(score.innerText) + 1;
    score.innerText = newScore;
    increaseScore = false;
  }, 500);
};

const inputName = document.querySelector("#inputName");
const score = document.querySelector("#score");
inputName.addEventListener("input", timerAlert);

/**
         * 
         * // 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
let isInThrottle
function increaseScoreDuringTyping() {
  if (isInThrottle) {
    return
  }
  
  isInThrottle = true
  
  // 타이머 세팅
  setTimeout(() => {
    const score = document.querySelector('#score')
    const newScore = parseInt(score.innerText) + 1
    score.innerText = newScore
    
    isInThrottle = false
  }, 500)
}

const nameElem = document.querySelector('#inputName')

nameElem.addEventListener("input", increaseScoreDuringTyping) 
         */
