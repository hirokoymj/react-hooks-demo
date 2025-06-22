import { useDeferredValue, useState } from 'react';
import SlowList from './SlowList';

const DeferredDemo2 = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="tutorial">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <SlowList text={deferredQuery} />
    </div>
  );
};

export default DeferredDemo2;
