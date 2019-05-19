import React from 'react';

// class StatsZone extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   render(){
//     return(<div className="statsZone">Time-mater
//     Pomodoros:
//     Short Breaks:
//     Long Breaks:
//     </div>);
//   }
// }

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
