import React, { Component } from 'react';
import './InputField.scss';
class InputField extends Component {
  constructor(props){
    super(props);
    this.value = "";
    this.state = {
      focused: false,
      value: ''
    }
  }
  static get defaultProps() {
    return {
      text: "Button",
      icon: "Your name",
      color: "Orange",
      placeholder: "Placeholder",
      type: "text"
        };
  }

  onBlur = () => {
    this.setState({ focused: false })
}
onFocus = () => {
    this.setState({ focused: true })
}

_keyInput = (e) => {
//  e.preventDefault();
  this.setState({value: e.target.value}, () => {
    this.props.onChange(this.state.value);
  });
}
  render() {
    return (
      <div className={this.state.focused ? "active InputFieldWrapper" : "InputFieldWrapper"}>
       <input type={this.props.type} className="txt" onFocus={this.onFocus} onBlur={this.onBlur} placeholder={this.props.placeholder} value={this.state.value} onChange={this._keyInput}></input>
       <div className={ "Bg"+this.props.color + " " + "icon" }>{this.props.icon}</div>
       </div>
    );
  }
}

export default InputField;
