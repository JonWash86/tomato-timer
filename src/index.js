import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return(<div className="clockFace">Hi Bob!</div>);
  }
}

ReactDOM.render(<App />,
  document.querySelector('#root')
);
