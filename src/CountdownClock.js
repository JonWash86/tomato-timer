import React from 'react';

const runCountdown = (minutes_to_count) => {
  var seconds = 60;
  // for the sake of testing this timer we're setting a default time of 25 minutes. Once we can get the tomato to count down from 25, then we'll bind it to a button press, which will then pass the 25 to the function.
  var mins = 25;
  function tick(){
    var current_mins = mins - 1;
    seconds--;
    if (seconds > 0) {
      setTimeout (tick, 1000);
    } else {
      if(mins > 1){
        runCountdown(mins-1);
      }
    }
  }
}

class CountdownClock extends React.Component {
  state = {timerTime: 250};

  componentDidMount(){
    setInterval(() => {
      var thisTime = (this.state.timerTime--);
      this.setState({ time: thisTime})
    }, 1000)
  }
  render(){
    return(
      <div>{this.state.timerTime}</div>
    )
  }
};

export default CountdownClock;
