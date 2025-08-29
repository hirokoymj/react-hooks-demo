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

# TS Playground Quiz

```ts
//Question 1 - Array<>
let scores: any
scores = [70, 65, 75];
scores = ["a", 'b', "c"]; //ERROR

//Answer
let scores: Array<number | string>
scores = [70, 65, 75];
scores = ["a", 'b', "c", "d"];
//=============================================
//Question 2
let coordinates: any = [
  [30, 100],
  [100, 50],
];
//Answer
type Coordinate = [number, number];
let coordinates: Array<Coordinate> = [
  [30, 100],
  [100, 50],
];

//=============================================
//Question 3. Promise
const promisedRespons:any = fetch('https://swapi.dev/api/');
promisedRespons.then((res) => console.log(res.ok));

//Answer
const promisedRespons:Promise<Response> = fetch('https://swapi.dev/api/');
promisedRespons.then((res) => console.log(res.ok));

//=============================================
//Question 4.
const records: any = {
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
//Answer: Record<K, V>

type UserInfo = {
  firstName: string;
  surname: string;
  score: number
}
type BookInfo = {
  title: string;
  author: string;
}

// type UserRecord = Record<string, UserInfo>
// type BookRecord = Record<string, BookInfo>
type RecordData<T> = Record<string, T>

//const records: UserRecord = {
const records: RecordData<UserInfo> = {
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
//const books:BookRecord = {
const books:RecordData<BookInfo> = {
  book1: {
    title: "a",
    author: "aaa"
  },
  book2: {
    title: "b";
    author: "bbb"
  }
}
//=============================================
//Q5. Record<K, V>
type CatName = "miffy" | "boris" | "mordred";
const cats:any = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

//Answer
interface CatInfo  {
  age: number;
  breed: string
}
const cats:Record<CatName,CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
//=============================================
//Question 6
function getFirstElement(array: (number | string)[]): (number | string){
     return array[0];
}
getFirstElement([1, 2, 3]);
getFirstElement(["Rod", "Jane", "Fred"]);

//A6
function getFirstElement<T>(array: T[]): T{
     return array[0];
}
//=============================================
//Question 7
const contactForm: any = {
    values: {
        name: "Bob",
        email: "bob@someemail.com"
    }
}
const bookForm:any = {
	values: {
		title: "test",
		author: "John Smith"
	}
}
//A7.
type Contact = {
  name: string;
  email: string;
}
type Book = {
  title: string;
  author: string
}
type Form<T> = {
  values: T
}
const contactForm:Form<Contact> = {
	values: {
		name: "Bob",
		email: "bob@someemail.com"
	}
}
const bookForm: Form<Book> = {
	values: {
		title: "test",
		author: "John Smith"
	}
}
//=============================================
//Question 8
const response = {
    data: {name: "hiroko", age: 30},
    isError: false
}
//A8.
type ApiResponse<T> = {
  data: T;
  isError: boolean
}
const response: ApiResponse<{ name: string; age: number }> = {
  data: { name: 'hiroko', age: 30 },
  isError: false,
};

type Contact = {
  name: string;
  age: number
}

const contactResponse: ApiResponse<Contact> = {
    data: {name: "hiroko", age: 30},
    isError: false
}
//=============================================
```
