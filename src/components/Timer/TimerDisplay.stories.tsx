import { storiesOf } from '@storybook/react';
import * as React from 'react'

import { withTests } from '../../withTests';
import { TimerDisplay } from '.'

storiesOf('TimerDisplay', module)
  .addDecorator(withTests('TimerDisplay'))
  .add('01:00', () => (<TimerDisplay countDown={60} />))
  .add('00:59', () => (<TimerDisplay countDown={59} />))
