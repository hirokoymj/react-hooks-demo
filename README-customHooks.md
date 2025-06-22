# Custom Hooks

- https://react.dev/learn/reusing-logic-with-custom-hooks
- Reusing Logic with Custom Hooks
- A custom hook is a JavaScript function designed to encapsulate and reuse stateful logic and side effects across multiple components.

```js
const useToggle = (initial = false) => {
  const [visible, setVisible] = useState(initial);

  function toggle() {
    setVisible((prev) => !prev);
  }
  return [visible, toggle];
};
```

#### Example 1 - Visibility Toggle

- http://localhost:3000/toggle-demo

#### Example 2 - Convert temperature unit from C to F

- http://localhost:3000/temp-unit-convert-demo
