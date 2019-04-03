import React from 'react';

class TimerButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <button>{this.props.name}</button>;
  }
}

export default TimerButton;
