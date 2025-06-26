# TypeScript

```js
//===Array
// string
const array1: string[] = [];
// number
const array2: number[] = [];
// Read only
const array3: readonly string[] = ['Dylan'];
// Fixed length(Tuples)
const array4: [number, string] = [1, 'Mosh'];
// number OR string(Union)
const array5: (number | string)[] = [1, 2, 'abc'];
// Generic type
type ArrayType<T> = T[];
const numbers: ArrayType<number> = [1, 2, 3, 4];
const strings: ArrayType<string> = ['Geeks', 'For', 'Geeks'];
const mixedArr: ArrayType<number | string | boolean> = ['GeeksforGeeks', 1, 2, true, 'TypeScript', false];
//===Object
type Employee = {
  id: number;
  name: string;
};
const employee: Employee = {
  id: 1,
  name: 'Mosh',
};
//Generic type
type ObjectType<T> = {
  data: T;
};
const obj1: ObjectType<{ name: string; age: number }> = {
  data: { name: 'Kale', age: 28 },
};
const obj2: ObjectType<{ id: number; zip: number }> = {
  data: { id: 1, zip: 70581 },
};
const obj3: ObjectType<{ bookId: number; title: string }> = {
  data: { bookId: 1, title: 'MyTitle' },
};
//===Function
// number argument
function getFirstElement1(array: number[]) {
  return array[0];
}
// number or string argument
function getFirstElement2(array: (number | string)[]) {
  return array[0];
}
// Generic #1
function getFirstElement3<T>(array: T[]) {
  return array[0];
}
const nums = [1, 2, 3];
const firstNum = getFirstElement3(nums);
const names = ['abc', 'efg'];
const firstString = getFirstElement3(names);
// Generic #2
function identity<T>(value: T): T {
  return value;
}
//<T> means “this function works with any type.”
//value: T means “the parameter has the type T.”
//: T means “Return value”
const num = identity(42);
const str = identity('hello');
//-----
//===enum = A group of constants
enum Size {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}
//=== Exact value
type Quantity = 50 | 100;
let quantity: Quantity = 100;
//let quantity2: Quantity = 20; // Error
//===Optional Chaning "?"
type MyCustomer = {
  birthday?: Date;
};
function getCustomer(id: number): MyCustomer | null {
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

## Q1: - Bad example

- The three states(Loading, Success and Error) are defined as one type using `?` operator.
- There are multiple Typescript warings.

```js
type LocationState = {
  state: 'Loading' | 'Success' | 'Error';
  coords?: { lat: number; lon: number };
  error?: { message: string };
};

function printLocation(location: LocationState) {
  switch (location.state) {
    case 'Loading':
      console.log(location.state);
      break;
    case 'Success':
      console.log(location.coords.lat, location.coords.lon); //Warning
      break;
    case 'Error':
      console.log(location.error.message); //Warning
      break;
  }
}
```

**Revised**

- The three distinct types were created and combined with `|` operator.

```js
type LoadingState = {
  state: 'Loading';
};

type SuccessState = {
  state: 'Success';
  coords: { lat: number; lon: number };
};

type ErrorState = {
  state: 'Error';
  error: { message: string };
};

type LocationState = LoadingState | SuccessState | ErrorState;

function printLocation(location: LocationState) {
  switch (location.state) {
    case 'Loading':
      console.log(location.state);
      break;
    case 'Success':
      console.log(location.coords.lat, location.coords.lon);
      break;
    case 'Error':
      console.log(location.error.message);
      break;
  }
}
```

## Type vs Interface

- Type is better than Interface because Inteface is defined object only.
- Type can use an operator - `|&`.

```js
type UserType = {
  name: string;
  age: number;
};
interface UserInter {
  name: string;
  age: number;
}
const user: UserType = {
  name: 'Hiroko',
  age: 28,
};

type SType = string | number;
const user1: SType = 'Kale';
const user2: SType = 123;

// No error when User defined twice.
interface User {
  name: string;
  age: number;
}

interface User {
  address: string;
  city: string;
}
```

## References

- https://www.w3schools.com/typescript/index.php
- https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1
- https://www.youtube.com/watch?v=EcCTIExsqmI&t=400s
- https://www.youtube.com/watch?v=oiFo2z8ILNo
- [TypeScript official doc](https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/)
- https://www.youtube.com/watch?v=oiFo2z8ILNo
