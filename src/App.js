import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';

export class App extends Component {
  getStyle = () => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }
  }
  render() {
    return (
      <div style={this.getStyle()}>
        <Body />
      </div>
    )
  }
}

export default App
