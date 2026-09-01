import type {
  ActionInterface,
  ReducerType,
  StateInterface,
} from "../types/taskTypes";

export function createStore(
  initialState: StateInterface,
  reducer: ReducerType,
) {
  let state = initialState;
  const listeners: (() => void)[] = [];

  function getState(): StateInterface {
    return state;
  }

  function dispatch(action: ActionInterface) {
    state = reducer(state, action);

    localStorage.setItem("task-spa", JSON.stringify(state));

    // console.log("===========");
    // console.log("state in the store");
    // console.log(state);
    // console.log("===========");

    listeners.forEach((listener) => {
      listener();
    });
  }

  function subscribe(listener: () => void) {
    listeners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
