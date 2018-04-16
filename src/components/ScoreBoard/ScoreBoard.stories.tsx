// import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withTests } from '../../withTests'
import { ScoreBoard } from './ScoreBoard'
import { GameController } from '../../Game'

storiesOf('ScoreBoard', module)
  .addDecorator(withTests('ScoreBoard'))
  .add('Start Game', () => (<ScoreBoard game={new GameController()} />))
