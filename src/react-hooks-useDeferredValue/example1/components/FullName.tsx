import { useDeferredValue, useMemo, useState } from 'react';
import users from '../users.json';

const FullName = () => {
  const userlist = users.slice(0, 20000);
  const [input, setInput] = useState('');
  let deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(<div key={i}>{userlist[i].name + ' ' + deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  return (
    <>
      <label htmlFor="surname">
        <b> Enter surname</b>
      </label>
      <input type="text" id="surname" onChange={(e) => setInput(e.target.value)} />
      <div>{list}</div>
    </>
  );
};

export default FullName;
