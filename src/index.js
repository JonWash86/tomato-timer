import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';
import TimerButton from './TimerButton';


class App extends React.Component {
  state = {mins: '25', secs: '00', on: null};

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
    if(!this.state.on){
      console.log('the click has not been clicked');
      this.runTimer(duration);
    }
    else{
      // clearInterval(tickTock)
    };
  }

  stopTimer = () => {

  }

  runTimer = (duration) => {
    this.setState({on: 'yes'});

    this.setState({mins: duration, secs: '00'});

    // clearInterval(tickTock);
    const tickTock = setInterval(() => {
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
        clearInterval(tickTock);
      }
      }, 1000);
  }




  render(){
    return(<div>
      <CountdownClock  mins={this.state.mins} secs={this.state.secs} />
      <TimerButton duration ={'25'} name="Start" onClick={this.handleClick}/>
      <TimerButton name="Pomodoro" duration ={'25'} onClick={this.handleClick}/>
      <TimerButton name="Short Break" duration ={'5'} onClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
