import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';

class App extends React.Component {
  state = {mins: '2', secs: '00'};

  // this function automatically displays the current time on an interval, mainly added to test displaying a timecode on the tomato.
  componentDidMount() {

    this.setState({ mins: (this.state.mins - 1), secs:'09' });
    var tickTock = setInterval(() => {
      if (this.state.mins >= 0 && this.state.secs > 0){
        this.setState({ secs: (this.state.secs - 1)});
      }
      if (this.state.mins === 0 && this.state.secs ===0){

        clearInterval(tickTock);
      }
    }, 1000)
  }

  render(){
    return(
  <CountdownClock mins={this.state.mins} secs={this.state.secs}/>);
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
