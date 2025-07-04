# Composition Pattern

- Instead of passing data down as props, you use components as `children` or props to achieve flexibility.
- https://medium.com/@ignatovich.dm/composition-vs-props-in-react-a-detailed-guide-f9034394cc7a

```js
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

**Example 1**

- http://localhost:3000/box-demo
- [BoxDemo.tsx](./src/component-pattern/BoxDemo.tsx)
- [Box.tsx](./src/component-pattern/components/Box.tsx)

# Event bubbling

- Use `stopPropagation()` to stop the event bubbling up to a parent element.
- When clicking on This is child element text, the alert shows twice.

#### Example

- [EventBubblingDemo.tsx](./src/event-bubbling/EventBubblingDemo.tsx)
- http://localhost:3000/event-bubbling-demo

```js
const EventBubblingDemo = () => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    alert('Clicked ' + event.currentTarget.id);
  };

  return (
    <div id="parentElement" onClick={handleClick}>
      This is the parent element
      <div id="childElement" onClick={handleClick}>
        This is the child element
      </div>
    </div>
  );
};
```

# Render an array of nested object

- http://localhost:3000/nested-data-view
- [NestedDataView.tsx](./src/nested-data/NestedDataView.tsx)
- JSX must have one parent element

```js
  return (
    <div>
      <h2>Demo</h2>
      {data.map((category) => (
		  <h2>{category.name}</h2> // ERROR - TWO parent divs inside data.map()
		  <div>
			{category.items.map((item)=>(
			  <p>{item.id}</p>
		  ))}
		  </div>
      ))}
    </div>
  );
```
