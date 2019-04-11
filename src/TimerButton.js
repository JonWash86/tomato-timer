import React from 'react';

class TimerButton extends React.Component {
  constructor(props){
    super(props);
  }

  onButtonClick(event, duration){
    event.preventDefault();

    this.props.onSubmit(duration);
  }

  render(){
    return( <button onClick={() => this.props.onClick(this.props.duration)}>{this.props.name}</button>);
  }
}

export default TimerButton;
