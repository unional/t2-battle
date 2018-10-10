import { Input } from 'antd'
import * as React from 'react';
import { observer } from 'mobx-react';

import './App.css';
import { TimerControlPanel } from '../components/Timer';
import { GameController } from '../app';

@observer
export class RefereePage extends React.Component<{ game: GameController }, {}> {
  public render() {
    return (
      <div className='RefereeApp'>
        <label>Player 1:</label>
        <Input>{this.props.game.player1}</Input>
        <label>Player 2:</label>
        <Input>{this.props.game.player2}</Input>
        <TimerControlPanel timer={this.props.game} />
      </div>
    );
  }
}
