// import { store } from "../main.js";

// console.log("router.js");
type ComponentType = (params: Record<string, string>) => HTMLElement;

type Route = {
  path: string;
  component: ComponentType;
};

type StoreType = {
  getState(): object;
  dispatch(action: object): void;
  subscribe(listener: () => void): void;
};

export function createRouter(store: StoreType) {
  const routes: Route[] = [];

  function register(path: string, component: ComponentType) {
    // console.log("path: " + path + " component: " + component);

    routes.push({
      path: path,
      component: component,
    });
  }

  function navigate(path: string): void {
    const url = `/Phase1-Week4/day-5/#${path}`;

    console.log("===url: ", url);

    window.history.pushState({}, "", url);
    changeRoute();
  }

  function changeRoute() {
    let flag = 0;
    const currentPath = getCurrentPath();
    // console.log("current path: ", currentPath);

    if (currentPath.startsWith("/detail")) {
      const id = currentPath.slice("/detail/".length);
      routes.forEach((route) => {
        if ("/detail" === route.path) {
          flag = 1;
          console.log("deatil route");
          // change this to state Mangements (below code)
          // route.component(id);
          store.dispatch({
            type: "SET_ROUTE",
            payload: {
              route: "/detail",
              params: {
                id: id,
              },
            },
          });
          // console.log("==== dispatch called with params:  ", id);
        }
      });
      console.log("id: " + id, " type: " + typeof id);
    } else {
      routes.forEach((route) => {
        console.log("check: ", currentPath === route.path);
        if (currentPath === route.path) {
          // change this to state Mangements (below code)
          // route.component();

          flag = 1;

          store.dispatch({
            type: "SET_ROUTE",
            payload: {
              route: currentPath,
            },
          });
        }
      });
    }

    if (flag === 0) {
      console.log("ERRORORR: ", currentPath);
      store.dispatch({
        type: "SET_ROUTE",
        payload: {
          route: "/error",
        },
      });
    }
  }

  function getCurrentPath(): string {
    const pathname = window.location.hash.slice(1);

    if (pathname) {
      console.log("=== pathname: ", pathname);

      return pathname;
    } else {
      return "/home";
    }
  }

  window.addEventListener("popstate", (e) => {
    e.preventDefault();
    console.log("popstate clicked");

    changeRoute();
  });

  return {
    register,
    navigate,
    changeRoute,
  };
}
