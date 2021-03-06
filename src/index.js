import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import CountdownClock from './CountdownClock';
import TimerButton from './TimerButton';
import PauseButton from './PauseButton';
import StatsZone from './StatsZone';

class App extends React.Component {
  state = {
    mins: '25',
    secs: '00',
    tickTock: null,
    poms: 0,
    shorts: 0,
    longs: 0,
    paused: false
  };

  handleClick = (duration, name) => {
    this.highlightActiveButton(duration);
    if(!this.state.tickTock){
      this.runTimer(duration, "00", name);
    }
    else{
      clearInterval(this.state.tickTock);
      this.runTimer(duration, "00", name);
    };
  }

  highlightActiveButton = (duration) => {
    let allButts = document.getElementsByClassName('timerButton');
    let allBords = document.getElementsByClassName('buttonBorder');
    console.log(allButts);

    for (var i = 0; i < allButts.length; i++){
      allButts[i].classList.remove('active');
      allBords[i].classList.remove('bordered');
    }

    if (duration == 25){
      allButts[0].classList.add('active');
      allBords[0].classList.add('bordered');

    } else if (duration == 5){
      allButts[1].classList.add('active');      allBords[1].classList.add('bordered');

    } else if (duration == 10){
      allButts[2].classList.add('active');      allBords[2].classList.add('bordered');
    }
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
      this.setState({poms: this.state.poms+1})
    } else if (duration == 5){
      this.setState({shorts: this.state.shorts+1})
    } else if (duration == 10){
      this.setState({longs: this.state.longs+1})
    }
  }

  runTimer = (duration, secs, name) => {
    this.setState({mins: duration, secs: secs, paused: false, tickTock:
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

  pauseTimer = () => {
    let pauseButton = document.getElementsByClassName('pauseButton');
    let pauseBorder = document.getElementById('pauseBorder');
    console.log(pauseBorder);

    if (this.state.paused === false){
      pauseButton[0].classList.add('active');
      pauseBorder[0].classList.add('bordered');
      this.setState({paused: true});
      clearInterval(this.state.tickTock);
    }
    else {
      this.setState({paused: false});
      this.runTimer(this.state.mins, this.state.secs);
      pauseButton[0].classList.remove('active');
      pauseBorder[0].classList.remove('bordered');
    }
  }

  render(){
    return(<div>
      <div>
      <CountdownClock  mins={this.state.mins} secs={this.state.secs} />
      </div>
      <div className="controlPanel">
      <TimerButton className={`timerButton`} name="Pomodoro" duration ={'25'} onClick={this.handleClick}/>
      <TimerButton className={`timerButton`} name="Short Break" duration ={'5'} onClick={this.handleClick} />
      <TimerButton className={`timerButton`} name="Long Break" duration ={'10'} onClick={this.handleClick} /><br />
      <PauseButton className={`pauseButton timerButton`} onClick={this.pauseTimer}/>
      </div>
      <StatsZone poms={this.state.poms} shorts={this.state.shorts} longs={this.state.longs}/>
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
