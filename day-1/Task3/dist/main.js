"use strict";
//link: https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
//link: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
const user1 = {
    id: 1,
    name: "Ronaldo",
    email: "ronaldo@gmail.com",
    role: "admin",
    createdAt: new Date(),
};
let user2 = {
    id: 2,
    name: "kroos",
    email: "kroos@gmail.com",
    role: "viewer",
    createdAt: new Date(),
};
const user3 = {
    id: 3,
    name: "kylian",
    email: "kylian@gmail.com",
    role: "editor",
    createdAt: new Date(),
};
const user4 = {
    id: 4,
    name: "ramos",
    email: "ramos@gmail.com",
    role: "admin",
    createdAt: new Date(),
    avatar: "ramos.png",
};
const readUser = {
    id: 6,
    name: "anjal",
    email: "anjal@gmail.com",
    createdAt: new Date(),
    role: "admin",
};
// readUser.name = "anjal k biju"; // Cannot assign to "name because it is a read-only property"
function updateUser(user, changes) {
    return { ...user, ...changes };
}
console.log("before updateUser: ", user2);
user2 = updateUser(user2, { name: "Neymar", email: "neymar@gmail.com" });
console.log("after updateUser: ", user2);
const labDog = {
    name: "zimba",
    legs: 4,
    sound: "brak",
};
const persianCat = {
    name: "garfield",
    legs: 4,
    sound: "meow",
};
