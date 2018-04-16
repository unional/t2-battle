import * as React from 'react';

import { storiesOf, action } from '@storybook/react';

import { withTests } from '../../withTests';
import { Button } from './Button'

storiesOf('Button', module)
  .addDecorator(withTests('Button'))
  .add('basic', () => (<Button onClick={action('click')}>label</Button>))
