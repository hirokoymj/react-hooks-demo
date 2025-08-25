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
