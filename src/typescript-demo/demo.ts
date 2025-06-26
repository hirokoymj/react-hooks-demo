// BAD example
//　there are three states in one type.
// type LocationState = {
//   state: 'Loading' | 'Success' | 'Error';
//   coords?: { lat: number; lon: number };
//   error?: { message: string };
// };

// function printLocation(location: LocationState) {
//   switch (location.state) {
//     case 'Loading':
//       console.log(location.state);
//       break;
//     case 'Success':
//       console.log(location.coords.lat, location.coords.lon); //Warning
//       break;
//     case 'Error':
//       console.log(location.error.message); //Warning
//       break;
//   }
// }

//====Improved
// we have three different states.  we should probably create a type for each one of those.
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

///Type vs Interface = object only
//
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

