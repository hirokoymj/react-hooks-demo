# Create Types

- enum Level {H, M, L}
- type Score = { name: string; score: number };
- type Log = (message: string) => void;

## Creating enums

```ts
//EX1
enum Level {
  High,
  Medium,
  Low
}
//enum values are zero-based auto-incrementing numbers by default.
//String enums
enum Day {
  Monday = 'MON',
  Tuesday = 'TUE',
  Sunday = 'WED',
  ...
}
enum Level {
  High = "H",
  Medium = "M",
  Low = "L"
}
```

## Creating object types

```ts
//Ex1
const tomScore = {
  name: 'Tom',
  score: 70,
};
console.log(tomScore);
//Ex2 - with annotation
const tomScore: { name: string; score: number } = {
  name: 'Tom',
  score: 70,
};
//Ex 3- score is optional
const tomScore: { name: string; score?: number } = {
  name: 'Tom',
};
//Ex 4
const tomScore: { name: string; score: number } = {
  name: 'Tom',
  score: 70,
};
const bobScore: { name: string; score: number } = {
  name: 'Bob',
  score: 80,
};
const janeScore: { name: string; score: number } = {
  name: 'Jane',
  score: 90,
};
//Ex 5
const tomScore: Score = { name: 'Tom', score: 70 };
const bobScore: Score = { name: 'Bob', score: 80 };
const janeScore: Score = { name: 'Jane', score: 90 };
// Ex6
type FirstName = string;
type PersonScore = number;

let firstName: FirstName = 'Tom';
let personScore: PersonScore = 70;

// Q:Create a type alias called Log that represents this function.
const log = (message: string) => {
  console.log(message);
};
//A.
type Log = (message: string) => void;
const log: Log = (message: string) => {
  console.log(message);
};
//A.
type Log = (message: string, category?: string) => void;

//
```

## Creating type aliases

## Creating interfaces

```js
//Create an interface called ButtonProps that has a text property of type string and an onClick method

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const buyButton: ButtonProps = {
	text: "buy"
}
//=====Creating union types
let age: number | null;
console.log(age);

let age: number | null | undefined;

//String
type Fruit = "Banana" | "Apple" | "Pear";
let fruit: Fruit;
fruit = "Apple";
fruit = "pear";
fruit = "strawberry";
//Object
type Actions = { type: "loading" } | { type: "loaded"; data: { name: string } };
const loadingAction: Actions = { type: "loading" };
///=====Creating intersection types
&
//
const fred: Contact = {
  firstName: "Fred",
  lastName: "Smith",
  landline: "0116 4238978",
  mobile: "079543 4355435",
};

```

## Thinking of types as sets of values

## Understanding type compatibility

## Quiz

https://learntypescript.dev/04/l10-quiz

**Question 5**

- Will a type error occur on any of the level assignments below:

```js
enum Status {
  Open,
  InProgress,
  Complete
}
let level: Status;
level = 4;
level = "4"; //ERROR
```

<hr />

**Question 6**

- We have the following type:

- A bestBeforeDate doesn't apply to every product though. So, we want to allow this to be null or a date. What type best represents this?
