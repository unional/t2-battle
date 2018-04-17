import * as React from 'react';
import { observer } from 'mobx-react';

import './App.css';
import { TimerControlPanel } from '../components/Timer';
import { GameController } from '../Game';

@observer
export class RefereeApp extends React.Component<{ game: GameController }, {}> {
  public render() {
    return (
      <div className='App'>
        <TimerControlPanel timer={this.props.game} />
      </div>
    );
  }
}
