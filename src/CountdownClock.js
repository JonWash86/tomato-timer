import React from 'react';

const runCountdown = (minutes_to_count) => {
  var seconds = 60;
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

  render(){
    return(
      <div className="clockFace">{this.props.mins}:{this.props.secs}</div>
    )
  }
};

export default CountdownClock;
