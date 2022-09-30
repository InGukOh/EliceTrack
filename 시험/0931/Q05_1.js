//제시된 데이터
var data = {
  items: [
    {
      name: "user1",
      group: 1,
    },
    {
      name: "user2",
      group: 1,
    },
    {
      name: "user3",
      group: 2,
    },
  ],
};

//위에 제시된 데이터 배열을 지시사항에 따라 div 목록으로 렌더링합니다.
const btns = document.getElementsByTagName("button");
for (let i = 0; i < btns.length; i++) {
  console.log(i);
  btns[i].addEventListener("click", function activateItem() {
    alert(`Hi, ${data.items[i].name}! You are in group ${data.items[i].group}`);
  });
}

// function activateItem() {
//   alert(`Hi, ${data.items[1].name}! You are in group ${data.items[1].group}`);
// }
