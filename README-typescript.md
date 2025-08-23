# TypeScript

```js
//===Primitive type
let a: number = 1;
let b: string = 'abc';
type SType = string | number;
const user: SType = 'aaaa';
const categoryId: SType = 7777;

//===Array
// string array
const array1: string[] = [];
// number array
const array2: number[] = [];
// Read only array
const array3: readonly string[] = ['abc'];
// Fixed length array(Tuples)
const array4: [number, string] = [1, 'abc'];
// number OR string array(Union)
const array5: (number | string)[] = [1, 2, 'abc'];
// Generic type array
type ArrayType<T> = T[];
const numbers: ArrayType<number> = [1, 2, 3, 4];
const strings: ArrayType<string> = ['Geeks', 'For', 'Geeks'];
const mixedArr: ArrayType<number | string | boolean> = ['GeeksforGeeks', 1, 2, true, 'TypeScript', false];

//===Object
// type
type UserType = {
  name: string;
  age: number;
};
// interface
interface UserInter {
  name: string;
  age: number;
}
const user: UserType = {
  name: 'Hiroko',
  age: 28,
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
const obj3: ObjectType<{ id: number; title: string }> = {
  data: { id: 1, title: 'MyTitle' },
};

//===Function
// A number array param.
function getFirstElement1(array: number[]) {
  return array[0];
}
// number or string array param.
function getFirstElement2(array: (number | string)[]) {
  return array[0];
}
// Generic Type
function getFirstElement3<T>(array: T[]) {
  return array[0];
}
function identity<T>(value: T): T {
  return value;
}
//<T> means “this function works with any type.”
//value: T means “the parameter has the type T.”
//: T means “Return value”
const nums = [1, 2, 3];
const firstNum = getFirstElement3(nums);
const names = ['abc', 'efg'];
const firstString = getFirstElement3(names);
const num = identity(42);
const str = identity('hello');
//===ENUM (A group of constants)
enum Size {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}
//=== Exact value
type Quantity = 50 | 100;
let quantity: Quantity = 100;
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

<hr /><hr />

### Exercise 1

### Exercise 2

### Exercise 3

### Exercise 4

### Exercise 5

- [Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

```js
interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
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
export function filterPersons(persons: Person[], personType: Person['type'], criteria: Partial<Person>): Person[] {
  //export function filterPersons(persons: Person[], personType: string, criteria: unknown): unknown[] {
```

### Exercise 6

- [Tuple Type](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
- [Generic Type](https://www.typescriptlang.org/docs/handbook/2/generics.html)

```js
export function swap<T1, T2>(v1: T1, v2: T2): [T2, T1] {
  //export function swap(v1, v2) {
  return [v2, v1];
}
```

### Exercise 7

- https://www.typescriptlang.org/docs/handbook/utility-types.html
- [Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)

```js
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

//type PowerUser = unknown;
type PowerUser = Omit<User, 'type'> & Omit<Admin, 'type'> & {
    type: 'powerUser'
};


export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];
```

### Exercise 8

```js
//export type ApiResponse<T> = unknown;
export type ApiResponse<T> = { status: 'success'; data: T } | { status: 'error'; error: string };

type AdminsApiResponse =
  | {
      status: 'success';
      data: Admin[];
    }
  | {
      status: 'error';
      error: string;
    };

export function requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
  //export function requestAdmins(callback: (response: AdminsApiResponse) => void) {

export function requestUsers(callback: (response: ApiResponse<User[]>) => void) {
  //export function requestUsers(callback: (response: UsersApiResponse) => void) {

export function requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
//export function requestCurrentServerTime(callback: (response: unknown) => void) {

export function requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
//export function requestCoffeeMachineQueueLength(callback: (response: unknown) => void) {
```

### Exercise 9

## References

- https://www.w3schools.com/typescript/index.php
- https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1
- https://www.youtube.com/watch?v=EcCTIExsqmI&t=400s
- https://www.youtube.com/watch?v=oiFo2z8ILNo
- [TypeScript official doc](https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/)
- https://www.youtube.com/watch?v=oiFo2z8ILNo
