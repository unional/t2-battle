import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withTests } from '@storybook/addon-jest';
import { Button, Welcome } from '@storybook/react/demo';

import results from '../.jest-test-results.json';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Timer', module)
  .addDecorator(withTests({ results, filesExt: '((\\.spec)|(\\.test))\\.tsx?$' })('Timer'))
  .add('Jest results', () => (<div>Jest results in storybook</div>))
