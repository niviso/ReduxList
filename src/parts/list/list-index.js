import React, { Component } from 'react';
import Moment from 'react-moment';
class ListIndex extends Component {
    constructor(props){
        super(props);
    }
  render() {
   
    return (
      <div className="ListIndex">
        {this.props.data.text} <i className="Date"><Moment fromNow interval={30000} date={this.props.data.key}/></i>
      </div>
    );
  }
}

export default ListIndex;
