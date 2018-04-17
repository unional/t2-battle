import { autorun } from 'mobx'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RefereePage } from './RefereePage'
import { GameController } from './app';

/**
 * This is the "main" logic of referee application.
 */
export function startRefereeApp() {
  const game = loadGame()

  autorun(() => {
    localStorage.setItem('game/countDown', game.countDown.toString())
    localStorage.setItem('game/running', game.running.toString())
  })
  ReactDOM.render(
    <RefereePage game={game} />,
    document.getElementById('root') as HTMLElement
  );
}

function loadGame() {
  const game = new GameController()
  game.countDown = parseInt(localStorage.getItem('game/countDown') || '0', 10)
  return game
}
