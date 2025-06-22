import { useState } from 'react';
import './Demo.css';

const useToggle = (initial = false) => {
  const [visible, setVisible] = useState(initial);

  function toggle() {
    setVisible((prev) => !prev);
  }

  return [visible, toggle];
};

function ToggleDemo() {
  const [visible, toggle] = useToggle(false);
  const user = {
    name: 'John',
    email: 'john@domain.com',
    username: 'johnthedestroyer',
  };

  return (
    <div className="account">
      <p onClick={toggle}>Click to see account information</p>
      {visible ? (
        <div>
          {Object.keys(user).map((key) => (
            <p key={key} style={{ marginLeft: '20px' }}>
              {user[key]}
            </p>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ToggleDemo;
