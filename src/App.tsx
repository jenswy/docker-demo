import React from 'react';
import './App.css';
function App() {
  const [firstNumber, setFirstNumber] = React.useState(NaN);
  const [secondNumber, setSecondNumber] = React.useState(NaN);
  const [result, setResult] = React.useState(0);
  const [error, setError] = React.useState('');
  const [operator, setOperator] = React.useState('+');

  const handleFirstNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNumber(Number(event.target.value));
  };

  const handleSecondNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondNumber(Number(event.target.value));
  };

  
  const computeResult = () => {
    console.log('firstNumber', firstNumber);
    console.log('secondNumber', secondNumber);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      setResult(NaN);
      setError('Please enter a valid number in both fields');
      return;
    }
    if (operator === '+') setResult(firstNumber + secondNumber);
    if (operator === '-') setResult(firstNumber - secondNumber);
    if (operator === '*') setResult(firstNumber * secondNumber);
    if (operator === '/') {
      if(secondNumber === 0) {
        setResult(NaN);
        setError('Cannot divide by zero');
      } else {
        setResult(firstNumber / secondNumber);

      } 
    };
  };

  const changeOperator = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOperator(event.target.value);
  };
  return (
    <div className="App">
      <h2 className="header">Wyatt's Awesome Calculator</h2>
      <header className="App-header">
        
        <input placeholder="first number" onChange={handleFirstNumberChange}></input>
        <select value={operator} onChange={changeOperator}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input placeholder="second number" onChange={handleSecondNumberChange}></input>
        <button onClick={computeResult}> =</button>
        <input placeholder="result" readOnly value={result}></input>
        
        

      </header>
      <div className='errorDiv'>
          <p className='error'>{error}</p>
        </div>
    </div>
  );
}

export default App;
