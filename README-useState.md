# useState

- useState is a React Hook that lets you add a state variable to your component.
- The set function returned by useState lets you update the state to a different value and trigger a re-render.
- https://react.dev/reference/react/useState
- https://react.dev/reference/react/useState#setstate

```js
const [state, setState] = useState(initialState);

function handleClick() {
  setName('Taylor'); // update the state to a new value and trigger a re-render.
  setAge(a => a + 1);
  // ...
```

### Example

- http://localhost:3000/counter-demo
- [DemoCounter.tsx](./src/react-hooks-useState/DemoCounter.tsx)
