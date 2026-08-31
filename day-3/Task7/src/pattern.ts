// interface Observer<T> {
//   fn(value: T): void;
// }

type Observer<T> = (value: T) => void;
type Unsubscribe = () => void;
interface Observable<T> {
  subscribe(observer: Observer<T>): Unsubscribe;
}

class Subject<T> implements Observable<T> {
  constructor(private observers: Observer<T>[] = []) {}
  subscribe(observer: Observer<T>): Unsubscribe {
    this.observers.push(observer);

    console.log(this.observers);

    return () => {
      this.observers = this.observers.filter((fn) => fn !== observer);
    };
  }
}

const sub = new Subject<string>();

function log(str: string) {
  console.log(str);
}

sub.subscribe(log);

//// COMMAND COMMAND COMMAND

//link: https://medium.com/@robinviktorsson/a-guide-to-the-command-design-pattern-in-typescript-and-node-js-with-practical-examples-b7cd81804f79

interface Command {
  execute(): void;
  undo(): void;
}

export class CommandHistory {
  private undoStack: Command[] = [];
  private redoStack: Command[] = [];

  public execute(command: Command): void {
    command.execute();
    this.undoStack.push(command);
    this.redoStack = [];
  }

  public undo(): void {
    const command = this.undoStack.pop();
    if (command) {
      command.undo();
      this.redoStack.push(command);
    }
  }

  public redo(): void {
    const command = this.redoStack.pop();
    if (command) {
      command.execute();
      this.undoStack.push(command);
    }
  }
}

export class TextAdder implements Command {
  public counter: number = 0;
  constructor(
    public ogText: string,
    private changeText: string,
  ) {}
  execute(): void {
    this.ogText = this.ogText + " " + this.changeText;
    // console.log("execute: " + this.ogText + " " + this.counter);
    this.counter++;
  }
  undo(): void {
    let text = this.ogText.split(" ");
    this.ogText = text[0];
    // console.log("undo: " + this.ogText + " " + this.counter);
    this.counter++;
  }
}

const textEditor = new TextAdder("hello", "world");

const texHistory = new CommandHistory();

texHistory.execute(textEditor);

texHistory.undo();
texHistory.redo();
texHistory.undo();
texHistory.redo();
