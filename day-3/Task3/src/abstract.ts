//link: https://www.geeksforgeeks.org/typescript/typescript-abstract-class/

abstract class Shape {
  constructor() {}

  abstract area(): number;
  abstract perimeter(): number;

  describle(): void {
    console.log("Area: ", this.area());
    console.log("Perimeter: ", this.perimeter());
  }

  static create(type: "cirlce" | "rect" | "triangle", ...args: number[]) {
    switch (type) {
      case "cirlce": {
        return new Circle(args[0]);
      }

      case "rect": {
        return new Rectangle(args[0], args[1]);
      }

      case "triangle": {
        return new Triangle(args[0], args[1], args[2], args[3], args[4]);
      }

      default: {
        throw new Error("sent a valid parameter");
      }
    }
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(
    private w: number,
    private h: number,
  ) {
    super();
  }

  area(): number {
    return this.w * this.h;
  }

  perimeter(): number {
    return 2 * this.w * this.h;
  }
}

class Triangle extends Shape {
  constructor(
    private base: number,
    private height: number,
    private a: number,
    private b: number,
    private c: number,
  ) {
    super();
  }

  area(): number {
    return (this.base * this.height) / 2;
  }

  perimeter(): number {
    return this.a + this.b + this.c;
  }
}

const circle = new Circle(5);
circle.describle();

const triangle = Shape.create("triangle", 1, 2, 3, 4, 5);
triangle.describle();
