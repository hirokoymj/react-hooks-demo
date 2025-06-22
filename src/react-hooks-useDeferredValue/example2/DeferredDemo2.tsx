import React from 'react';
import { useDeferredValue, useState } from 'react';
import SlowList from './SlowList';

const DeferredDemo2 = () => {
  const [query, setQuery] = useState<string>('');
  const deferredQuery = useDeferredValue(query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="tutorial">
      <input type="text" value={query} onChange={handleChange} placeholder="Search..." />
      <SlowList text={deferredQuery} />
    </div>
  );
};

export default DeferredDemo2;
