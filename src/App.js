import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import QuestionContainer from './containers/QuestionContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionContainer/>
      </div>
    );
  }
}

export default App;
