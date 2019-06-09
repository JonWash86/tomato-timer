import React from 'react';
import classnames from 'classnames';

class TimerButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {active: false};
  }

  handleClick = () => {
    this.setState({active: true});
    this.props.onClick(this.props.duration, this.props.name);
  }

  render(){
    let classes = classnames('timerButton', {active: this.state.active});
    return( <div className="buttonBorder"><button className={classes}  id={this.props.name} onClick={this.handleClick}>{this.props.name}</button></div>);
  }
}

export default TimerButton;
