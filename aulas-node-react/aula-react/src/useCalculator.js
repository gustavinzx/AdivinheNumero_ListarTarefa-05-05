import { useState } from 'react';

const useCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return {
    num1,
    num2,
    result,
    setNum1,
    setNum2,
    calculate,
  };
};

export default useCalculator;
