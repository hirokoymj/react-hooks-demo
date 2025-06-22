# Non-Blocking UI - useTransition

- https://react.dev/reference/react/useTransition
- `useTransition` is a React Hook that lets you render a part of the UI in the background

```js
const [isPending, startTransition] = useTransition();
startTransition(() => {});
```

## Example 1

- http://localhost:3000/transition-demo1
- [Transition.jsx](./src/react-hooks-useTransition/DemoTransition.jsx)

**Problem:**

- When we enter an input, it taks too long to disply the generated list of names and preventing us from entering more values into the input field until the lis of names are generated.
- How can we change the app so that we can enter values into the input field without waiting for the list of names to be generated?
