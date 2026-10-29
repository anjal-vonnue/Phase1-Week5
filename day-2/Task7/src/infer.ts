//link: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types

type IsArray<T> = T extends any[] ? true : false;

type trueStringArray = IsArray<string[]>;
type falseStringArray = IsArray<string>;

type Flatten<T> = T extends Array<infer Item> ? Item : T;

type FlattenStringArrayType = Flatten<string[]>;
type FlattenNumberType = Flatten<number>;

type AwaitedType<T> = T extends Promise<infer U> ? AwaitedType<U> : T;

type PromiseStringType = AwaitedType<Promise<string>>;
type PromiseNumberType = AwaitedType<Promise<Promise<number>>>;

type ParametersType<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

function addTodo(id: number, title: string, completed: boolean) {
  return {
    id,
    title,
    completed,
  };
}

type addTodoTypes = ParametersType<typeof addTodo>;

const todo: addTodoTypes = [1, "title", true];

type ScratchReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type addTodoReturnType = ScratchReturnType<typeof addTodo>;
