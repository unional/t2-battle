// import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withTests } from '../../withTests'
import { TimerControlPanel } from './TimerControlPanel'
import { GameController } from '../../app'

storiesOf('TimerControlPanel', module)
  .addDecorator(withTests('TimerControlPanel'))
  .add('New timer', () => (<TimerControlPanel timer={new GameController()} />))
  .add('In Kill Zone', () => {
    const game = new GameController()
    game.countDown = 120
    return (<TimerControlPanel timer={game} />)
  })
