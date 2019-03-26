import React from 'react';
import ReactDOM from 'react-dom';
import CountdownClock from './CountdownClock';

class App extends React.Component {
  state = {time: ''};

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    }, 1000)
  }

  render(){
    return(
  <CountdownClock />);
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
