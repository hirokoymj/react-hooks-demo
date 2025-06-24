# TypeScript

```js
//Array
const names: string[] = []; //string array
const age: number[] = []; // number array
const users: readonly string[] = ['Dylan']; //read only
const users2: [number, string] = [1, 'Mosh']; //Tuples=Fixed length
const myarray1: (number | string)[] = [1, 2, 'abc']; //Union=OR
const myarray2: any[] = [1, 2, 'abc', true]; //any
//An enum is a group of constants
enum Size {
  Small = 1, //first member
  Medium = 2, //second member
  Large = 3, // third member
}
//Function
function getFirstElement1(array: number[]) {
  return array[0];
}
function getFirstElement3(array: (number | string)[]) {
  return array[0];
}
//Function Generic
function getFirstElement<T>(array: T[]) {
  return array[0];
}
const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ['abc', 'efg'];
const firstString = getFirstElement(strings);

// Custom type
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  },
};
// Literal type = exact value
type Quantity = 50 | 100;
let quantity: 50 | 100 = 100;

//Optional Chaning - ex.1
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday); // undefined

let customer1 = getCustomer(1);
console.log(customer1?.birthday); // 2025-05-13T22:38:52.611Z

//Optional Chaning - ex.2
type MyCustomer = {
  birthday?: Date;
};

function getMyCustomer(id: number): MyCustomer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let myCustomer = getCustomer(0);
console.log(myCustomer?.birthday?.getFullYear()); // ? undefined
```

## Generic type

```js
//Generic type - Ex1
type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};
type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResopnse = ApiResponse<{ title: string }>;
type StatusResponse = ApiResponse<{ status: boolean }>;

const response1: UserResponse = {
  data: { name: 'Kale', age: 28 },
  isError: false,
};

const response2: BlogResopnse = {
  data: { title: 'mytitle' },
  isError: false,
};

const response3: StatusResponse = {
  data: { status: false },
  isError: false,
};

///Ex2
//- https://www.w3schools.com/typescript/exercise.php?filename=exercise_basic_generics1
function createPair<TypeX, TypeY>(x: TypeX, y: TypeY) {
  return [x, y];
}

console.log(createPair<string, number>('Meaning', 42));
console.log(createPair<number, number>(1, 42));
console.log(createPair<string, string>('aa', 'bb'));

//Generic type - Ex3
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };
const wrappedValue2: Wrapped<string> = { value: 'aaa' };

```
