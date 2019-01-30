import React, {Component} from 'react';
import {connect} from 'react-redux'
import ListIndex from './list-index';
import Btn from '../Btn/Btn';
import InputField from '../InputField/InputField';
import './list.scss';
import {addTodo,removeTodo} from '../../actions/actions'
class List extends Component {
    constructor(props) {
        super(props);
        this.inputField = React.createRef();
    }

    addTodo = () => {
      if(this.inputField.current.state.value.length > 0){
        this.props.addTodo({text: this.inputField.current.state.value});
        this.inputField.current.reset();
      }
    }
    render() {

        return (
          <div className="ListWrapper">
          <div className="ListName">
          <h1>Redux list</h1>
          </div>
            <div className="List">

                <InputField ref={this.inputField} onClick={this.addTodo} icon="New task" placeholder="Describe your task"/>
                <div class="ListItems">
                {this.props.state.todos.list.map(i => {
                        return <div key={i.key} onClick={() => this.props.removeTodo(i.key)} className="Item"> <ListIndex data={i}/> </div>
                    })}
                    </div>
            </div>
            <div className="ListSummary">
            {this.props.state.todos.list.length > 0 ? this.props.state.todos.list.length : "No"} tasks | Share | Edit
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({state: state})
const mapDispatchToProps = (dispatch) => ({
    addTodo: (input) => {
        dispatch(addTodo(input))
    },
    removeTodo: (key) => {
      dispatch(removeTodo(key))
    }

})
List = connect(mapStateToProps, mapDispatchToProps)(List)

export default List;
