//link: https://www.typescriptlang.org/docs/handbook/modules/reference.html#ambient-modules

declare module "some-library" {
  export function sentHello(name: string): string;
  export function logToServer(msg: string): void;
  export const version: string;
}
