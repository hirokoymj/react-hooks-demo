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
