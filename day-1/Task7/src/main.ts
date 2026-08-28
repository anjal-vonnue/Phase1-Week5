//link: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator

const palette = { primary: "#0D9488" } satisfies Record<string, string>;

// satisfies helps to retain the property type and helps to us methods on it. it helps to validate certain varible satisfies certain property
