// tslint:disable:jsx-no-lambda
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withTests } from '../../withTests'
import { TimerEditor } from './TimerEditor'

storiesOf('TimerEditor', module)
  .addDecorator(withTests('TimerEditor'))
  .add('01:00', () => (<TimerEditor countDown={60} setCountDown={() => { return }} />))
  .add('00:59', () => (<TimerEditor countDown={59} setCountDown={() => { return }} />))
