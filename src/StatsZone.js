import React from 'react';

const StatsZone = (props) => {
  return(
    <div className="statsZone"><h1 id="title">Time-'Mater</h1> <hr/>
      Pomodoros: {props.poms} <br/>
      Short Breaks: {props.shorts} <br/>
      Long Breaks: {props.longs} <br/>
    </div>
  )
}

export default StatsZone;
