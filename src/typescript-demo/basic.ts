//===Array
// String array
const array1: string[] = [];
// Number array
const array2: number[] = [];
// Read only array
const array3: readonly string[] = ['Dylan'];
// Fixed length array = Tuples
const array4: [number, string] = [1, 'Mosh'];
// number OR string array = Union
const array5: (number | string)[] = [1, 2, 'abc'];
// Generic type array
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
//Generic type object
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
const num = identity(42);
const str = identity('hello');
//<T> means “this function works with any type.”
//value: T means “the parameter has the type T.”
//: T means “Return value”
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
