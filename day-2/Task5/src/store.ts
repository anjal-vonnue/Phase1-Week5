import { reducer } from "./reducer";
import { ActionType, StateType } from "./types";

export function createStore<S, A extends { type: string }>(
  initialState: S,
  reducer: (state: S, action: A) => S,
) {
  let state = initialState;
  const listeners: (() => void)[] = [];

  function getState() {
    return state;
  }

  function dispatch(action: A) {
    state = reducer(state, action);

    localStorage.setItem("task-spa", JSON.stringify(state));

    listeners.forEach((listener) => {
      listener();
    });
  }

  function subscribe(listener: () => void): void {
    listeners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

const state: StateType = {
  tasks: [
    { id: 1, title: "test-1", description: "test-1" },
    { id: 2, title: "test-2", description: "test-2" },
  ],
  route: "/home",
  params: {
    id: 1,
  },
};

const store = createStore<StateType, ActionType>(state, reducer);
