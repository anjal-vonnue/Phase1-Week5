import { describe, expect, test, vi } from "vitest";
import { createRouter } from "./router.js";
import { renderHome } from "../pages/home.js";
import { renderList } from "../pages/list.js";
import { renderDetail } from "../pages/detail.js";
import { renderError } from "../pages/error.js";

describe("testing router", () => {
  let router;
  let store;
  test("--- navigation test", () => {
    store = {
      dispatch: vi.fn(),
      getState: vi.fn(),
      subscribe: vi.fn(),
    };
    router = createRouter(store);
    router.register("/home", renderHome);
    router.register("/list", renderList);
    router.navigate("/home");
    expect(window.location.hash.slice(1)).toBe("/home");
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "SET_ROUTE",
      payload: {
        route: "/home",
      },
    });
    router.navigate("/list");
    expect(window.location.hash.slice(1)).toBe("/list");
  });

  test("--- tesing detail route", () => {
    store = {
      dispatch: vi.fn(),
      getState: vi.fn(),
      subscribe: vi.fn(),
    };

    router = createRouter(store);
    router.register("/detail", renderDetail);
    router.navigate("/detail/3");
    expect(window.location.hash.slice(1)).toBe("/detail/3");
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "SET_ROUTE",
      payload: {
        route: "/detail",
        params: {
          id: "3",
        },
      },
    });
  });

  test("--- tesing error route", () => {
    store = {
      dispatch: vi.fn(),
      getState: vi.fn(),
      subscribe: vi.fn(),
    };

    router = createRouter(store);
    router.register("/error", renderHome);
    router.navigate("/awere");
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "SET_ROUTE",
      payload: {
        route: "/error",
      },
    });
  });
});
