import React from 'react';
import { Props, States } from './props';
import './input.scss';

export default class InputOne extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      current: props.min
    };
  }

  /** Изменение счетчика */
  public changeCurrent(param: '-' | '+'): void {
    const current = this.state.current + (param === '+' ? 1 : -1);

    if (current > this.props.max || current < this.props.min) {
      return
    }

    this.setState({
      ...this.setState,
      current
    });
  }

  render() {
    return (
      <div className="Calc">
        <div className="Calc-btn" onClick={() => this.changeCurrent('-')}>-</div>
        <div className="Calc-display"> {this.state.current} </div>
        <div className="Calc-btn" onClick={() => this.changeCurrent('+')}>+</div>
      </div>
    )
  }
}