import React from 'react';

class TimerButton extends React.Component {
  constructor(props){
    super(props);
  }

  onButtonClick(event){
    event.preventDefault();
    this.props.onSubmit();
  }

  render(){
    return( <button onClick={this.props.onClick}>{this.props.name}</button>);
  }
}

export default TimerButton;
