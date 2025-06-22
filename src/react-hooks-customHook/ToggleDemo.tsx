import { useState } from 'react';

//type UseToggleReturn = [boolean, () => void];

const useToggle = (initial = false) => {
  const [visible, setVisible] = useState<boolean>(initial);

  const toggle = () => {
    setVisible((prev) => !prev);
  };

  return [visible, toggle] as const;
};

interface User {
  name: string;
  email: string;
  username: string;
}
const user: User = {
  name: 'John',
  email: 'john@domain.com',
  username: 'johnthedestroyer',
};

const ToggleDemo = () => {
  const [visible, toggle] = useToggle(false);
  return (
    <div>
      <h2>User Details</h2>
      <button onClick={toggle}>Click to see user info</button>
      <div>
        {visible ? (
          <div>
            {' '}
            <ul>
              {(Object.keys(user) as Array<keyof User>).map((key) => (
                <li key={key}>
                  <strong>{key}:</strong> {user[key]}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>nothing to display</div>
        )}
      </div>
    </div>
  );
};

export default ToggleDemo;
