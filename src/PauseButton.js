import React from 'react';

class PauseButton extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  pauseTimer = () => {
    this.props.onClick();
  }

  render(){
    return(
      <button onClick={this.pauseTimer}>Pause</button>
    );
  }
};

export default PauseButton;
