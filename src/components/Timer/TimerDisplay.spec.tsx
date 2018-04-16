import * as React from 'react';
import * as renderer from 'react-test-renderer'

import { TimerDisplay } from './TimerDisplay'

test('renders 1:00 for 60 seconds', () => {
  const tree = renderer.create(<TimerDisplay countDown={60} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders 0:59 for 59 seconds', () => {
  const tree = renderer.create(<TimerDisplay countDown={59} />).toJSON();
  expect(tree).toMatchSnapshot();
});
