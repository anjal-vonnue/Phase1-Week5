//link: https://www.youtube.com/watch?v=oTOqGdKTsg8

type User = {
  name: string;
  age: number;
};

type UserEvents = {
  userAdded: [User];
  userRemoved: [string];
  userUpdated: [string, Partial<User>];
};

class TypeEventEmitter<Events extends Record<string, unknown[]>> {
  public events: {
    [K in keyof Events]: Array<(...args: Events[K]) => void>;
  };

  constructor() {
    this.events = {} as {
      [K in keyof Events]: Array<(...args: Events[K]) => void>;
    };
  }

  on<K extends keyof Events>(
    event: K,
    listener: (...args: Events[K]) => void,
  ): this {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);

    return this;
  }

  off<K extends keyof Events>(
    event: K,
    listener: (...args: Events[K]) => void,
  ): this {
    if (!this.events[event]) {
      return this;
    }

    this.events[event] = this.events[event].filter((fn) => fn !== listener);
    return this;
  }

  emit<K extends keyof Events>(event: K, ...args: Events[K]): this {
    if (!this.events[event]) {
      return this;
    }

    this.events[event].forEach((fn) => fn(...args));

    return this;
  }

  once<K extends keyof Events>(
    event: K,
    listener: (...args: Events[K]) => void,
  ): this {
    const wrapper = (...args: Events[K]): void => {
      listener(...args);
      this.off(event, wrapper);
    };

    return this.on(event, wrapper);
  }
}

class UserStore extends TypeEventEmitter<UserEvents> {
  private users: User[] = [];

  userAdded(user: User): void {
    if (this.users.some((u) => u.name === user.name)) {
      return;
    } else {
      this.users.push(user);
    }

    this.emit("userAdded", user);
    console.log(this.users);
  }

  userRemoved(name: string) {
    if (this.users.some((u) => u.name.toLowerCase() === name.toLowerCase())) {
      this.users = this.users.filter(
        (u) => u.name.toLowerCase() !== name.toLowerCase(),
      );
      this.emit("userRemoved", name);
    }
    console.log(this.users);
  }

  userUpdated(name: string, changes: Partial<User>) {
    if (this.users.some((u) => u.name.toLowerCase() === name.toLowerCase())) {
      this.users = this.users.map((u) => {
        if (u.name.toLowerCase() === name.toLowerCase()) {
          return {
            ...u,
            ...changes,
          };
        } else {
          return u;
        }
      });

      this.emit("userUpdated", name, changes);
    }

    console.log(this.users);
  }
}

const userStore = new UserStore();

userStore.on("userAdded", (user) => {
  console.log("user added: ", user);
});

userStore.on("userRemoved", (name) => {
  console.log("user removed: ", name);
});

userStore.on("userUpdated", (name, changes) => {
  console.log(`user updated: ${name} this changes: ${changes}`);
});

userStore.userAdded({
  name: "anjal",
  age: 18,
});

userStore.userUpdated("anjal", { age: 22 });
userStore.userRemoved("anjal");
