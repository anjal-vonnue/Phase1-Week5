export interface TodoInterface {
  id: number | string;
  title: string;
  description: string;
  createdAt?: number;
  status?: string;
}

export interface StateInterface {
  todos: TodoInterface[];
  route: string;
  params?: {
    id: number | string;
  };
}

export type ActionInterface =
  | {
      type: "SET_ROUTE";
      payload: {
        route: string;
        params?: {
          id: number | string;
        };
      };
    }
  | {
      type: "ADD_TODO";
      payload: TodoInterface;
    }
  | {
      type: "TASK_COMPLETED";
      payload: {
        id: number | string;
      };
    }
  | {
      type: "TASK_UNDO";
      payload: {
        id: number | string;
      };
    }
  | {
      type: "EDIT_TODO";
      payload: {
        id: number | string;
        title: string;
        description: string;
      };
    }
  | {
      type: "TASK_DELETE";
      payload: {
        id: number | string;
      };
    }
  | {
      type: "CLEAR_TASKS";
    };

export interface RouteInterface {
  path: string;
  component: (state: StateInterface, router: RouterInterface) => HTMLElement;
}

export interface RouterInterface {
  register: (
    path: string,
    component: (state: StateInterface, router: RouterInterface) => HTMLElement,
  ) => void;
  navigate: (path: string) => void;
  changeRoute: () => void;
}

export interface StoreInterface {
  getState: () => StateInterface;
  dispatch: (action: ActionInterface) => void;
  subscribe: (listener: () => void) => void;
}

export type ReducerType = (
  state: StateInterface,
  action: ActionInterface,
) => StateInterface;
