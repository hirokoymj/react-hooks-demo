# useEffect

- sync a component with an external system.
- Guarantee to run at least once when component is mount.
- Lifecycle: Whenever the dependency array changes, useEffect hook will destoy itself, and then it is goin go be recreated with the new value.
- https://react.dev/reference/react/useEffect

```js
//Syntax
useEffect(setup, dependencies?)

// useEffect calls at least when a component is mount. = at least once guarantee.
useEffect(()=>{}, [])

// useEffect calls whenever dependency array changes.
useEffect(()=>{}, [count])

// useEffect will destroy itself and then re-created.
useEffect(()=>{return () => {console.log('I am being cleaned up!');};}, [count]) //Ex. Reset setInterval().
```

### Example 1

- http://localhost:3000/users
- [Users.jsx](./src/react-hooks-useEffect/Users.jsx)

### Example 2

- http://localhost:3000/demo-effect
- https://www.youtube.com/watch?v=-4XpG5_Lj_o&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=2

```js
useEffect(() => {
  console.log('The count is:', count);
  return () => {
    //Destory itself and then recreated with new value.
    console.log('I am being cleaned up!');
  };
}, [count]);
```

### References:

- https://stackoverflow.com/questions/73196018/useeffect-and-usestate-to-fetch-api-data
- https://react.dev/reference/react/useEffect#fetching-data-with-effects
