import { observer } from 'mobx-react'
import * as React from 'react'

import { Game } from '../app'
import { TimerDisplay } from '../components/Timer'
import './App.css'

@observer
export class MatchPage extends React.Component<{ game: Game }, {}> {
  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Accounting & Tax Org</h1>
          <h1 className='App-title'>Ping Pong Exhibition Tournament</h1>
        </header>
        <div className='Player-title'>
          {/* Joe vs Jonah */}
          {/* Dandy vs Natalie */}
          Joel vs Abdoulaye
        </div>
        <TimerDisplay countDown={this.props.game.countDown} />
        <div>
          <div className='Player-title'>
            Team Result
        </div >
          <div className='Player-title'>
            4 vs 14
        </div >
        </div>
      </div >
    );
  }
}
