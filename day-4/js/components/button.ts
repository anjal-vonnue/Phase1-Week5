type ButtonType = "button" | "submit" | "reset";

export function Button({
  text,
  onClick,
  type = "button",
  className = "",
  id = -1,
}) {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = className;
  button.type = type as ButtonType;

  button.addEventListener("click", (e) => {
    if (typeof onClick === "function") {
      onClick(id);
    }
  });
  return button;
}
