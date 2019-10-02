import React, {Component} from 'react';
import logo from './logo.svg';
import './App2.css';

class App2 extends Component{
  constructor(){
    super();
    this.state={
      string: 'Hello Aparna Narayanan'
    }
  }
  render(){
    return (
      <div className="App2">
        <header className="App2-header">
          <img src={logo} className="App2-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={()=> this.setState({string: 'Hello Uma'})}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App2;
