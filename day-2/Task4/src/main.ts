/////////////////
type MyrReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface User {
  id: number;
  username: string;
  address: {
    houseNumber: string;
    pincode: number;
    state: string;
  };
}

const user1: MyrReadonly<User> = {
  id: 1,
  username: "anjal",
  address: {
    houseNumber: "101",
    pincode: 671122,
    state: "Kerala",
  },
};

// user.username = "john";

/////////////////
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

const user2: MyPartial<User> = {
  username: "anjal-vonnue",
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

const user3: DeepPartial<User> = {
  id: 3,
  address: {
    state: "kerala",
  },
};

/////////////////
type BridType = {
  name: string;
  legs: number;
  canFly: boolean;
};
const bird: BridType = {
  name: "eagle",
  legs: 2,
  canFly: true,
};

type BirdKeys = keyof typeof bird;

let birdKey: BirdKeys;

birdKey = "canFly";
