import { useMemo, useState } from 'react';

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

interface Item {
  id: number;
  isSelected: boolean;
}

const Demo2 = () => {
  const [count, setCount] = useState<number>(0);
  const [items] = useState<Item[]>(initialItems);

  //const selectedItem = () => items.find((item) => item.id === count); //This is performance issue.
  const selectedItem = useMemo(() => items.find((item) => item.id === count), [count, items]);

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Demo2;
