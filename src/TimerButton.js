import React from 'react';
import classnames from 'classnames';

class TimerButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {active: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({active: true});
    this.props.onClick(this.props.duration, this.props.name);
    console.log(this.props.name);
  }

  render(){
    return( <div className='buttonBorder' ><button className={this.props.className}  id={this.props.name} onClick={this.handleClick}>{this.props.name}</button></div>);
  }
}

export default TimerButton;
