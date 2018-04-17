import * as React from 'react';

import logo from '../logo.svg';
import { TimerDisplay } from '../components/Timer';
import './App.css';
import { observer } from 'mobx-react';
import { Game } from '../app';

@observer
export class MatchPage extends React.Component<{ game: Game }, {}> {
  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <TimerDisplay countDown={this.props.game.countDown} />
      </div>
    );
  }
}
