import { describe, expect, test, vi } from "vitest";
import { createStore } from "./store";

describe("testing store", () => {
  let store;
  const initialState = {
    todos: [
      {
        id: 1,
        title: "go buy a laptop",
        description: "buy from ernalkulam",
        createdAt: Date.now() - 5000,
        status: "completed",
      },
    ],
    route: "/home",
  };
  const reducer = vi.fn();
  const listener = vi.fn();
  test("--- testing getState", () => {
    store = createStore(initialState, reducer);

    expect(store.getState()).toBe(initialState);
  });

  test("--- testing dispatch called listner", () => {
    store = createStore(initialState, reducer);
    store.subscribe(listener);
    store.dispatch({
      type: "SET_ROUTE",
      payload: {
        route: "/home",
      },
    });

    expect(listener).toHaveBeenCalled();
  });
});
