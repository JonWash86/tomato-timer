import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';


class App extends React.Component {
  state = {mins: '2', secs: '00'};

  // this function automatically displays the current time on an interval, mainly added to test displaying a timecode on the tomato.
  componentDidMount() {
    this.runTimer();
  }

  runTimer = () => {
    var tickTock = setInterval(() => {
      if (this.state.mins > 0 && this.state.secs === 0 ){
        this.setState({mins: this.state.mins - 1, secs: 59})
      }
      else if (this.state.mins >= 0 && this.state.secs > 0){
        var newSec = (this.state.secs - 1);
        if (newSec < 10){
          newSec = ("0" + newSec);
        }
        this.setState({ secs: newSec});
      }
      if (this.state.mins === 0 && this.state.secs ===0){
        clearInterval(tickTock);
      }
      else {

      }
    }, 1000)
    this.setState({ mins: (this.state.mins - 1), secs:'19' });
  }

  render(){

    return(
  <CountdownClock mins={this.state.mins} secs={this.state.secs}/>);
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
