import { useState, useMemo } from 'react';

const Demo1 = () => {
  const [counter, setCounter] = useState<number>(0);
  const [color, setColor] = useState<string>('purple');

  // function bigCalculation() {
  //   console.log("From bigCalculation");
  //   var result = 0;
  //   for (var i = 0; i < 1000000; i++) {
  //     result += 1;
  //   }
  //   return counter + result;
  // }
  const apiKey = process.env.API_KEY;
  console.log(apiKey);

  const bigCalculationResult = useMemo(() => {
    console.log('From bigCalculation');
    var result = 0;
    for (var i = 0; i < 1000000; i++) {
      result += 1;
    }
    return counter + result;
  }, [counter]);

  function increase() {
    setCounter((counterValue) => counterValue + 1);
  }

  return (
    <div style={{ border: '10px solid black' }}>
      <h1>{apiKey}</h1>
      <p style={{ color: `${color}`, fontSize: '2rem' }}>This is App component</p>
      <button onClick={() => setColor('red')}>Change color</button>
      <br />
      Counter: {counter}
      <br />
      {/* {bigCalculation()} */}
      {bigCalculationResult}
      <br />
      <button onClick={increase}>Increment</button>
    </div>
  );
};
export default Demo1;
