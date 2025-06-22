# Delaying - useDeferredValue

- https://react.dev/reference/react/useDeferredValue
- `useDeferredValue` is a React Hook that lets you defer updating a part of the UI.
- To avoid the rendering of loop on every key press we can use useDefferedValue hook.
- Introduced in React 18.

```js
const deferredValue = useDeferredValue(value);
```

````js
function SearchPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  // ...
}


```text
- jennife ➔ surname jennife should not be rendered.
- jennif➔surname jennif should not be rendered.
- jenni➔surname jenni should not be rendered.
- jenn➔surname jenn should not be rendered.
- jen➔surname jen should not be rendered.
- je➔surname je should not be rendered.
- j➔surname j should not be rendered.
````

## Example 1

- http://localhost:3000/deferred-demo1

## Example 2

- http://localhost:3000/deferred-demo2
