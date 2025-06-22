# Custom Hooks

- A custom hook is a JavaScript function designed to encapsulate and reuse stateful logic and side effects across multiple components.
- https://react.dev/learn/reusing-logic-with-custom-hooks
- Reusing Logic with Custom Hooks

#### Example 1 - Visibility Toggle

- [ToggleDemo.ts](./src/react-hooks-customHook/ToggleDemo.tsx)
- http://localhost:3000/toggle-demo

```js
const useToggle = (initial = false) => {
  const [visible, setVisible] = useState(initial);

  function toggle() {
    setVisible((prev) => !prev);
  }
  return [visible, toggle];
};
```

#### Example 2 - Convert temperature unit from C to F

- [TempUnitConvertDemo.tsx](./src/react-hooks-customHook/TempUnitConvertDemo.tsx)
- http://localhost:3000/temp-unit-convert-demo
