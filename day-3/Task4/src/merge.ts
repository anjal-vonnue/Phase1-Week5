interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "anjal",
  age: 22,
};

interface Array<T> {
  sum(): T extends number ? number : never;
}

Array.prototype.sum = function () {
  let total = 0;
  this.forEach((num: number) => {
    total = total + num;
  });
  return total;
};

const numbers: Array<number> = [1, 2, 3];
console.log(numbers.sum());

interface Window {
  appState: {
    name: string;
    age: number;
    email: string;
  };
}

window.appState = {
  name: "anjal",
  age: 22,
  email: "anjal.biju@vonnue.com",
};
