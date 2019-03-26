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

const CountdownClock = () => {
  return(
    <div>Clock Goes here!</div>
  )
};

export default CountdownClock;
