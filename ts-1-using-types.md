# Using Types

- JavaScript - string, number, and boolean, date type ==>object
- type of a null => object
- TypeScript will infer the type from the value assignment.
- Optional function parameters ?
- TypeScript doesn’t exist at runtime - it is a development tool. So, TypeScript won't do any type checking on the code at runtime.
- A primitive type -> infers a literal type.
- A non-primitive type -> same type as assigned.

```js
function add(a: number, b?: number): number {
  return a + b;
}
add(3)

//TypeScript can automatically infer the type of a variable from the value it is assigned.
let score = 10;
console.log(score); //number
let dateOfBirth = new Date(1990, 4, 7); //Date
//TypeScript can infer types that don't exist in JavaScript.
const firstName = "Bob"; //the type is 'Bob'!
const age = 31; //The type is 31.
const created = new Date(2019, 11, 6);//The type is Date
let counter; //any type
counter = 10;
```

## Quiz

**Question 3**

- Is the type annotation necessary to type the amount variable to number in the declaration below?

```js
let amount: number = 1000;
```

- A: NO. TypeScript can infer the type from the value assignment in the declaration.

<hr />

**Question 4**

- Is the type annotation necessary to type the message parameter to string in the declaration below?

```ts
function logMessage(message: string) {}
```

- A: TypeScript can't infer the type of the message parameter and so a type annotation is needed.

# TS Playground Quiz

```ts
//=============================================
//Question 1:
function calculateRenewal(startDate: any) {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 30);
  return result;
}

const dateOfBirth = new Date(1990, 4, 7);
console.log(dateOfBirth.getDate());

//Answer
function calculateRenewal(startDate: Date) {}

//=============================================
//Question 2:
let counter;
let score = 10;
let dateOfBirth = new Date(1990, 4, 7);

const firstName = 'Bob';
const age = 31;
const created = new Date(2019, 11, 6);

//Answer
let counter; //any
let score = 10; //number
let dateOfBirth = new Date(1990, 4, 7); //Date

const firstName = 'Bob'; //Bob
const age = 31; //31
const created = new Date(2019, 11, 6); //Date
//=============================================
//Question 3:
function add(a: number, b: number): number {
  return a + b;
}
add(3); //ERROR
//Answer
function add(a: number, b?: number): number {
  if (b) {
    return a + b;
  }
  return a;
}
add(3);
add(1, 2);
//=============================================
//=============================================
//Question 2:
//=============================================
```
