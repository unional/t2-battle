import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Timer from './Timer';

test('renders 1:00 for 60 seconds', () => {
  const tree = renderer.create(<Timer seconds={60} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders 0:59 for 59 seconds', () => {
  const tree = renderer.create(<Timer seconds={59} />).toJSON();
  expect(tree).toMatchSnapshot();
});
