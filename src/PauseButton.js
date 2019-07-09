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
      <div id='pauseBorder' className='buttonBorder' ><button className={this.props.className}  onClick={this.pauseTimer}>Pause</button></div>
    );
  }
};

export default PauseButton;
