//1. 지시사항에 따라 함수 코드를 완성합니다.
function calculateVolume(e) {
  e.preventDefault();

  const height = document.getElementById("height");
  const radius = document.getElementById("radius");
  const volume = document.getElementById("volume");
  let res = Math.PI * Math.pow(radius.value, 2) * height.value;
  volume.innerHTML = res.toFixed(2);
}

// 실행 및 채점을 위한 코드입니다. 수정하지 말아주세요.
const button = document.getElementById("calc");
button.addEventListener("click", calculateVolume);
