import { COFFEE_PER_BREW, BEANS_PER_BREW } from "./constants";
import { createAction, update, initializeState } from "./store";
import * as API from "./api";

function CoffeeMaker(initialBeans, maxMachine, onUpdate) {
  let state = initializeState(initialBeans, maxMachine);

  const closure = {
    grindBean,
    brewPowder,
    prepareMachine,
    getCoffee,
    getState,
    addBean,
  };

  function handleUpdate(action, data) {
    state = update(state, createAction(action, data));
    onUpdate(closure);
    return closure;
  }

  function grindBean() {
    // grindBean 액션을 호출합니다.
    handleUpdate("grindBean");

    // grindBean API를 기다리고 closure를 반환합니다.
    return API.grindBean().then(() => closure);
  }

  function brewPowder() {
    if (state.currentMachine > BEANS_PER_BREW) {
      return Promise.reject(new Error("커피 가루가 부족합니다."));
    }

    handleUpdate("brewPowder");
    return API.brewPowder().then(() => closure);
    // beanPowder가 BEANS_PER_BREW보다 부족할 경우, "커피 가루가 부족합니다."라는 에러 메시지와 함께 promise를 reject 합니다.
    // brewPowder 액션을 호출합니다.
    // brewPowder API를 기다리고 closure를 반환합니다.
  }

  function prepareMachine() {
    if (state.currentMachine <= 0) {
      // currentMachine이 0이하 일 경우 "남은 머신이 없습니다." 라는 에러 메시지와 함께 promise를 reject 합니다.
      return Promise.reject(new Error("남은 머신이 없습니다."));
    }

    if (state.beans < BEANS_PER_BREW) {
      // beans가 BEANS_PER_BREW미만일 경우 "커피 원두가 부족합니다." 라는 에러 메시지를 반환합니다.
      // 위의 예시를 참고하여 작성해보세요.
      return Promise.reject(new Error("커피 원두가 부족합니다."));
    }

    handleUpdate("prepareMachine");

    return API.prepareMachine().then(() => closure);
    // prepareMachine 액션에 대하여 상태를 업데이트합니다.

    // prepareMachine API를 기다리고 closure를 반환합니다.
  }

  function getCoffee() {
    handleUpdate("getCoffee");
    // getCoffee 액션을 호출합니다.
    return COFFEE_PER_BREW;
    // COFFEE_PER_BREW를 리턴합니다.
  }

  function getState() {
    return state;
  }

  function addBean(amount) {
    handleUpdate("addBeans", amount);
  }

  return closure;
}

export default CoffeeMaker;
