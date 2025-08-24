//https://www.youtube.com/shorts/4CYkhXIDxeQ

type User = {
  id: number;
  name: string;
  age: number;
};

//const createUser = (User: { name: string; age: number }) => {};
//const createUser = (User: Omit<User, 'id'>) => {};
const createUser = (User: Pick<User, 'name' | 'age'>) => {};
