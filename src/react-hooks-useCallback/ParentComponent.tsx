import React, { useState, useCallback } from 'react';

type ChildComponentProps = {
  bigCalculation: () => void;
};

const ChildComponent = React.memo(({ bigCalculation }: ChildComponentProps) => {
  console.log('Child Component');
  return (
    <div style={{ border: '6px solid green', margin: '20px' }}>
      <h2>Child Component</h2>
      <button onClick={bigCalculation}>Increment from Child</button>
    </div>
  );
});

const ParentComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  const [color, setColor] = useState<string>('purple');

  // const bigCalculation = () => {
  //   for (var i = 0; i < 1000000; i++) {}
  //   setCounter(counter + i);
  // };

  const bigCalculation = useCallback(() => {
    for (var i = 0; i < 1000000; i++) {}
    setCounter(counter + i);
  }, [counter]);

  return (
    <div style={{ border: '10px solid black' }}>
      <p style={{ color: `${color}`, fontSize: '2rem' }}>Parent component</p>
      <button onClick={() => setColor('red')}>Change color from Parent</button>
      <br />
      {counter}
      <ChildComponent bigCalculation={bigCalculation} />
    </div>
  );
};
export default ParentComponent;
