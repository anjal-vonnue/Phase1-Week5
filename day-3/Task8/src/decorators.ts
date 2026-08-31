//link: https://www.geeksforgeeks.org/javascript/what-are-decorators-and-how-are-they-used-in-javascript/

function sealed(constructor: Function) {
  Object.seal(constructor.prototype);
  Object.seal(constructor);
}

function log(target: any, PropertyKey: string, descriptor: PropertyDescriptor) {
  const originalFn = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`[DECO] method: ${PropertyKey} called with arguments: ${args}`);
    const result = originalFn.apply(this, args);

    console.log(`[DECO] method: ${PropertyKey} returned ${result}`);

    return result;
  };

  return descriptor;
}

@sealed
class User {
  constructor(
    private name: string,
    private age: number,
  ) {}

  @log
  isValid() {
    if (this.age > 18) {
      return `${this.name} can get a driving lisence`;
    } else {
      return `${this.name} can't drive vehicles`;
    }
  }
}

const user = new User("anjal", 22);
const msg = user.isValid();

console.log("MSG: ", msg);
