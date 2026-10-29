type ButtonType = "button" | "submit" | "reset";

interface ButtonInterface {
  text: string;
  onClick: Function;
  type: ButtonType;
  className?: string;
  id?: number | string;
}

export function Button({
  text,
  onClick,
  type = "button",
  className = "",
  id = -1,
}: ButtonInterface) {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = className;
  button.type = type;

  button.addEventListener("click", (e) => {
    if (typeof onClick === "function") {
      onClick(id);
    }
  });
  return button;
}
