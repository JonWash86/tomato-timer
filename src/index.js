import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';
import TimerButton from './TimerButton';
import StatsZone from './StatsZone';


class App extends React.Component {
  state = {mins: '25', secs: '00', tickTock: null};

  componentDidMount() {
    // this.setState({ mins: (this.state.mins - 1), secs:'19' });
    //
    // this.runTimer();
  }


  handleClick = (duration) => {
    document.title = "New title!";
    console.log(duration);
    if(!this.state.tickTock){
      this.runTimer(duration);
    }
    else{
      clearInterval(this.state.tickTock);
      this.runTimer(duration);
    };
  }

  stopTimer = () => {

  }

  refreshTitle = (mins, secs) => {
    document.title = mins + ":" + secs
  }

  runTimer = (duration) => {
    this.setState({mins: duration, secs: '00', tickTock:
    setInterval(() => {
        if (this.state.mins > 0 && this.state.secs == 0 ){
          this.setState({mins: this.state.mins - 1, secs: 59});
          this.refreshTitle(this.state.mins, this.state.secs);
        }
        else if (this.state.mins >= 0 && this.state.secs > 0){
          var newSec = (this.state.secs - 1);
          if (newSec < 10){
            newSec = ("0" + newSec);
          }
          this.setState({ secs: newSec});
          this.refreshTitle(this.state.mins, this.state.secs);
        }
        else if (this.state.mins === 0 && this.state.secs ===0){
          clearInterval(this.state.tickTock);
        }
      }, 1000)
    })
  }

  render(){
    return(<div>
      <div>
      <CountdownClock  mins={this.state.mins} secs={this.state.secs} />
      </div>
      <div className="controlPanel">
      <TimerButton name="Pomodoro" duration ={'25'} onClick={this.handleClick}/>
      <TimerButton name="Short Break" duration ={'5'} onClick={this.handleClick} />
      <TimerButton name="Long Break" duration ={'10'} onClick={this.handleClick} />
      </div>
      <StatsZone />
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
