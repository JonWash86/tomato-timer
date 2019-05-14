import React from 'react';

const tickTock = setInterval(() => {
  if (this.state.mins > 0 && this.state.secs == 0 ){
    console.log('zero!');
    this.setState({mins: this.state.mins - 1, secs: 59});
  }
  else if (this.state.mins >= 0 && this.state.secs > 0){
    var newSec = (this.state.secs - 1);
    if (newSec < 10){
      newSec = ("0" + newSec);
    }
    this.setState({ secs: newSec});
  }
  else if (this.state.mins === 0 && this.state.secs ===0){
    clearInterval(tickTock);
  }
  // else {
    //
    // }
  }, 1000);




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
