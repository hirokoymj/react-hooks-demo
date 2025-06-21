# useEffect

```js
useEffect(setup, dependencies?)
// useEffect calls at least when a component is mount. = at least once guarantee.
useEffect(()=>{}, [])
// useEffect calls whenever dependency array changes.
useEffect(()=>{}, [count])
//Whenever the dependency array changes, useEffect hook will destoy itself(= calls return function)
useEffect(()=>{return () => {console.log('I am being cleaned up!');};}, [count])
```

the lifecycle of useEffect

- useEffect is guaranteed to run at least once when component is mount.
- Whenever something in the dependency array changes, useEffect hook will destoy itself, and then it is goin go be recreated with the new value.

- https://stackoverflow.com/questions/73196018/useeffect-and-usestate-to-fetch-api-data
- https://react.dev/reference/react/useEffect#fetching-data-with-effects
- useEffect is a React Hook that lets you synchronize a component with an external system.

### Example 1

- http://localhost:3000/users
- [Users.jsx](./src/react-hooks-useEffect/Users.jsx)

### Example 2

- http://localhost:3000/demo-effect
- https://www.youtube.com/watch?v=-4XpG5_Lj_o&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=2

```js
useEffect(() => {}, []); //Empty dependency array -> it is only going to run that first initial
useEffect(() => {}, [count]);
useEffect(() => {
  return () => {
    console.log('I am being cleaned up!');
  };
}, [count]);
```

the lifecycle of useEffect

- useEffect will first run the code on mount of the component. at least once on mount. And then if you give it a dependency array, whenever something in the dependency array changes, useEffect hook will destoy itself and it will run this cleanup function before doing so. And then it is goin go be recreated with the new value.
- it is guaranteed to run at least once when component is mount.
- when the dependency array changes, useEffecdt hook will destory itself and then recreated with new value.
- evertime it is being updated, because it is being destroyed, And then it is rerunning with the new value.

```js
useEffect(() => {
  // The code that we want to run
  console.log('The count is:', count);

  // Optional return function
  return () => {
    console.log('I am being cleaned up!');
  };
}, [count]); // The dependency array
```
