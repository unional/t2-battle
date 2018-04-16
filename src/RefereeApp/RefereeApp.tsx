import * as React from 'react';
import { observer } from 'mobx-react';

import './App.css';
import { Timer } from '../components/Timer';
import { ScoreBoard } from '../components/ScoreBoard';
import { GameController } from '../Game';

@observer
export class RefereeApp extends React.Component<{ game: GameController }, {}> {
  public render() {
    return (
      <div className='App'>
        <Timer countDown={this.props.game.countDown} />
        <ScoreBoard game={this.props.game} />
      </div>
    );
  }
}
