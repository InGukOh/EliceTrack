//1. 지시사항에 따라 함수 코드를 완성하세요.
/**
 *      <label for="mm">mm</label>
      <input type="text" name="mm" id="mm" required />

      <input type="submit" value="calculate" id="calc" />
      <br />
      <label for="us_size">US Size</label>
      <input type="text" name="us_size" id="us_size" />

      <br />

      <label for="uk_size">UK Size</label>
      <input type="text" name="uk_size" id="uk_size" />

      <br />

      <label for="eu_size">EU Size</label>
      <input type="text" name="eu_size" id="eu_size" />
 */
const size_mm = document.getElementById("mm");
const size_us = document.getElementById("us_size");
const size_uk = document.getElementById("uk_size");
const size_eu = document.getElementById("eu_size");

function calculate(e) {
  e.preventDefault();
  const mm = size_mm.value;
  const inches = mm / 25.4;

  const usSize = 3 * inches - 22;
  const ukSize = 3 * inches - 23;
  const euSize = 1.27 * (ukSize + 23) + 2;

  console.log(usSize.toFixed(2) + " / " + ukSize.toFixed(2) + " / " + euSize.toFixed(2));

  size_us.value = usSize.toFixed(2);
  size_uk.value = ukSize.toFixed(2);
  size_eu.value = euSize.toFixed(2);
}

// 실행 및 채점을 위한 코드입니다. 수정하지 말아주세요.
const button = document.getElementById("calc");
button.addEventListener("click", calculate);
