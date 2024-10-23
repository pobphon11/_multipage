import React, { useState } from 'react';
import './Calculator.css'; // นำ CSS มาจัดสไตล์แยกต่างหาก

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [prevResult, setPrevResult] = useState('');
  const [lastOperator, setLastOperator] = useState(false);

  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  const add = (num) => {
    setCurrentNumber((prev) => (prev === '0' ? num : prev + num));
    setLastOperator(false);
  };

  const addOperator = (op) => {
    if (currentNumber !== '') {
      setLastNumber(currentNumber);
      setCurrentNumber('');
      setOperator(op);
    } else if (lastOperator) {
      setLastNumber(prevResult);
    }
    setOperator(op);
    setLastOperator(false);
  };

  const calculate = () => {
    let result;
    const num1 = parseFloat(lastNumber);
    const num2 = parseFloat(currentNumber || lastNumber);

    if (operator && operations[operator]) {
      result = operations[operator](num1, num2);
      setPrevResult(result);
      setCurrentNumber(result.toString());
    }
    setLastOperator(true);
  };

  const clearAll = () => {
    setCurrentNumber('');
    setLastNumber('');
    setOperator('');
    setPrevResult('');
    setLastOperator(false);
  };

  return (
    <div className="container">
      <div className="cal-sty">
        <input
          type="text"
          className="sty-result"
          value={currentNumber || prevResult || '0'}
          readOnly
        />
        <div className="content">
          <div className="left-panel">
            <button onClick={clearAll} id="CE">CE</button>
            <button onClick={() => addOperator('+')}>+</button>
            <button onClick={() => addOperator('-')}>-</button>
            <button onClick={calculate}>=</button>
          </div>
          <div className="right-panel">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
              <button key={num} onClick={() => add(num)}>
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
