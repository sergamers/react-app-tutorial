import React, { useState } from 'react';
import { Props } from './props';
import './input.scss';

export default function InputTwo(props: Props) {
  /** Изменение счетчика */
  function changeCurrent(param: '-' | '+'): void {
    const current = num + (param === '+' ? 1 : -1);

    canChange(current);
  }

  /** Проверка не выходит ли он за пределы */
  function canChange(current: number): void {
    if (current > props.max || current < props.min) {
      return
    }

    setNum(current);
  }

  /** Когда клиент поменял значение инпута */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    let current = e.target.value;

    if (Number(current) !== +current) {
      return;
    }

    canChange(+current);
  }

  const [num, setNum] = useState(props.min);

  return (
    <div className="Calc">
      <div className="Calc-btn" onClick={() => changeCurrent('-')}>-</div>
      <div className="Calc-display">
        <input type="text" value={num} onChange={handleChange} />
      </div>
      <div className="Calc-btn" onClick={() => changeCurrent('+')}>+</div>
    </div>
  );
};