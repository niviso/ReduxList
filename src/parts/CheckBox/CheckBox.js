import React, { Component } from 'react';
import './CheckBox.scss';
class CheckBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: this.props.active
    }
  }
  static get defaultProps() {

    return {
      text: "New button",
      icon: "+",
      color: "Black",
      onClick: () => {alert("Yay!")}
    };
  }

  _onClick = () => {
    this.setState((prevState) => ({
      active: !prevState.active
    }));
  }
  render() {
    return (
      <div class="test">
      <div class="Text">aa</div>
      <div className={this.state.active ? "CheckBoxWrapper Active" : "CheckBoxWrapper Deactivated"} onClick={this._onClick}>
          <div className="Icon">{this.state.active ? "✔" : "✖"}</div>
       </div>
       </div>
    );
  }
}

export default CheckBox;
