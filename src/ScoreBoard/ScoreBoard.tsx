import * as React from 'react'
import { observer } from 'mobx-react'

import './ScoreBoard.css'

export const ScoreBoard = observer(({ game }) => (
  <div>
    <button className='startAction' onClick={game.start.bind(game)}>Start Game</button>
    <button className='pauseAction' onClick={game.pause.bind(game)}>Pause Game</button>
  </div>
))
