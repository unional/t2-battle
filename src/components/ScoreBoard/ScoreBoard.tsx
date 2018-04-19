import * as React from 'react'
import { observer } from 'mobx-react'

import './ScoreBoard.css'
import { Button } from '../Button'
import { GameController } from '../../app';

export const ScoreBoard = observer(({ game }: { game: GameController }) => (
  <div>
    <Button disabled={game.running} onClick={game.start.bind(game)}>{'Start Game'}</Button>
    <Button disabled={!game.running} onClick={game.pause.bind(game)}>{'Pause Game'}</Button>
    <Button disabled={game.running} onClick={game.reset.bind(game)}>{'Reset Game'}</Button>
  </div>
))
