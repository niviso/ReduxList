import React, {Component} from 'react';
import InputField from '../InputField/InputField';
class ListTitle extends Component {
    constructor(props) {
        super(props);
        this.el = React.createRef();
        this.state = {
            focused: false,
            value: ''
        }
    }
    static get defaultProps() {
        return {value: "", icon: "Your name", color: "Orange", placeholder: "Placeholder", type: "text"};
    }
}

export default ListTitle;