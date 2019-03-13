import React, { Component } from 'react';
import './App.css';


import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text: "Hello World"
  }

  changeTextHandler = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.text.split('')];
    chars.splice(charIndex, 1);
    const text = chars.join('');
    this.setState({text: text});
  }


  render() {
    const charsArray = this.state.text.split('');
    const chars = (
      <div>
        {charsArray.map((char, index) => {
            return <Char 
                      click = {this.deleteCharHandler.bind(this, index)}
                      key = {index}
                      char = {char}/>
          })}
      </div>
    );

    return (
      <div className="App">
        <h1>List and Conditions assigment</h1>
        <input type = "text" value = {this.state.text} onChange = {this.changeTextHandler} />
        <p>{this.state.text}</p>
        <Validation 
          text = {this.state.text}/>
        {chars}
      </div>
    );
  }
}

export default App;
