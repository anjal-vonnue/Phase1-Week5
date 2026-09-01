import { store } from "../main.js";

type ModalType = "add" | "edit";

export function Modal(type: ModalType) {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-container">
      <h3>${type === "add" ? "ADD NEW TASK" : "EDIT TASK"}</h3>

      <form class="modal-form">
        ${
          type === "edit"
            ? `
              <label for="id">ID: </label>
              <input id="todo-id" type="text" required name="id" />
            `
            : ""
        }

        <label for="title">Title: </label>
        <input id="title" type="text" required name="title" />

        <label for="description">Description: </label>
        <input id="description" type="text" required name="description" />

        <button type="submit" id="submit-button">SUBMIT</button>
      </form>

      <button type="button" class="close-button">CLOSE</button>
    </div>
  `;

  const form = modal.querySelector(".modal-form");
  const closeButton = modal.querySelector(".close-button");
  const submitButton = modal.querySelector("#submit-button");

  async function handleSubmit() {
    const titleEl = modal.querySelector("#title") as HTMLInputElement;
    const titleValue = titleEl.value;
    const descriptionEl = modal.querySelector(
      "#description",
    ) as HTMLTextAreaElement;
    const descriptionValue = descriptionEl.value;

    try {
      if (type === "add") {
        submitButton.textContent = "Loading...";

        const state = store.getState();
        const todos = state.todos;
        const idArray = todos.map((todo) => todo.id);
        const nextId = todos.length > 0 ? Math.max(...idArray) + 1 : 1;

        const todo = {
          id: nextId,
          title: titleValue,
          description: descriptionValue,
          createdAt: Date.now(),
          status: "pending",
        };
        await addTodo(todo);

        submitButton.textContent = "SUBMIT";
        console.log("Form submitted");
      }

      if (type === "edit") {
        const idEl = modal.querySelector("#todo-id") as HTMLInputElement;
        const idValue = idEl.value;
        submitButton.textContent = "Editing...";

        const todo = {
          id: Number(idValue),
          title: titleValue,
          description: descriptionValue,
        };

        await editTodo(todo);
        submitButton.textContent = "SUBMIT";
        console.log("task edit submitted");
      }
    } catch (error) {
      alert(error.message);
      submitButton.textContent = "RETRY";
    }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await handleSubmit();
  });

  closeButton.addEventListener("click", () => {
    modal.remove();
  });

  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      modal.remove();
    }
  });

  return modal;
}

function addTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5;

      if (success) {
        store.dispatch({
          type: "ADD_TODO",
          payload: todo,
        });

        resolve(todo);
      } else {
        reject(new Error("error while adding todo to the server"));
      }
    }, 2000);
  });
}

function editTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5;
      if (success) {
        store.dispatch({
          type: "EDIT_TODO",
          payload: todo,
        });

        resolve(todo);
      } else {
        reject(new Error("error while editing todo"));
      }
    }, 2000);
  });
}
