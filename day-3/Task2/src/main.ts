interface Serializable {
  toJSON(): string;
  fromJSON(data: string): this;
}

interface Printable {
  print(): void;
  getDisplayName(): string;
}

interface ValidationResult {
  isValid: boolean;
}

interface Validatable {
  validate(): ValidationResult;
}

class DocumentClass implements Serializable, Printable, Validatable {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  toJSON(): string {
    return JSON.stringify({
      name: this.name,
      age: this.age,
    });
  }

  fromJSON(data: string): this {
    const parsedData = JSON.parse(data);
    this.name = parsedData.name;
    this.age = parsedData.age;

    return this;
  }

  print(): void {
    console.log("name: ", this.name);
    console.log("age: ", this.age);
  }

  getDisplayName(): string {
    if (this.name) {
      return this.name;
    }
    return "no name available";
  }

  validate(): ValidationResult {
    if (this.age && this.age > 18) {
      return { isValid: true };
    }
    return { isValid: false };
  }
}

const simpeObject = {
  toJSON(): string {
    return JSON.stringify({
      name: "anjal",
      age: 22,
    });
  },
  fromJSON(data: string) {
    return this;
  },
};

const structuralTyping: Serializable = simpeObject;
