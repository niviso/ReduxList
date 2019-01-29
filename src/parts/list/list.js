import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListIndex from './list-index';
import Btn from '../Btn/Btn';
import InputField from '../InputField/InputField';

import './list.scss';
import { addTodo } from '../../actions/actions'
class List extends Component {
    constructor(props){
        super(props);
        this.input = "";
    }

    test = (e) => {
      this.input = e;
    }

    addTodo = () => {
      this.props.addTodo({key:this.input})
    }
  render() {
   
    return (
      <div className="List">
      <div className="TwoColumn">
      <div className="Left">
      <InputField onChange={this.test} />
      </div>
      <div className="Right">
    <Btn text="Add todo" onClick={this.addTodo}/>
    </div>
    </div>
    {this.props.state.todos.list.map(i => {
        return <ListIndex data={i} key={i.key}/>
      })}
      </div>
    );
  }
}


  const mapStateToProps = (state) => ({
    whatsUp: state.say,
    state: state
  })
  const mapDispatchToProps = (dispatch) => ({
    addTodo: (input) => { dispatch(addTodo(input))}

  })
  List = connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)

export default List;
