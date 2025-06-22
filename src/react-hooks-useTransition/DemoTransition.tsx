import React from 'react';
import { useState, useTransition } from 'react';

function DemoTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setInput(value);
    startTransition(() => {
      const temp_items = [];
      for (let i = 0; i < 25000; i++) {
        temp_items.push(value);
      }
      setItems(temp_items);
    });
  };

  function generateName() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const getRandomLetter = () => {
      return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    };

    let newName = '';
    for (let i = 0; i < 5; i++) {
      newName += getRandomLetter();
    }

    return newName;
  }

  return (
    <div>
      <h1>Welcome to weird name generator,enter anything to create a weird name</h1>
      <input type="text" value={input} onChange={handleChange} placeholder="Enter new item" />

      <ul>
        {isPending
          ? 'Loading'
          : items.map((item, index) => {
              const name = generateName();
              return <li key={index}>{name + item}</li>;
            })}
      </ul>
    </div>
  );
}

export default DemoTransition;
