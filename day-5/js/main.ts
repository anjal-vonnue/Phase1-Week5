import { createRouter } from "./router/router.js";
import { reducer } from "./store/reducer.js";
import { createStore } from "./store/store.js";
import type { RouterInterface } from "./types/taskTypes.js";
import { renderList } from "@pages/list.js";
import { renderHome } from "@pages/home.js";
import { renderDetail } from "@pages/detail.js";
import { renderSettings } from "@pages/settings.js";
import { renderError } from "@pages/error.js";

export const app = document.getElementById("app");

const fristState = {
  todos: [
    {
      id: 1,
      title: "go buy a laptop",
      description: "buy from ernalkulam",
      createdAt: Date.now() - 5000,
      status: "completed",
    },
    {
      id: 2,
      title: "wash clothes",
      description: "use washing machine",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      id: 3,
      title: "do the tasks",
      description: "do the pending tasks",
      createdAt: Date.now() + 2000,
      status: "completed",
    },
  ],
  route: "/home",
  params: {},
};

function loadState() {
  const savedState = localStorage.getItem("task-spa");

  if (!savedState) {
    return fristState;
  }

  try {
    return JSON.parse(savedState);
  } catch (error) {
    console.log("failed to load saved state. there for loaind dummmy state");
    return fristState;
  }
}

const initialState = loadState();
export const store = createStore(initialState, reducer);
store.subscribe(renderFn);

export const router: RouterInterface = createRouter(store);

router.register("/home", renderHome);

router.register("/list", renderList);

router.register("/detail", renderDetail);
router.register("/settings", renderSettings);

router.changeRoute();

console.log("hello");

const navALink = document.querySelectorAll(".nav-a");

navALink.forEach((aTag) => {
  aTag.addEventListener("click", (e) => {
    e.preventDefault();
    const href = aTag.getAttribute("href");
    console.log("a tag clicked: ", href);
    if (href) router.navigate(href);
  });
});

function renderFn() {
  console.log("render function called");

  const state = store.getState();

  let child: HTMLElement;

  switch (state.route) {
    case "/home": {
      child = renderHome(state, router);
      break;
    }

    case "/list": {
      child = renderList(state, router);
      break;
    }

    case "/settings": {
      child = renderSettings(state);
      break;
    }

    case "/detail": {
      child = renderDetail(state);
      break;
    }

    case "/error": {
      child = renderError(router);
      break;
    }

    default: {
      child = renderHome(state, router);
    }
  }
  if (app) app.replaceChildren(child);
}
