## useCallback

- useCallback returns a memorized function and it is called only when dependency changes.
- Skipping unnecessary re-render.
- https://react.dev/reference/react/useCallback

```js
const cachedFn = useCallback(fn, dependencies);
const Child = React.memo(({ fn }) => {});
```

#### Example 1

- [ParentComponent.tsx](./src/react-hooks-useCallback/ParentComponent.tsx)
- http://localhost:3000/useCallback-1

**Problem:**

- How to prevent the child components from being re rendered when the button in the app component is clicked?
- In React, when you create a function inside a functional component, it's recreated every time the component renders. For example:
- In React when the state of a parent component changes, it triggers a re- render of the parent component and its children. This is because React follows a unidirectional data flow, where changes in the state or props of a parent component can affect the rendering of its child components.

**Solution:**

- Use `usecallback` AND the `memo hook`.

<hr />

#### Example 2

- http://localhost:3000/useCallback-2
- [Demo.tsx](./src/react-hooks-useCallback/Demo.tsx)
- [Search.tsx](./src/react-hooks-useCallback/Search.tsx)

## useCallback vs useMemo

```js
const cachedFn = useCallback(fn, dependencies);
const cachedValue = useMemo(calculateValue, dependencies);
```

- Performance optimization.
- preventing unnecessary re-renders.
- `useCallback` memoizes a function.
- `useMemo` memoizes a value.

## Reference:

- https://react.dev/reference/react/useCallback
- https://react.dev/reference/react/memo
- https://www.youtube.com/watch?v=MxIPQZ64x0I&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=4
