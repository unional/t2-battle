import * as React from 'react'
import { observer } from 'mobx-react'

import './TimerControlPanel.css'
import { Button } from '../Button'
import { GameController } from '../../Game';
import { TimerDisplay } from './TimerDisplay'

export const TimerControlPanel = observer(({ game }: { game: GameController }) => (
  <div className='TimerControlPanel'>
    <TimerDisplay countDown={game.countDown} />
    <Button hidden={game.running} onClick={game.start.bind(game)}>{'Start Game'}</Button>
    <Button hidden={!game.running} onClick={game.pause.bind(game)}>{'Pause Game'}</Button>
    <Button hidden={game.running} onClick={game.reset.bind(game)}>{'Reset Game'}</Button>
  </div>
))
