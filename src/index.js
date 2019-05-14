import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';
import TimerButton from './TimerButton';


class App extends React.Component {
  state = {mins: '25', secs: '00'};

  // this function automatically displays the current time on an interval, mainly added to test displaying a timecode on the tomato.
  componentDidMount() {
    // this.setState({ mins: (this.state.mins - 1), secs:'19' });
    //
    // this.runTimer();
  }

  Bipp(){
    console.log('a rooty ');
  };

  runTimer = (duration) => {
    this.setState({mins: duration, secs: '00'});
    // $(':button').on('click', clearInterval(tickTock));
  }


  render(){
    return(<div>
      <CountdownClock  mins={this.state.mins} secs={this.state.secs} />
      <TimerButton duration ={'25'} name="Start" onClick={this.runTimer}/>
      <TimerButton name="Pomodoro" duration ={'25'} onClick={this.runTimer}/>
      <TimerButton name="Short Break"duration ={'5'} onClick={this.runTimer} />
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
