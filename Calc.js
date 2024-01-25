import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";    
import 'bootstrap/dist/css/bootstrap.min.css';
function Calc() {
    const [input,setInput]=useState("") 
    const numberClick = (number) => {
      setInput((prevInput) => prevInput + number);      
    };
    const operatorClick = (operator) => {
      setInput((prevInput) => prevInput + operator);
    };
    const clear=()=>{
        setInput("");
    }
    const backspace=()=>{
        setInput(input.slice(0,-1))
    }
    const result = () => {
    const options = input.split(/([+\-*/])/);   
    let currentOperator = '+';
    let currentResult = 0;
  
   options.forEach((parts) => {
      if (!isNaN(parseFloat(parts))) {
        switch (currentOperator) {
          case '+':
            currentResult += parseFloat(parts);
            break;
          case '-':
            currentResult -= parseFloat(parts);
            break;
          case '*':
            currentResult *= parseFloat(parts);
            break;
          case '/':
            currentResult /= parseFloat(parts);
            break;
          default:
            break;
        }
      }
  
      if (['+', '-', '*', '/'].includes(parts)) {
        currentOperator = parts;    
      }
    });
  
    setInput(currentResult.toString());   
  };
  return (
    <div>

    <div className='calc_background'>
      <div className='container'>
          <h1 className='title'>CALCULATOR</h1>
            <form>
            <input type="text" value={input}  placeholder='0' onChange={(e) => setInput(e.target.value)} readOnly></input>
            </form>
      <div className='keypad'>
      <button className="highlight" onClick={clear} id="AC"> AC</button> 
      <button className="highlight" onClick={backspace} id="backspace"><i class="bi bi-backspace"></i></button>
      <button className="highlight"  onClick={() => operatorClick('/')}>&#247;</button>
      <button onClick={() => numberClick('7')}>7</button>
      <button onClick={() => numberClick('8')}>8</button>
      <button onClick={() => numberClick('9')}>9</button>
      <button className="highlight"  onClick={() => operatorClick('*')}>&times;</button> 
      <button onClick={() => numberClick('4')}>4</button>
      <button onClick={() => numberClick('5')}>5</button>
      <button onClick={() => numberClick('6')}>6</button>
      <button className="highlight"  onClick={() => operatorClick('-')}>-</button>
      <button onClick={() => numberClick('1')} >1</button>
      <button onClick={() => numberClick('2')}>2</button>
      <button onClick={() => numberClick('3')}>3</button>
      <button className="highlight"  onClick={() => operatorClick('+')}>+</button>
      <button onClick={() => numberClick('0')}>0</button>
      <button onClick={() => numberClick('.')}>.</button>
      <button onClick={result}className="highlight" id="result" >=</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Calc