const actions = document.querySelectorAll(".actions");

const myCharactor = document.querySelector(".myCharactor");
const enemy = document.querySelector(".enemy");

let action_point = 3;

const myStat = {
  Active_Skill_1: ["Skill_1", 5, 0.4], //스킬명 , 데미지계수 , 명중계수
  Active_Skill_2: ["Skill_2", 10, 0.3],
  Active_Skill_3: ["Skill_3", 15, 0.2],
  HP: 150,
};

const enemyStat = {
  Active_Skill_1: ["Skill_1", 10, 0.3],
  Active_Skill_2: ["Skill_2", 15, 0.2],
  Active_Skill_3: ["Skill_3", 20, 0.1],
  HP: 100,
};

for (let action of actions) {
  action.addEventListener("click", action_this);
}

//////////////////////////////////////////////

function action_this() {
  if (this.value > action_point) {
    console.log("행동포인트 부족!!");
  } else {
    action_point = action_point - parseInt(this.value);

    useSkill(enemy, myStat[`Active_Skill_${this.value}`]);

    if (action_point <= 0) {
      btn_controller(true);
      console.log("적의 턴");
      setTimeout(function () {
        enemyPhase();
      }, 2000);
    }
  }
}

//////////////////////////////////////////////

function vibration(target, action_point) {
  target.classList.add("hited");

  btn_controller(true);

  let ToF = action_point === 0 ? true : false;

  setTimeout(function () {
    target.classList.remove("hited");
    btn_controller(ToF);
  }, 300);
}

function btn_controller(ToF) {
  for (let action of actions) {
    action.disabled = ToF;
  }
}

//////////////////////////////////////////////

function useSkill(target, Skill) {
  const critical = Math.floor(Math.random() * 10) + 1;

  console.log(Skill);
  let take_DMG = DMG_calc(Skill);

  console.log(`take_DMG : ${take_DMG}`);

  vibration(target, action_point);
}

///////////////////////////////////////////////

function enemyPhase() {
  const Skill = Math.floor(Math.random() * 3) + 1;
  const DMG = Math.floor(Math.random() * 101) + 1;

  useSkill(myCharactor, enemyStat[`Active_Skill_${Skill}`]);

  setTimeout(function () {
    action_point = 3;
    btn_controller(false);
    console.log("나의 턴");
  }, 2000);
}

///////////////////////////////////////////////

function DMG_calc(Skill) {
  let //
    DMG_orig = Skill[1],
    accuracy = Skill[2],
    DMG_factor = 0,
    DMG_random = Math.random() * (2 - accuracy),
    DMG_res = DMG_orig + Math.round((DMG_random + Number.EPSILON) * 100) / 100;
  console.log(`DMG_random : ${DMG_random}`);
  console.log(`DMg_res : ${DMG_res}`);
  return 10;
}
///////////////////////////////////////////////
