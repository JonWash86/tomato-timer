import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {time: ''};

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    }, 1000)
  }

  render(){
    return(<div className="clockFace">25:00 {this.state.time}</div>);
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
