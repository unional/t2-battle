import * as t from 'assert'
import * as enzyme from 'enzyme'
import * as React from 'react'

import { TimerDisplay } from './TimerDisplay'

test('renders 01:00 for 60 seconds', () => {
  const subject = enzyme.shallow(<TimerDisplay countDown={60} />)
  t.equal(subject.find('div').at(0).text(), '01:00')
});

test('renders 00:59 for 59 seconds', () => {
  const subject = enzyme.shallow(<TimerDisplay countDown={59} />)
  t.equal(subject.find('div').at(0).text(), '00:59')
});
