import React, {Component} from 'react';
import './InputField.scss';
class InputField extends Component {
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

    componentDidMount(){
      this.setState({value: this.props.value});
    }

    onBlur = () => {
        this.setState({focused: false})
    }
    onFocus = () => {
        this.setState({focused: true})
    }
    reset = () => {
      this.setState({value: ''});
      this.el.current.focus();
    }
    

    _onChange = (e) => {
        this.setState({
            value: e.target.value
        }, () => {
          if(this.props.onChange){
            this
                .props
                .onChange(this.state.value);
          }
        });
    }
    _keyInput = (e) => {
      if(e.key == "Enter"){
        this.props.onClick();
      }
    }
    render() {
        return (
            <div
                className={this.state.focused
                ? "active InputFieldWrapper"
                : "InputFieldWrapper"}>
                <input
                    type={this.props.type}
                    className="txt"
                    ref={this.el}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this._onChange}
                    onKeyUp={this._keyInput}
                    ></input>
                <div className={"Bg" + this.props.color + " icon"}>{this.props.icon}</div>
            </div>
        );
    }
}

export default InputField;
