import { autorun } from 'mobx'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RefereeApp } from './RefereeApp'
import { GameController } from '../Game';

export function startRefereeApp() {
  // TODO: get from localStorage instead of resetting on page load.
  const game = new GameController(15 * 60)
  autorun(() => {
    localStorage.setItem('game/countDown', game.countDown.toString())
    localStorage.setItem('game/running', game.running.toString())
  })
  ReactDOM.render(
    <RefereeApp game={game} />,
    document.getElementById('root') as HTMLElement
  );
}
