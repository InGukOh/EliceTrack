const actions = document.querySelectorAll(".actions");

const myCharactor = document.querySelector(".myCharactor");
const enemy = document.querySelector(".enemy");

let action_point = 3;

const myStat = {
  Active_Skill_1: ["Skill_1", 5, 0.6], //스킬명 , 데미지계수 , 명중계수
  Active_Skill_2: ["Skill_2", 10, 0.4],
  Active_Skill_3: ["Skill_3", 15, 0.2],
  HP: 100,
};

const enemyStat = {
  Active_Skill_1: ["Skill_1", 10, 0.7],
  Active_Skill_2: ["Skill_2", 15, 0.4],
  Active_Skill_3: ["Skill_3", 20, 0.1],
  HP: 100,
};

let HPcheck = function () {
  console.log("HPcheck 실행됨");
  return enemyStat.HP <= 0 ? "승리!" : myStat.HP <= 0 ? "패배" : null;
};

//////////////////////////////////////////////
const gamePlay = function () {
  //action_this
  console.log(`enemyStat.HP : ${enemyStat.HP}`);
  if (this.value > action_point) {
    console.log("행동포인트 부족!!");
  } else {
    action_point = action_point - parseInt(this.value);
    enemyStat.HP -= Math.floor(useSkill(enemy, myStat[`Active_Skill_${this.value}`]));
    console.log(`enemyStat.HP : ${enemyStat.HP}`);

    if (enemyStat.HP <= 0) {
      HPcheck;
    } else if (action_point == 0) {
      btn_controller(true);
      console.log("적의 턴");
      setTimeout(function () {
        enemyPhase();
      }, 2000);
    }
  }

  //////////////////////////////////////////////

  function useSkill(target, Skill) {
    const critical = Math.floor(Math.random() * 10) + 1;

    let take_DMG = DMG_calc(Skill);

    vibration(target, action_point);

    return take_DMG;
  }

  ///////////////////////////////////////////////

  function enemyPhase() {
    console.log(`myStat.HP : ${myStat.HP}`);
    const Skill = Math.floor(Math.random() * (3 - 1)) + 1;
    const DMG = Math.floor(Math.random() * 101) + 1;
    myStat.HP -= Math.floor(useSkill(myCharactor, enemyStat[`Active_Skill_${Skill}`]));

    console.log(`myStat.HP : ${myStat.HP}`);

    if (myStat.HP <= 0) {
      HPcheck;
    }

    console.log("나의 턴");

    setTimeout(function () {
      action_point = 3;
      btn_controller(false);
    }, 2000);
  }

  ///////////////////////////////////////////////

  function DMG_calc(Skill) {
    let //
      DMG_res = 0,
      DMG_orig = Skill[1],
      accuracy = Skill[2],
      DMG_CritChance = accuracy - Math.random();
    DMG_res = DMG_CritChance > 0 ? crit(1) : crit(0);

    function crit(num) {
      return DMG_orig + (DMG_orig * num) / 2 + DMG_orig * Math.abs(DMG_CritChance);
    }
    console.log(`Crit : ${DMG_CritChance > 0}`);
    return DMG_res;
  }

  ///////////////////////////////////////////////
};

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
for (let action of actions) {
  action.addEventListener("click", gamePlay);
}

window.onload = function gamePlaying() {
  for (let action of actions) {
    action.addEventListener("click", gameStart);
  }
  let checker = setInterval(gameStart, 1000);

  function gameStart() {
    console.log("gameStop 실행됨");
    if (HPcheck() != null) {
      alert(`게임 종료 !! : ${HPcheck()}`);
      btn_controller(true);
      clearInterval(checker);
    }
  }
};
