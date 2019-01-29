import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../../parts/list/list'
import './index.scss';
class Index extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
  render() {
   
    return (
      <div className="App" onClick={this.props.saySomething}>
    <List/>
      </div>
    );
  }
}


  const mapStateToProps = (state) => ({
    whatsUp: state.say,
    state: state
  })
  Index = connect(
    mapStateToProps
  )(Index)

export default Index;
