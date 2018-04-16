import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { withTests } from '../../withTests';
import { Error } from './Error'

storiesOf('Error', module)
  .addDecorator(withTests('Error'))
  .add('Web Storage', () => (<Error message='This application requires Web Storage to work. Please use a compatible browser' />))
