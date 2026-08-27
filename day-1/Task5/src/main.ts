//link: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type

function processInput(
  value: string | number | boolean | null | undefined,
): void {
  if (typeof value === "string") {
    console.log(`the type of ${value} is string`);
    return;
  }

  if (typeof value === "number") {
    console.log(`the type of ${value} is number`);
    return;
  }

  if (typeof value === "boolean") {
    console.log(`the type of ${value} is boolean`);
    return;
  }

  if (value == null) {
    console.log(`the type of ${value} is null or maybe undefined`);
    return;
  }
}

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "viewer" | "editor";
  createdAt: Date;
  avatar?: string;
}

function isUser(value: unknown): value is User {
  const user = value as Record<string, unknown>;

  const result =
    typeof value === "object" &&
    value !== null &&
    typeof user.id === "number" &&
    typeof user.name === "string" &&
    typeof user.email === "string" &&
    (user.role === "admin" ||
      user.role === "viewer" ||
      user.role === "editor") &&
    user.createdAt instanceof Date;

  return result;
}

const user1 = {
  id: 1,
  name: "Ronaldo",
  email: "ronaldo@gmail.com",
  role: "admin",
  createdAt: new Date(),
  address: "India",
};

console.log(isUser(user1));

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; w: number; h: number };

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius * shape.radius;
    }

    case "rect": {
      return shape.w * shape.h;
    }

    default: {
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
    }
  }
}

const circle: Shape = {
  kind: "circle",
  radius: 5,
};

console.log(getArea(circle));
