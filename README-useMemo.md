# useMemo

- In React, to update `state` means you have to trigger a rerender to the entire component.
- useMemo returns a memorized value.
- https://react.dev/reference/react/useMemo

```js
const cachedValue = useMemo(calculateValue, dependencies);
```

### Example 1

- [Demo1.tsx](./src/react-hooks-useMemo/Demo1.tsx)
- http://localhost:3000/memo1
- **Problem:** If the first button is clicked, we see that the text is changing from purple to red color, and we see from bigCalculation, which means that this calculation function runs after we change the color of this text by clicking on the button.
- **Solution:** The `useMemo` hook is to prevent rerendering when the color state changes. useMemo is called when dependencies `[counter]` changes.

```js
const Demo1 = () => {
  const [counter, setCounter] = useState<number>(0);
  const [color, setColor] = useState<string>('purple');

  // function bigCalculation() { // Performance issue
  //   console.log("From bigCalculation");
  //   var result = 0;
  //   for (var i = 0; i < 1000000; i++) {
  //     result += 1;
  //   }
  //   return counter + result;
  // }

  const bigCalculationResult = useMemo(() => {
    console.log('From bigCalculation');
    var result = 0;
    for (var i = 0; i < 1000000; i++) {
      result += 1;
    }
    return counter + result;
  }, [counter]);
```

### Example 2

- [Demo2.tsx](./src/react-hooks-useMemo/Demo2.tsx)
- http://localhost:3000/memo2
- https://www.youtube.com/watch?v=vpE9I_eqHdM

```js
const Demo2 = () => {
  const [count, setCount] = useState<number>(0);
  const [items] = useState<Item[]>(initialItems);

  //const selectedItem = () => items.find((item) => item.id === count); //This is performance issue.
  const selectedItem = useMemo(() => items.find((item) => item.id === count), [count, items]);
```
