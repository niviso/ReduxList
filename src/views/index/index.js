import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../../parts/list/list'
import './index.scss';
import bg from '../../resources/rain.mp4';

class Index extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
      var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 

    }
  render() {
   
    return (
      <div className="App" onClick={this.props.saySomething}>
      <video id="bgvid" playsInline autoPlay muted loop>
      <source src={bg} type="video/mp4"/>
      </video>
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
