import type { ActionInterface, StateInterface } from "../types/taskTypes";

export function reducer(state: StateInterface, action: ActionInterface) {
  switch (action.type) {
    case "SET_ROUTE": {
      if (action.payload.params) {
      }
      return {
        ...state,
        route: action.payload.route,
        params: action.payload.params,
      };
    }

    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }

    case "EDIT_TODO": {
      console.log("edit reducer: ", action.payload);

      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
              description: action.payload.description,
            };
          } else {
            return todo;
          }
        }),
      };
    }

    case "TASK_COMPLETED": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              status: "completed",
            };
          } else {
            return todo;
          }
        }),
      };
    }

    case "TASK_UNDO": {
      const todObj = state.todos.find((todo) => todo.id === action.payload.id);

      let currentStatus = todObj?.status;

      if (currentStatus === "pending") {
        currentStatus = "completed";
      } else {
        currentStatus = "pending";
      }

      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              status: currentStatus,
            };
          } else {
            return todo;
          }
        }),
      };
    }

    case "TASK_DELETE": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }

    case "CLEAR_TASKS": {
      return {
        ...state,
        todos: [],
      };
    }

    default: {
      return state;
    }
  }
}
