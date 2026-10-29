import { ActionType, StateType } from "./types";

export function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "ADD_CARD": {
      if (!action.payload.task) return state;
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    }

    case "REMOVE_CARD": {
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload.params?.id,
        ),
      };
    }

    case "MOVE_CARD": {
      return {
        ...state,
        tasks: [],
      };
    }

    default: {
      return state;
    }
  }
}
