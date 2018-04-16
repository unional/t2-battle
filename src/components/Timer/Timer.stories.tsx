import { storiesOf } from '@storybook/react';

import { withTests } from '../../withTests';

storiesOf('Timer', module)
  .addDecorator(withTests('Timer'))
