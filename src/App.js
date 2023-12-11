import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  // State containing information about the person
  state = {
    person: {
      fullName: 'ANA',
      bio: 'blabla bla blabla, bla bla bhjozhmt.',
      imgSrc: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e',
      profession: 'Developer'
    },
    show: false,         //boolean shows
    timeInterval: 0      //  field that shows the time interval since the last component was mounted
  };

  // Function that toggles the show state when the button is clicked
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  renderPersonProfile = () => {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div className="person-profile">
        <h2>{fullName}</h2>
        <p>{bio}</p>
        <img src={imgSrc} alt="Person" />
        <p>{profession}</p>
      </div>
    );
  };

  // Lifecycle method: componentDidMount
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="body">
        <div className="container">
          <button onClick={this.toggleShow}>Toggle Show</button>
          {this.state.show && this.renderPersonProfile()}
          <p className="time-interval">Time Interval: {this.state.timeInterval} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;