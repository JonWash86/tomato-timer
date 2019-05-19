import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';
import TimerButton from './TimerButton';
import StatsZone from './StatsZone';

class App extends React.Component {
  state = {
    mins: '25',
    secs: '00',
    tickTock: null,
    poms: 0,
    shorts: 0,
    longs: 0
  };

  handleClick = (duration) => {
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

  playBeep = () => {
    var beep = new Audio('./sounds/beep.mp3');
    beep.play();
  }

  refreshTitle = (mins, secs) => {
    document.title = mins + ':' + secs
  }

  refreshStats = (duration) => {
    console.log(duration);
    if (duration == 25){
      console.log('pom!')
      this.setState({poms: this.state.poms+1})
    } else if (duration == 5){
      this.setState({shorts: this.state.shorts+1})
    } else if (duration == 10){
      this.setState({longs: this.state.longs+1})
    }
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
        else {
          this.playBeep();
          this.refreshStats(duration);
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
      <StatsZone poms={this.state.poms} shorts={this.state.shorts} longs={this.state.longs}/>
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
