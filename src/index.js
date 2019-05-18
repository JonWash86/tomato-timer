import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';
import TimerButton from './TimerButton';


class App extends React.Component {
  state = {mins: '25', secs: '00', on: null, tickTock: null};

  // this function automatically displays the current time on an interval, mainly added to test displaying a timecode on the tomato.
  componentDidMount() {
    // this.setState({ mins: (this.state.mins - 1), secs:'19' });
    //
    // this.runTimer();
  }

  Bipp(){
    console.log('a rooty ');
  };


  handleClick = (duration) => {
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

  runTimer = (duration) => {
    this.setState({on: 'yes'});

    this.setState({mins: duration, secs: '00'});

    // clearInterval(tickTock);
    this.setState({
      tickTock: setInterval(() => {
        if (this.state.mins > 0 && this.state.secs == 0 ){
          this.setState({mins: this.state.mins - 1, secs: 59});
        }
        else if (this.state.mins >= 0 && this.state.secs > 0){
          var newSec = (this.state.secs - 1);
          if (newSec < 10){
            newSec = ("0" + newSec);
          }
          this.setState({ secs: newSec});
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
      <TimerButton duration ={'25'} name="Start" onClick={this.handleClick}/>
      <TimerButton name="Pomodoro" duration ={'25'} onClick={this.handleClick}/>
      <TimerButton name="Short Break" duration ={'5'} onClick={this.handleClick} />
      </div>
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
