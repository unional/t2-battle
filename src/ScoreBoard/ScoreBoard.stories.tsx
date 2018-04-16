// import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withTests } from '../withTests'
import { ScoreBoard } from './ScoreBoard'
import { Game } from '../game';

storiesOf('ScoreBoard', module)
  .addDecorator(withTests('ScoreBoard'))
  .add('Start Game', () => (<ScoreBoard game={new Game()} />))
  .add('Jest results', () => (<div>Jest results in storybook</div>))
