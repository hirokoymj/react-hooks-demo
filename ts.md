# Exercise

```js
=====1.
type User = {}
export const users: User[] = []
=====2.
export type Person = User | Admin;
=====3.
if ("role" in person) {}
=====4.
export function isUser(person: Person): person is User {}
=====5.
export function filterUsers(persons: Person[], criteria: Partial<Omit<User, 'type'>>): User[] {}
const criteriaKeys = Object.keys(criteria) as (keyof Omit<User, 'type'>)[];
=====6.
export function filterPersons(
  persons: Person[],
  personType: User['type'],
  criteria: Partial<Omit<User, 'type'>>,
): User[];
=====7.
export function swap<T1, T2>(v1: T1, v2: T2): [T2, T1] {
  return [v2, v1];
}
=====8.
type PowerUser = Omit<User, 'type'> & Omit<Admin, 'type'> & {type: 'powerUser'};
=====9.
export type ApiResponse<T> = { status: 'success'; data: T } | { status: 'error'; error: string };
export function requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {}
export function requestUsers(callback: (response: ApiResponse<User[]>) => void) {}
===youtube 1.
const createUser = (User: { name: string; age: number }) => {};
const createUser = (User: Omit<User, 'id'>) => {};
const createUser = (User: Pick<User, 'name' | 'age'>) => {};
===youtube 2.
type Param = Object;
type Param = {};
type Param = Record<string, unknown>;
```

- https://typescript-exercises.github.io/#exercise=4&file=%2Findex.ts

### Exercise 1

- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

```js
export type User = unknown;
export const users: unknown[] = []
export const users: User[] = []
```

### Exercise 2

- [Union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

```js
export type Person = User | Admin;
```

### Exercise 3

- [in](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing)

```js
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;
export function logPerson(person: Person) {
    if ("role" in person) {}
}
```

### Exercise 4

- [predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

```js
export function isUser(person: Person): person is User {
  return person.type === 'user';
}
```

### Exercise 5

- https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types

```js
export function filterUsers(persons: Person[], criteria: Partial<Omit<User, 'type'>>): User[] {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria) as (keyof Omit<User, 'type'>)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);
```

### Exercise 6

- [Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

```js
interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

export type Person = User | Admin;
export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

export function filterPersons(
  persons: Person[],
  personType: User['type'],
  criteria: Partial<Omit<User, 'type'>>,
): User[];
export function filterPersons(
  persons: Person[],
  personType: Admin['type'],
  criteria: Partial<Omit<Admin, 'type'>>,
): Admin[];
```

### Exercise 7

- [Tuple Type](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
- [Generic Type](https://www.typescriptlang.org/docs/handbook/2/generics.html)

```js
export function swap<T1, T2>(v1: T1, v2: T2): [T2, T1] {
  //export function swap(v1, v2) {
  return [v2, v1];
}
```

### Exercise 8

- https://www.typescriptlang.org/docs/handbook/utility-types.html
- [Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)

```js
export type Person = User | Admin | PowerUser;
type PowerUser = Omit<User, 'type'> & Omit<Admin, 'type'> & {
    type: 'powerUser'
};
```

### Exercise 9

```js
//export type ApiResponse<T> = unknown;
export type ApiResponse<T> = { status: 'success'; data: T } | { status: 'error'; error: string };

export function requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
  //export function requestAdmins(callback: (response: AdminsApiResponse) => void) {

export function requestUsers(callback: (response: ApiResponse<User[]>) => void) {
  //export function requestUsers(callback: (response: UsersApiResponse) => void) {

export function requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
//export function requestCurrentServerTime(callback: (response: unknown) => void) {

export function requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
//export function requestCoffeeMachineQueueLength(callback: (response: unknown) => void) {
```

# Quiz

https://www.typescriptlang.org/play/?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmC7hoOkcAEYefyAEKTbh8gDc0sasvliqVRrIxp1dvtlJo3DqkAA8slzRQyLDeZxIBJQAARP1K40ATgTAAZ+AAWfgAdg9XsdkAV8GVvoUgeDocwAWYkFQsYUSp1OZKwWSXFg9UaozgUT9jxRkYY0CVVMcNb9+Rjfp149rKAA3ooSjKaASojRw5GJ3Xh6GZ43QCvoKgAoJqzOlQej1XR3WdaAANSgADMyb3TlQ+K8F7tAF9m63214HCoAQ7CoAAsvogJVkqyCCFBkDjlSlCcMwt7ziUCKgEqqDtESsHwTy3K8nySHDHyaELiUaKUnK+bOvhDBVnu37gtAJ6gOhVEGiInBGtAFCuLyDFVnaVHUXmATfGwZBKhkfECcxii-n+5gAWI3DcCq45cPEAwSJw-DSNpCR6ZwFEYak2G4ak4hEcRnDsIg0jfHyoAAGRuWg1njIR9mOc5ZDkRxlElG+H7GA+0iiaAv6hdW4XJj+wTBAwxzmDi-4NF4V61gwSoEHUmCIagyGoeOtBsIgQiQAAPDppkAHzBYuDrLvoBAOigvIMLk8g4tWGj5YVr7xWQXg9QwfUEh1lL5gAVrKnD1klOFEHQ3yLWanECcVpXRZwDIIVcJXDD+dqpScsAZapWVaNWtAbY0sncLtwxTnQlXVTVD0-B2AA+-RRNATWcUu8yPV43W9TQOV1HlfLAEQ8BMsAxrkdFmGyYIP2LflEMNs1VFhWN4O-Zw0Wxfuo1eA50DQElKltrdQg409GyLeOZh4O97MdqIrNeJxxNeHyAmuRkpObR5-IHcg4teLz5NKUAA

### Understanding TypeScript

https://learntypescript.dev/01/l3-quiz

5.  TypeScript type checks our code, but when can this type checking process take place?

- During the projects build process
- Code editors can use TypeScript to type check our code whilst it is being written. TypeScripts type checker can be invoked during the build process. TypeScript doesn’t exist at runtime.

### Using Types

- https://learntypescript.dev/03/l8-quiz
- 2. Is there a Date type in TypeScript?
     We can use the Date type for date variables in TypeScript.

- 3. Is the type annotation necessary to type the amount variable to number in the declaration below? Yes
- TypeScript can infer the type from the value assignment in the declaration.

### Standard TypeScript Types

- https://learntypescript.dev/05/l5-quiz
- 2. What is the return type in the function below? -> Void

```js
function logMessage(message: string) {
  return console.log(message);
}
```

7.What is the type of the invalid variable in the function below? -> never

```js
function outputMessage(message: string) {
  if (typeof message === "string") {
    console.log(message);
  } else {
    let invalid = message;
    console.error(invalid);
  }
}
```

- The never type is used to represent a type of value that will never occur.

- https://learntypescript.dev/03/l7-unknown

```js
async function getData(path: string): Promise<unknown> {
  const response = await fetch(path);
  return await response.json();
}
type Person = {
  id: string;
  name: string;
};
async function getPerson(id: string): Promise<Person | null> {
  const person = await getData("/people/1");
  if (person) {
    return person; //Type ERROR - WHY? => empty object -> a type predicate
  }
  return null;
}
```

### Creating Types

https://learntypescript.dev/04/l10-quiz

- 5.Will a type error occur on any of the level assignments below:

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

- 6. We have the following type:
- A bestBeforeDate doesn't apply to every product though. So, we want to allow this to be null or a date. What type best represents this?

## Using Classes

- https://learntypescript.dev/05/l5-quiz
- Q1. What are the types of the a and b fields in the following class?

```js
class Calculator {
  a = 0;
  b = 0;
}
```

- a and b are inferred to be number from their initialized value.

<hr />

- Q3. What is the problem with the following code?

```js
class Calculator {
  constructor (private a = 0, private b = 0) {}
  add() {
    return this.a + this.b;
  }
}
const calc = new Calculator();
calc.a = 1;
calc.b = 2;
calc.add();
```

- A: The syntax is valid and default parameters are allowed on constructor parameters. The problem is that a and b are declared with a private access modifier, so they aren't accessible by consumers.

<hr />

- Q4. What will be output to the console after the following code is executed? Will any type errors occur?

```js
abstract class Animal {
  constructor (public name: string) {}
  protected log(message: string) {
    console.log(message);
  }
}
class Dog extends Animal {
  bark() {
    this.log(this.name + " Bark");
  }
}
const dog = new Dog("Fudge");
dog.bark();
```

- A: The Dog class inherits the name field and log method from the Animal class so that no type errors will occur.

<hr />

### Generic Types

- https://learntypescript.dev/06/l10-quiz
- Q6. We have a function below which outputs the name property of an object to the console. How can we use generics to make this more strongly-typed?

```js
//Q
function logName(object: any) {
  console.log("My name is " + object.name);
}

//A
function logName<T extends {name: string}>(object: T) {
  console.log("My name is " + object.name);
}
```

- A generic parameter with a constraint containing a name property can be used to make the function more strongly-typed.

### Type Narrowing

- https://learntypescript.dev/07/l9-quiz
- Q2.What is the type of level in the console.log statement below:

```js
type Level = "low" | "medium" | "high";
function logLevel(level: Level) {
  if (level === "high") {
    console.warn(level);
  }
}
```

- The type is narrowed to 'high'.

<hr />

Q4. What type guards can we use to check animal is of type Dog?

```js

class Dog {
  woff() {
    console.log("woff")
  }
}
class Cat {
  meow() {
    console.log("meow")
  }
}
function speak(animal: Dog | Cat) {
  if (/* TODO: check if type is Dog */) {
    animal.woff();
  } else {
    animal.meow();
  }
}
```

- animal instanceof Dog
- 'woff' in animal
- The instanceof type guard is a good choice because the code is checking a class instance. The in type guard also works in this case because the woff member can distinguish between the Dog and Cat types.

### Mapped Types

https://learntypescript.dev/08/l5-quiz

Q1.How can we remove the type annotations from the savingAction and savedAction variables but maintain strong typing.

```js
type SavingAction = {
  type: "saving";
  payload: string[];
}
const savingAction: SavingAction = {
  type: "saving",
  payload: ["Apple", "Banana", "Strawberry"]
}
type SavedAction = {
  type: "saved";
}
const savedAction: SavedAction = {
  type: "saved"
}
type Actions = SavingAction | SavedAction;
```

A:

```js

const savingAction = {
  type: "saving",
  payload: ["Apple", "Banana", "Strawberry"]
}
const savedAction = {
  type: "saved"
}
type Actions = typeof savingAction | typeof savedAction;
```

- Using any means that we would not get any type checking. The correct syntax for extracting the type from an object is typeof objectName.

<hr />

- Q3.Structurally, which type is equivalent to the type below?

```js
type Votes = {
    [K in "apple" | "banana" | "strawberry"]: number
}
```

- A3:

```js
{
  apple: number;
  banana: number;
  strawberry: number;
}
```

- Q4.What would be a generic mapped type that removes all the readonly modifiers from an object type like above?

```js
type Person = {
	readonly name: string;
	readonly age: number;
}

//A:
type Writable<T> = {
    -readonly [P in keyof T]: T[P];
}
```

<hr />

### Conditional Types

- https://learntypescript.dev/09/l4-quiz
- Q3.We have a requirement to create a utility type similar to ReturnType with the improvement of handling asynchronous functions. How could we define this type?

### Immutable Types

- https://learntypescript.dev/10/l6-quiz
- Q1.Consider the following code:

```js
type Readings = {
  readonly date: Date;
  readonly values: number[];
}
const readings: Readings = {
  date: new Date(),
  values: [4, 3, 5]
}
readings.values.push(1);
```

- A1: No.The items in the array are mutable. A readonly modifier needs to be placed before the type for the array items to be immutable

<hr />

- Q2. Do any type errors occur on the surname and rating assignments on the last 2 lines?

```js
type Person = {
  firstName: string;
  surname: string;
  profile: {
    rating: string;
  }
}
const bob: Readonly<Person> = {
  firstName: "Bob",
  surname: "Keel",
  profile: {
    rating: "medium"
  }
  bob.surname = "Steel";
  bob.profile.rating = "high";
};
```

- A: The Readonly type creates a shallow immutable type, so a type error will only occur on the surname assignment.

<hr />

Q3.What will be output to the console when the transpiled JavaScript is executed?

```js
type Person = {
  firstName: string;
  surname: string;
}
const bob: Readonly<Person> = {
  firstName: "Bob",
  surname: "Keel"
};
bob.surname = "Smith";
console.log(bob.surname);
```

- A3.TypeScript types can only make an object immutable at compile-time. So, the surname property will be successfully changed to 'Smith' at runtime.

<hr />

Q4.Do any type errors occur on the assignments on the last 2 lines?

```js
const bob = {
  name: {
    firstName: "Bob",
    surname: "Keel"
  },
  profile: {
    rating: "medium"
  }
} as const;
bob.name.surname = "Smith";
bob.profile.rating = "high";
```

- A4: Yes on both lines. A const assertion creates a deep immutable type.

<hr />

Q5.Do any type errors occur in the function?

```js
type Person = {
  name: string;
  profile: {
    level: number;
  }
};
function increaseLevel(person: Readonly<Person>) {
  person.profile.level++;
  return person;
}
```

- A5. No.The Readonly type creates a shallow immutable type, so changing the level property won't raise a type error.

<hr />

- Q6.Consider the following code:

```js
type Person = {
  firstName: string;
  surname: string;
}
const bob: Readonly<Person> = Object.freeze({
  firstName: "Bob",
  surname: "Keel"
});
bob.surname = "Smith";
console.log(bob.surname);
```

- A6: A type error. - Object.freeze will make the object immutable at runtime. So, a type error will be output to the console on the surname assignment.
