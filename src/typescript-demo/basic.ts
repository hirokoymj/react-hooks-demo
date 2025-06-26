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
