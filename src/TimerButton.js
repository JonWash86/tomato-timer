import React from 'react';

class TimerButton extends React.Component {
  constructor(props){
    super(props);
  }

  fart(){
    console.log('toot toot!')
  };

  render(){
    return( <button onClick={this.fart}>{this.props.name}</button>);
  }
}

export default TimerButton;
