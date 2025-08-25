# Standard types

- Date: function calculateRenewal(startDate: Date): Date {}
- any:
- void: function return types
- Array:
- unknown
- never

## Using the Date type

```ts
function calculateRenewal(startDate) {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 30);
  return result;
}
function calculateRenewal(startDate: Date): Date {
  ...
}
```

## Understanding the any type

## Understanding and using the void type

## Using Arrays

```ts
//Ex1 - Using the Array generic type
const numbers: Array<number> = [];
numbers.push(1);
numbers.push('two'); //type error
numbers.push(false); //type error

//Ex2
const numbers: Array<number> = [1, 'two', false];
console.log(numbers); //type error two and false

//Ex3
const items: number[] = [];

//Ex4
const strings: string[] = ['one', 'two', 'three'];

//Ex5
const array = [1, 2, 3];
console.log(array); //Question -> array is number[] TypeScript can cleverly infer the type of an array.

//Ex6
function logScores(firstName, ...scores) {
  console.log(firstName, scores);
}
logScores('Ben', 50, 75, 85); // outputs Ben and [50, 75, 85]
function logScores(firstName: string, ...scores: number[]) {}
```

## Using tuples

```ts
//Tuple type
const [state, setState] = useState(initialState);
const tomScore: [string, number] = ['Tom', 70];
//open-ended tuples
let benScores: [name: string, ...scores: number[]];
benScores = ['Ben', 50, 75, 85];
```

## Using the never type

```ts
//Ex1
const keepLogging = (message: string): never => {
  while (true) {
    console.log(message);
  }
};

//Ex2
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
//Ex3
function add(a: unknown, b: unknown) {
  return a + b;
}

function add(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}

//Ex4 - Type Error Why?
async function getData(path: string): Promise<unknown> {
  const response = await fetch(path);
  return await response.json();
}

type Person = {
  id: string;
  name: string;
};

async function getPerson(id: string): Promise<Person | null> {
  const person = await getData('/people/1');
  if (person) {
    return person;
  }
  return null;
}
//The getData function returns a promise of type unknown.
//The getPerson function returns a promise of type Person or null.
//Focus on line 14, where the person variable is returned from the getPerson function.
// Solution!!
async function getPerson(id: string): Promise<Person | null> {
  const person = await getData('/people/1');
  if (person && isPerson(person)) {
    return person;
  }
  return null;
}
function isPerson(person: any): person is Person {
  return 'id' in person && 'name' in person;
}
```

- The never type is used to represent a type of value that will never occur

## Using the unknown type

- any - unsure of the type of value AND NO type checks.
- unknown - unser of the type AND type-safe.

## Quiz

- https://learntypescript.dev/05/l5-quiz

**Question 2.**

- What is the return type in the function below?

```js
function logMessage(message: string) {
  return console.log(message);
}
```

- A: Void

<hr />

**Question 7**

- What is the type of the invalid variable in the function below? -> never

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

- A: The never type is used to represent a type of value that will never occur.
