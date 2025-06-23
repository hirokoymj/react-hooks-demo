## Composition Pattern

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

```js
const Box = ({ children }: BoxProps) => {
  return (
    <div
      style={{
        border: '10px solid black',
        width: '25vw',
        margin: '20px',
      }}
    >
      {children}
    </div>
  );
};
export default Box;

Box.GreenOutline = function BoxGreenOutline({ children }: BoxProps) {
  return <div style={{ border: '2px solid green', margin: '30px' }}>{children}</div>;
};

Box.BrownOutline = function BoxBrownOutline({ children }: BoxProps) {
  return <div style={{ border: '15px solid brown', margin: '10px' }}>{children}</div>;
};
```

## Event bubbling

- Use `stopPropagation()` to stop the event bubbling up to a parent element.
- When clicking on This is child element text, the alert shows twice.

#### Example

- [EventBubblingDemo.tsx](./src/event-bubbling/EventBubblingDemo.tsx)

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
