import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }

  return (
    <div>
      <center className='center'>
        <h1>Calculator</h1><hr/>
        <input type='text' name='input' value={input} onChange={handler}/> <br/>
        <button onClick={() => setResult(eval(input))}>Calculate</button> <br/>
        <h4>Result is : {result}</h4>
        <button onClick={() => setInput(input+'1')}>1</button>
        <button onClick={() => setInput(input+'2')}>2</button>
        <button onClick={() => setInput(input+'3')}>3</button><br/>
        <button onClick={() => setInput(input+'4')}>4</button>
        <button onClick={() => setInput(input+'5')}>5</button>
        <button onClick={() => setInput(input+'6')}>6</button><br/>
        <button onClick={() => setInput(input+'7')}>7</button>
        <button onClick={() => setInput(input+'8')}>8</button>
        <button onClick={() => setInput(input+'9')}>9</button><br/>
        <button onClick={() => setInput(input+'+')}>+</button>
        <button onClick={() => setInput(input+'-')}>-</button>
        <button onClick={() => setInput(input+'*')}>*</button>
        <button onClick={() => setInput(input+'/')}>/</button><br/>
        <button onClick={() => setInput('')}>clear</button><br />
      </center><br />

    </div>
  )
}

export default App;
