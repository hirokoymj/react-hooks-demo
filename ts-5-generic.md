# Generics Type

**Summary**

```ts
//1. Generics Type: Array, Promise, Object
Array<T>;
Promise<T>;
Record<K, V>;
```

```ts
//=====Using some standard generic types
//-----Array<T>;
let scores: Array<number>;
scores = [70, 65, 75];
scores = [70, '65', 75]; //ERROR

type Coordinate = [number, number];
let coordinates: Array<Coordinate>;

coordinates = [
  [30, 100],
  [100, 50],
];

coordinates = [
  //ERROR
  [30, 100, 0],
  [100, 50],
];

//-----Promise<T>;
const promisedResponse: Promise<Response> = fetch('https://swapi.dev/api/');
promisedResponse.then((res) => console.log(res.ok));

//-----Record<K, V>;
type Result = {
  firstName: string;
  surname: string;
  score: number;
};
type ResultRecord = Record<string, Result>;
const records: ResultRecord = {
  rodj: {
    firstName: 'Rod',
    surname: 'James',
    score: 70,
  },
  janes: {
    firstName: 'Jane',
    surname: 'Smith',
    score: 95,
  },
  fredp: {
    firstName: 'Fred',
    surname: 'Peters',
    score: 60,
  },
};
console.log(records);
//rodj, janes, and fredp are the keys, and the values all have the Result type.

//=====Creating generic functions

function firstOrNull<T>( ... ) { ... }
const someVar = <T1, T2, ...>(...) => {}
T (for "T"ype)
S (for "S"ate)
E (for "E"lement)
K (for "K"ey)
V (for "V"alue)

// function firstOrNull(array: string[]): string | null {
//   return array.length === 0 ? null : array[0];
// }
function firstOrNull<T>(array: T[]): T | null {
  return array.length === 0 ? null : array[0];
}

firstOrNull<string>(["Rod", "Jane", "Fred"]);
firstOrNull<number>([1, 2, 3]);

//=====Creating generic interfaces
//interface InterfaceName<T1, T2, ...> {}
interface Form<T> {
  values: T;
}
interface Contact {
  name: string;
  email: string;
}
const contactForm: Form<Contact> = {
    values: {
        name: "Bob",
        email: "bob@someemail.com"
    }
}



//=====Creating generic type aliases
//=====Creating generic classes
class List<T> {
  private items: T[] = [];

 add(item: T) {this.items.push(item);}
}

const numberList = new List<number>();
numberList.add(1);
numberList.add("a"); //ERROR

//=====Implementing generic parameter defaults
//=====Implementing generic parameter constraints
//=====Using generic rest elements with tuple types
//=====Spreading generic tuple parameters
//https://www.youtube.com/watch?v=EcCTIExsqmI&t=60s
// Q1:
type ApiResponse = {
    data: any
    isError: boolean
}
const response: ApiResponse = {
    data: {},
    isError: false
}
// A1:
type ApiResponse<T> = {
    data: T
    isError: boolean
}

const response: ApiResponse<{name: string, age: number}> = {
    data: {
        name: "hiroko",
        age: 30
    },
    isError: false
}
//Q2
type UserResponse = ApiResponse<{name: string, age: number}>
type BlogResponse = ApiResponse<{title: string, author: string}>

const userResponse: UserResponse = {
    data: {
        name: "hiroko",
        age: 30
    },
    isError: false
}
const blogResponse: BlogResponse = {
    data: {
        title: "book 1",
        author: "John"
    },
    isError: false
}
//Q3
type ApiResponse<T extends object> = {
    data: T
    isError: boolean
}

const dummyResponse: ApiResponse<{name: string}> = {
    data: {name: "test"},
    isError: true
}
```

### Quiz

- https://learntypescript.dev/06/l10-quiz

**Question 6**

- We have a function below which outputs the name property of an object to the console. How can we use generics to make this more strongly-typed?

```js
function logName(object: any) {
  console.log("My name is " + object.name);
}
```

**Answer**

```
function logName<T extends {name: string}>(object: T) {
  console.log("My name is " + object.name);
}
```

- A generic parameter with a constraint containing a name property can be used to make the function more strongly-typed.
