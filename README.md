# React Hooks Demo

## useMemo

- In React, to update `state` means you have to trigger a rerender to the entire component.
- useMemo returns a memorized value.
- https://react.dev/reference/react/useMemo

```js
const cachedValue = useMemo(calculateValue, dependencies);
```

#### Example 1

- **Problem:** If the first button is clicked, we see that the text is changing from purple to red color, and we see from bigCalculation, which means that this calculation function runs after we change the color of this text by clicking on the button.
- **Solution:** The `useMemo` hook is to prevent rerendering when the color state changes. useMemo is called when dependencies `[counter]` changes.
- [Demo1.tsx](./src/react-hooks-useMemo/Demo1.tsx)
- http://localhost:3000/memo1

#### Example 2

- https://www.youtube.com/watch?v=vpE9I_eqHdM
- http://localhost:3000/memo2
- [Demo2.tsx](./src/react-hooks-useMemo/Demo2.tsx)

<hr />
