import { Button } from "@components/button.js";
import { store } from "../main.js";
import type { RouterInterface, StateInterface } from "../types/taskTypes.js";

interface CardInterface {
  id: number | string;
  title: string;
  description: string;
  createdAt?: string | number;
  status?: "compeleted" | "pending" | string;
  children: HTMLElement[];
  router?: RouterInterface;
}

function Card({
  id,
  title,
  description,
  createdAt,
  status,
  children = [],
  router,
}: CardInterface) {
  const article = document.createElement("article");
  article.className = "task";

  // card content
  const cardContent = document.createElement("div");
  cardContent.className = "task-content";

  const cardTitle = document.createElement("h4");
  cardTitle.className = "task-title";
  cardTitle.textContent = `${id}: ${title}`;

  const cardDescription = document.createElement("h5");
  cardDescription.className = "task-desc";
  cardDescription.textContent = description;

  const createdAtP = document.createElement("p");
  createdAtP.textContent = `Created at: ${createdAt}`;

  const statusP = document.createElement("p");
  statusP.textContent = `status: ${status}`;

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(createdAtP);
  cardContent.appendChild(statusP);
  if (router) {
    cardContent.addEventListener("click", (e) => {
      router.navigate(`/detail/${id}`);
    });
  }

  //buttons
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  children.forEach((child) => {
    buttonsDiv.appendChild(child);
  });

  article.appendChild(cardContent);
  article.appendChild(buttonsDiv);

  return article;
}

export function renderHome(state: StateInterface, router: RouterInterface) {
  console.log("this is home page");

  const homeSection = document.createElement("section");
  homeSection.className = "section-container";

  const overviewDiv = document.createElement("div");
  overviewDiv.className = "overview";
  //overview
  //total-tasks
  const totalTaskDiv = document.createElement("div");
  totalTaskDiv.className = "total-tasks";
  const tasksCreated = document.createElement("h3");
  tasksCreated.textContent = "Total Tasks: ";
  const taskSum = document.createElement("span");
  taskSum.id = "task-sum";

  taskSum.textContent = String(state.todos.length);
  tasksCreated.appendChild(taskSum);
  totalTaskDiv.appendChild(tasksCreated);

  //tasks-status
  const tasksStatus = document.createElement("div");
  tasksStatus.className = "tasks-status";

  const tasksCompleted = document.createElement("h3");
  tasksCompleted.textContent = "Tasks Completed: ";
  const completedSpan = document.createElement("span");
  completedSpan.id = "task-completed";

  const completedCount = state.todos.filter(
    (todo) => todo.status === "completed",
  ).length;

  completedSpan.textContent = String(completedCount);
  tasksCompleted.appendChild(completedSpan);

  const tasksPending = document.createElement("h3");
  tasksPending.textContent = "Tasks Pending: ";
  const pendingSpan = document.createElement("span");
  pendingSpan.id = "task-pending";

  const pendingCount = state.todos.filter(
    (todo) => todo.status === "pending",
  ).length;

  pendingSpan.textContent = String(pendingCount);
  tasksPending.appendChild(pendingSpan);

  tasksStatus.appendChild(tasksCompleted);
  tasksStatus.appendChild(tasksPending);

  overviewDiv.appendChild(totalTaskDiv);
  overviewDiv.appendChild(tasksStatus);

  //recent-tasks
  const recentTasksDiv = document.createElement("div");
  recentTasksDiv.className = "recent-tasks";
  const recentHeading = document.createElement("h3");
  recentHeading.textContent = "Recent Tasks";
  recentTasksDiv.appendChild(recentHeading);

  const recentTodos = state.todos
    .sort((a, b) => (b.createdAt as number) - (a.createdAt as number))
    .slice(0, 7);

  recentTodos.forEach((todo) => {
    const completeButton = Button({
      id: todo.id,
      text: "COMPLETED",
      onClick: completeTask,
      type: "button",
    });

    const undoButton = Button({
      id: todo.id,
      text: "UNDO",
      onClick: undoTask,
      type: "button",
    });

    const deleteButton = Button({
      id: todo.id,
      text: "DELETE",
      onClick: deleteTask,
      type: "button",
    });

    const card = Card({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      createdAt: todo.createdAt,
      status: todo.status,
      children: [completeButton, undoButton, deleteButton],
      router: router,
    });

    recentTasksDiv.appendChild(card);
  });

  homeSection.appendChild(overviewDiv);
  homeSection.appendChild(recentTasksDiv);
  return homeSection;
}

function completeTask(id: string | number) {
  console.log("task completed: ", id);
  store.dispatch({
    type: "TASK_COMPLETED",
    payload: {
      id: id,
    },
  });
}

function undoTask(id: string | number) {
  console.log("task undone: ", id);

  store.dispatch({
    type: "TASK_UNDO",
    payload: {
      id: id,
    },
  });
}

function deleteTask(id: string | number) {
  console.log("task deleted: ", id);
  store.dispatch({
    type: "TASK_DELETE",
    payload: {
      id: id,
    },
  });
}
