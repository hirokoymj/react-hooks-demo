import { useState } from 'react';

//interface CounterDemoProps {}

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
