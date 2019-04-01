import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';

class App extends React.Component {
  state = {time: '5'};

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
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
