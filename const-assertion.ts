// category: TypeScript 3.4
// category: TS for Functional Programmers
// category: const-assertion
// category: const assertion
// category: readonly
// category: type-narrowing
// category: type narrowing
// category: type-widening
// category: type widening

/**
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 *
 * TypeScript 3.4 introduces a new construct for literal values called const assertions.
 * we can signal to the language that
    - no literal types in that expression should be widened (e.g. no going from "hello" to string)
    - object literals get readonly properties
    - array literals become readonly tuples
 */

const literal = [
  {
    name: "one",
    key: "one",
  },
  {
    name: "two",
    key: "two",
  },
] as const;

// Note that if we add an object to the literal above
// that doesn't have fields "name" or "key",
// the types below will display error
export type TName = typeof literal[number]["name"];
export type TKey = typeof literal[number]["key"];

export type TPage = Readonly<{
  name: TName;
  key: TKey;
}>;

export type TPages = Readonly<TPage[]>;
