export type TaskType = {
  id: number;
  title: string;
  description: string;
};

export type StateType = {
  tasks: Array<TaskType>;
  route: string;
  params?: {
    id?: number;
  };
};

export type PayloadType = {
  task?: TaskType;
  route?: string;
  params?: {
    id: number;
  };
};
export type ActionType = {
  type: "ADD_CARD" | "REMOVE_CARD" | "MOVE_CARD";
  payload: PayloadType;
};
