// import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withTests } from '../../withTests'
import { TimerControlPanel } from './TimerControlPanel'
import { GameController } from '../../Game'

storiesOf('TimerControlPanel', module)
  .addDecorator(withTests('TimerControlPanel'))
  .add('New Timer', () => (<TimerControlPanel timer={new GameController()} />))
