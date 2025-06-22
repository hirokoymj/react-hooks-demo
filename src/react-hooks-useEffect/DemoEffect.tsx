import { useEffect, useState } from 'react';

export default function DemoEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('The count is:', count);
    return () => {
      //Destory itself and then recreated with new value.
      console.log('I am being cleaned up!');
    };
  }, [count]);

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
