
import * as localStorage from 'mobx-localstorage'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Game } from './app';
import { MatchPage } from './MatchPage'

export function startMatchApp() {
  const game = new Game()
  updateGame(game)
  addEventListener('storage', () => {
    updateGame(game)
  })

  ReactDOM.render(
    <MatchPage game={game} />,
    document.getElementById('root') as HTMLElement
  );
}

function updateGame(game: Game) {
  game.countDown = parseInt(localStorage.getItem('game/countDown') || '0', 10)
  game.running = localStorage.getItem('game/running') === 'true'
}
