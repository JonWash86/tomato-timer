import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';

class App extends React.Component {
  state = {time: '5'};

  // this function automatically displays the current time on an interval, mainly added to test displaying a timecode on the tomato.
  componentDidMount() {
    var tickTock = setInterval(() => {
      this.setState({ time: (this.state.time - 1) });
      if (this.state.time === 0){
        clearInterval(tickTock);
      }
    }, 1000)
  }

  render(){
    return(
  <CountdownClock time={this.state.time}/>);
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
