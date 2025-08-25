# Learn TypeScript - Quiz

- https://www.typescriptlang.org/play/

## Understanding TypeScript

https://learntypescript.dev/01/l3-quiz

5.  TypeScript type checks our code, but when can this type checking process take place?

- During the projects build process
- Code editors can use TypeScript to type check our code whilst it is being written. TypeScripts type checker can be invoked during the build process. TypeScript doesn’t exist at runtime.

## Creating Types

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

## Generic Types

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

## Type Narrowing

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

## Mapped Types

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

## Conditional Types

- https://learntypescript.dev/09/l4-quiz
- Q3.We have a requirement to create a utility type similar to ReturnType with the improvement of handling asynchronous functions. How could we define this type?

## Immutable Types

- https://learntypescript.dev/10/l6-quiz

**Question 1**

- Does a type error occur on the assignment on the last line?

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

- A: No.The items in the array are mutable. A readonly modifier needs to be placed before the type for the array items to be immutable

<hr />

**Question 2**

- Do any type errors occur on the surname and rating assignments on the last 2 lines?

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

**Question 3**

- What will be output to the console when the transpiled JavaScript is executed?

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

- A.TypeScript types can only make an object immutable at compile-time. So, the surname property will be successfully changed to 'Smith' at runtime.

<hr />

**Question 4**

- Do any type errors occur on the assignments on the last 2 lines?

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

- A: Yes on both lines. A const assertion creates a deep immutable type.

<hr />

**Question 5**

- Do any type errors occur in the function?

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

- A. No.The Readonly type creates a shallow immutable type, so changing the level property won't raise a type error.

<hr />

**Question 6**

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

- A: A type error. - Object.freeze will make the object immutable at runtime. So, a type error will be output to the console on the surname assignment.
