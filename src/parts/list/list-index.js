import React, { Component } from 'react';
class ListIndex extends Component {
    constructor(props){
        super(props);
    }
  render() {
   
    return (
      <div className="ListIndex" onClick={this.props.saySomething}>
        {this.props.data.key}
      </div>
    );
  }
}

export default ListIndex;
