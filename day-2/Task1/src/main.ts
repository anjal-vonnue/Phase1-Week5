//////
function identity<T>(arg: T): T {
  return arg;
}

const firstName = identity<string>("anjal");
const age = identity<number>(22);
type Profile = {
  name: string;
  age: number;
  isValid: boolean;
};
const user = identity<Profile>({ name: "anjal", age: 22, isValid: true });

//////
function first<T>(arg: T[]): T | undefined {
  return arg[0];
}

const firstNumber = first<number>([1, 2, 3, 4]);
const firstPlayer = first<string>(["rono", "ramos", "jude"]);

//////
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("failed to fetch the data");
  }

  return response.json() as Promise<T>;
}

type postType = {
  id: number;
  title: string;
  description: string;
};

const post = fetchData<postType>("https://www.example.com");

//////
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const nameKey = getProperty(user, "name");
const ageKey = getProperty(user, "age");
const isValidKey = getProperty(user, "isValid");

//////
class Queue<T> {
  items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
