import React, { Component } from 'react';
import './App.css';
import Geral from './Questions/Geral';
import { Animator } from './Animator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsSelected: false
    }
  }

  onStart = () => {
    this.setState({ questionsSelected: true });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"./images/question.png"} className="App-logo" alt="logo" />
          <h1 className="App-title">Patrick's Questions</h1>
          <h4>TIC</h4>
        </header>
        {this.state.questionsSelected === false && (
          <div className="App-intro">
            <button className="Start-button" onClick={this.onStart}>INICIAR <i className="fab fa-accessible-icon"></i></button>
          </div>
        )}
        {this.state.questionsSelected === true && (
          <Animator transition="fade" render={() => <Geral />} />
        )}
      </div>
    );
  }
}

export default App;
