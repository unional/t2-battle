import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { withTests } from '../withTests';

storiesOf('Timer', module)
  .addDecorator(withTests('Timer'))
  .add('Jest results', () => (<div>Jest results in storybook</div>))
