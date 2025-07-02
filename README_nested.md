# Render nested object

- http://localhost:3000/nested-data-view
- [data.js](./src/nested-data/data.js)
- [NestedDataView.tsx](./src/nested-data/NestedDataView.tsx)
- One parent div must place nested two data.map().

```js
data.map((d) => (
  <div key={d.id}>
    {d.items.map((item) => (
      <p id={item.id}>{item.name}</p>
    ))}
  </div>
));
```
