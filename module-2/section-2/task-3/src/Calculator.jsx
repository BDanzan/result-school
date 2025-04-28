import style from './Calculator.module.css';
import { useState } from 'react';

const NUMS = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const OPERATORS = ['+', '-', '=', 'C'];

function Calculator() {
  const [display, setDisplay] = useState('');

  const setDisplayText = (text) => {
    if(text === '=') {

      if(display.includes('-')) {
        setDisplay(getCalc('-'));
        return;
      }

      if(display.includes('+')) {
        setDisplay(getCalc('+'));
        return;
      }

    }

    if(text === 'C') {
      setDisplay('');
      return;
    }
    
    if(display.length > 16) {
      alert('Максимальный допустимый размер дисплея 16 символов')
      return;
    }

    setDisplay(() => display.concat(text));
  };

  const getCalc = (operator) => {
      const array = display.split(operator);

      const num1 = Number(array[0]);
      const num2 = Number(array[1]);

      if(operator === '+') {
        return num1 + num2;
      }

      return num1 - num2;
  }
  return (
    <div className={style.calc}>
      <div className={style.calc__screen}>
        <div className={style.calc__screenInner}>{display}</div>
      </div>
      
      <div className={style.calc__keyboard}>
        <div className={style.calc__digitsPad}>
          {NUMS.map((digit) => (
            <button 
              key={digit} 
              className={style.calc__key} onClick={() => {setDisplayText(digit)}}
            >
              {digit}
            </button>
          ))}
        </div>
        
        <div className={style.calc__operatorsPad}>
          {OPERATORS.map((operator) => (
            <button 
              key={operator} 
              className={`${style.calc__key} ${style['calc__key--operator']}`} onClick={() => setDisplayText(operator)}
            >
              {operator}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator