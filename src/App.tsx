import React from 'react';
import './App.css';
function App() {
  const [firstNumber, setFirstNumber] = React.useState(0);
  const [secondNumber, setSecondNumber] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [operator, setOperator] = React.useState('+');

  const handleFirstNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNumber(Number(event.target.value));
  };

  const handleSecondNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondNumber(Number(event.target.value));
  };

  
  const computeResult = () => {
    if (operator === '+') setResult(firstNumber + secondNumber);
    if (operator === '-') setResult(firstNumber - secondNumber);
    if (operator === '*') setResult(firstNumber * secondNumber);
    if (operator === '/') setResult(firstNumber / secondNumber);
  };

  const changeOperator = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOperator(event.target.value);
  };
  return (
    <div className="App">
      <h2>Wyatt's Awesome Calculator</h2>
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
    </div>
  );
}

export default App;
