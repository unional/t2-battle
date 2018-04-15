import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Timer from './Timer';
import { Error } from './Error'

class App extends React.Component {
  public render() {
    if (!window.sessionStorage) {
      return (<Error message='This application requires Web Storage to work. Please use a compatible browser'/>)
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <Timer seconds={100} />
      </div>
    );
  }
}

export default App;
