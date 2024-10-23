'use client'
import React, { useState, useMemo } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState(72);
  const [height, setHeight] = useState(186);

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const bmi = useMemo(() => calculateBMI(weight, height), [weight, height]);

  return (
    <div className="container">
      <h2 className="title">BMI CALCULATOR</h2>
      <div>
        <label className="label" htmlFor="weight">Kilo: {weight} kg</label>
        <input
          className="range-input"
          type="range"
          id="weight"
          min="40"
          max="150"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <div>
        <label className="label" htmlFor="height">Boy: {height} cm</label>
        <input
          className="range-input"
          type="range"
          id="height"
          min="140"
          max="210"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <div className="bmi-output">BMI: {bmi}</div>
    </div>
  );
};

const App = () => {
  return <BMICalculator />;
};

export default App;
