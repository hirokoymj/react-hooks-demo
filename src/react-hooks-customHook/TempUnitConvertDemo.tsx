import React, { useState } from 'react';

const useConvert = () => {
  const [fahToCel, setFahToCel] = useState(0);

  const execFahToCel = (val: number = 0): void => {
    setFahToCel(Math.ceil(((val - 32) * 5) / 9));
  };

  return [fahToCel, execFahToCel] as const;
};

function TempUnitConvertDemo() {
  const [fahToCel, execFahToCel] = useConvert();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = parseInt(e.currentTarget.value);
    execFahToCel(value);
  };

  return (
    <div>
      <h2>Fahrenheit to Celcius:</h2>
      <input type="number" id="fahrenheit" onChange={handleChange} />
      <h2>{fahToCel}&deg;C</h2>
    </div>
  );
}

export default TempUnitConvertDemo;
