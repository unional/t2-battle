import * as React from 'react';

import './App.css';
import { Timer } from './Timer/Timer';
// import { ScoreBoard } from './ScoreBoard/ScoreBoard';
import { Error } from './Error'

export class RefereeApp extends React.Component {
  public render() {
    if (!window.sessionStorage) {
      return (<Error message='This application requires Web Storage to work. Please use a compatible browser' />)
    }

    return (
      <div className='RefereeApp'>
        <Timer countDown={100} />
      </div>
    );
  }
}
