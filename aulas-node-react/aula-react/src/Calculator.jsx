import React from 'react';
import './Calculator.css';
import useCalculator from './useCalculator';

const Calculator = () => {
  const {
    num1,
    num2,
    result,
    setNum1,
    setNum2,
    calculate,
  } = useCalculator();

  return (
    <div className="calculator">
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Digite o primeiro número"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Digite o segundo número"
      />
      <button onClick={calculate}>Somar</button>
      <p>Resultado: {result}</p>
    </div>
  );
};

export default Calculator;
