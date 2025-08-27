# Generics Type

**Summary**

```ts
//1. Array<T>, Promise<T>, Record<K, V>
let scores: Array<number | string>;
let coordinates: Array<Coordinate>;
const userRespons: Promise<Response> = fetch('https://swapi.dev/api/');
//3. Record<K, V>;
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

### TS Playground

```ts
//Generics type
//1
let scores: Array<number | string>;
scores = [70, 65, 75];
scores = ['a', 'b', 'c']; //ERROR

//2
type Coordinate = [number, number];
let coordinates: Array<Coordinate>;
coordinates = [
  [30, 100],
  [100, 50],
];

//3 Promise
const promisedRespons: Promise<Response> = fetch('https://swapi.dev/api/');
promisedRespons.then((res) => console.log(res.ok));

//4.-----Record<K, V>;
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
records.janes;

type CatName = 'miffy' | 'boris' | 'mordred';

interface CatInfo {
  age: number;
  breed: string;
}
type CatRecord = Record<CatName, CatInfo>;
const cats: CatRecord = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

//5.-----function ???

// function firstOrNull:T(array: T[]): T{
//     return array[0]
// }

function firstOrNull<T>(array: T[]): null | T {
  return array.length === 0 ? null : array[0];
}
firstOrNull<string>(['Rod', 'Jane', 'Fred']);
firstOrNull<number>([1, 2, 3]);

///6. Interface
interface Form<T> {
  values: T;
}
type Contact = {
  name: string;
  email: string;
};

const contactForm: Form<Contact> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
};
///7.
type ApiResponse<T> = {
  data: T;
  isError: boolean;
};
type User = {
  name: string;
  age: number;
};
const response: ApiResponse<User> = {
  data: { name: 'hiroko', age: 30 },
  isError: false,
};
```

# TS Playground Quiz

```ts
//Q1.
let scores: any
scores = [70, 65, 75];
scores = ["a", 'b', "c"]; //ERROR

//Q2
let coordinates: any
coordinates = [
  [30, 100],
  [100, 50],
];

//3 Promise
const promisedRespons:any = fetch('https://swapi.dev/api/');
promisedRespons.then((res) => console.log(res.ok));


//4.-----Record<K, V>;
const records = {
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

//5.-----Record<K, V>;
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};


//6.-----function
function firstOrNull(array:any){
     return array.length === 0 ? null : array[0];
}
firstOrNull(["Rod", "Jane", "Fred"]);
firstOrNull([1, 2, 3]);

-
//7. Interface
const contactForm:any = {
    values: {
        name: "Bob",
        email: "bob@someemail.com"
    }
}
//8.
const response:any = {
    data: {name: "hiroko", age: 30},
    isError: false
}
```

# TS Playground Answer

```ts
//Q1.
//let scores: any
let scores: Array<number | string>;
scores = [70, 65, 75];
scores = ['a', 'b', 'c']; //ERROR

//Q2
type Coordinate = [number, number];
let coordinates: Array<Coordinate> = [
  [30, 100],
  [100, 50],
];

//3 Promise
const promisedRespons: Promise<Response> = fetch('https://swapi.dev/api/');
promisedRespons.then((res) => console.log(res.ok));

//4.-----Record<K, V>;
type UserInfo = {
  firstName: string;
  surname: string;
  score: number;
};
type RecordData = Record<string, UserInfo>;
const records: RecordData = {
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

//5.-----Record<K, V>;
type CatName = 'miffy' | 'boris' | 'mordred';

interface CatInfo {
  age: number;
  breed: string;
}
type CatRecord = Record<CatName, CatInfo>;
const cats: CatRecord = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

//6.-----function (Wrong, )
function firstOrNull<T>(array: Array<T>): null | T {
  return array.length === 0 ? null : array[0];
}

firstOrNull(['Rod', 'Jane', 'Fred']);
firstOrNull([1, 2, 3]);

//7. Interface (Wrong)

type Form<T> = {
  values: T;
};
type Contact = {
  name: string;
  email: string;
};

const contactForm: Form<Contact> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
};
//8. Wrong
type ApiResponse<T> = {
  data: T;
  isError: boolean;
};

const response: ApiResponse<{ name: string; age: number }> = {
  data: { name: 'hiroko', age: 30 },
  isError: false,
};
```
