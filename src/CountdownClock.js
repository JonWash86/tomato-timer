import React from 'react';

const runCountdown = (minutes_to_count) => {
  var seconds = 60;
  // for the sake of testing this timer we're setting a default time of 25 minutes. Once we can get the tomato to count down from 25, then we'll bind it to a button press, which will then pass the 25 to the function.
  var mins = minutes_to_count;
  function tick(){
    var current_mins = mins - 1;
    // this.setState({ time: current_mins });
    seconds--;
    if (seconds > 0) {
      setTimeout (tick, 1000);
    } else {
      if (mins > 0 ){
        console.log('done!');
      }
      else if(mins > 1){
        runCountdown(mins-1);
      }
    }
  }
  tick();
}

class CountdownClock extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
      // runCountdown(this.state.timerTime);
      // var thisTime = (this.state.timerTime--);
      // this.setState({ time: thisTime});
  // }
  render(){
    return(
      <div className="clockFace">{this.props.time}</div>
    )
  }
};

export default CountdownClock;
