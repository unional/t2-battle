import { storiesOf } from '@storybook/react';

import { withTests } from '../../withTests';

storiesOf('TimerDisplay', module)
  .addDecorator(withTests('TimerDisplay'))
