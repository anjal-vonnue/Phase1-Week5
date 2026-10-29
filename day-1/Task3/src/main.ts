//link: https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
//link: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "viewer" | "editor";
  createdAt: Date;
  avatar?: string;
}

const user1: User = {
  id: 1,
  name: "Ronaldo",
  email: "ronaldo@gmail.com",
  role: "admin",
  createdAt: new Date(),
};

let user2: User = {
  id: 2,
  name: "kroos",
  email: "kroos@gmail.com",
  role: "viewer",
  createdAt: new Date(),
};

const user3: User = {
  id: 3,
  name: "kylian",
  email: "kylian@gmail.com",
  role: "editor",
  createdAt: new Date(),
};

const user4: User = {
  id: 4,
  name: "ramos",
  email: "ramos@gmail.com",
  role: "admin",
  createdAt: new Date(),
  avatar: "ramos.png",
};

// const user5: User = {
//   id: 5,
//   name: "jude",
//   email: "jude@gmail.com",
//   role: "editor",
//   createdAt: new Date(),
//   avatar: "jude.png",
//   age: 22, // causing error because age does not exists in User interface
// };

type ReadonlyUser = Readonly<User>;

const readUser: ReadonlyUser = {
  id: 6,
  name: "anjal",
  email: "anjal@gmail.com",
  createdAt: new Date(),
  role: "admin",
};

// readUser.name = "anjal k biju"; // Cannot assign to "name because it is a read-only property"

function updateUser(user: User, changes: Partial<User>) {
  return { ...user, ...changes };
}

console.log("before updateUser: ", user2);
user2 = updateUser(user2, { name: "Neymar", email: "neymar@gmail.com" });
console.log("after updateUser: ", user2);

interface Animal {
  name: string;
  legs: number;
}

interface Dog extends Animal {
  sound: string;
}

type AnimalType = {
  name: string;
  legs: number;
};

type Cat = Animal & {
  sound: string;
};

const labDog: Dog = {
  name: "zimba",
  legs: 4,
  sound: "brak",
};

const persianCat: Cat = {
  name: "garfield",
  legs: 4,
  sound: "meow",
};
