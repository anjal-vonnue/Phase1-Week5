/////////////
interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  createdAt: Date;
  avatar?: string;
}

async function updateUser(id: string, changes: Partial<User>): Promise<User> {
  const response = await fetch(`https://www.example.com/api/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(changes),
  });

  if (!response.ok) {
    throw new Error("error while sending patch req");
  }

  return response.json() as Promise<User>;
}

/////////////
function createRequired(user: Required<User>): User {
  return user;
}

const userRequired = createRequired({
  id: "1",
  name: "anjal",
  age: 22,
  email: "anjal@gmail.com",
  createdAt: new Date(),
  avatar: "anjal.png",
});

type UserPreview = Pick<User, "id" | "name" | "avatar">;

function listUser(): UserPreview {
  return {
    id: "5",
    name: "jude",
    avatar: "jude.png",
  };
}

/////////////
type userInput = Omit<User, "id" | "createdAt">;

function createUser(user: userInput) {
  return {
    ...user,
    id: 1,
    createdAt: new Date(),
  };
}

type ConfigKey = "strict" | "rootDir" | "outDir" | "target";

type ConfigType = Record<ConfigKey, string>;

const compilerOptions: ConfigType = {
  strict: "true",
  rootDir: "src",
  outDir: "dist",
  target: "es2022",
};
