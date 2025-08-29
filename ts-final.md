# TypeScript Summary(final)

- TypeScript will infer the type from the value assignment.
- TypeScript doesn’t exist at runtime - it is a development tool. So, TypeScript won't do any type checking on the code at runtime.

```ts
//=============================================
// Primitive:
let score = 10; //number
let counter; //any
let dateOfBirth = new Date(1990, 4, 7); //Date
// const
const firstName = 'Bob'; //the type is 'Bob'
const age = 31; //the type is 31.
const created = new Date(2019, 11, 6); //Date
//=============================================
// Object:
type Score = { name: string; score: number };
type Cat = Record<CatName, CatInfo>;
type PowerUser = Omit<User, 'type'> & Omit<Admin, 'type'> & { type: 'powerUser' };
//=============================================
// Array:
const items: number[] = [1, 2];
const numbers: Array<number> = [1, 2];
//=============================================
// Generics: Array<T>, Promise<T>, Record<K, V>
let scores: Array<number>;
const userRespons: Promise<Response> = fetch('https://swapi.dev/api/');
type ResultRecord = Record<string, Result>;
T (for "T"ype)
S (for "S"ate)
E (for "E"lement)
K (for "K"ey)
V (for "V"alue)
//=============================================
// Narrowing: !, typeof, instanceof, in, as, contact is Person
typeof => primitive
instanceof - Classs
in. - Object

//=============================================
// Mapping: keyof
interface Form<T> {
  values: T;
  errors: { [K in keyof T]?: string };
}
//=============================================
// Immutable: readonly, Readonly<T>, const
Primitive -> readonly
Object and Array -> readonly, readonly
Readonly<T>
const: deep readonly for object

type Person = {
  name: string;
  readonly age: number; ///Primitive
  readonly scores: readonly number[]; //!!Add "readonly" both field name and value!!!
};
function doubleScore(person: Readonly<PersonScore>) {}
const bill = {} as const
```

## Never

```ts
type Status = 'Pending' | 'Working' | 'Complete' | 'Cancelled';
function neverReached(never: never) {}
function doSomeAction(status: Status) {
  switch (status) {
    case 'Pending':
      break;
    case 'Working':
      break;
    case 'Complete':
      break;
    // case 'Cancelled':
    //   break;
    default:
      neverReached(status); //Error - adding Cancelled then the type error is gone.
  }
}
doSomeAction('Pending');
```

# TS Playground exercise

- [TypeScript Coding Exercises](https://github.com/hirokoymj/react-hooks-demo/blob/main/ts.md)
- [Using types](https://github.com/hirokoymj/react-hooks-demo/blob/main/ts-1-using-types.md#ts-playground-quiz)
- [Standard type](https://github.com/hirokoymj/react-hooks-demo/blob/main/ts-2-standard-type.md#ts-playground)
- [Create a type](https://github.com/hirokoymj/react-hooks-demo/blob/main/ts-3-create-types.md#ts-playground)
- [Generic](https://github.com/hirokoymj/react-hooks-demo/blob/main/ts-5-generic.md#ts-playground-quiz-final-check)
- [Narrowing](https://github.com/hirokoymj/react-hooks-demo/blob/main/ts-6-narrowing.md#ts-playground-quiz)
- [Mapping](https://github.com/hirokoymj/react-hooks-demo/blob/main/ts-6-narrowing.md#ts-playground-quiz)
- [Immutable](https://github.com/hirokoymj/react-hooks-demo/blob/main/ts-9-immutable.md#ts-playground-quiz)

```

```
