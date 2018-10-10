// tslint:disable:jsx-no-lambda
import * as t from 'assert'
import * as enzyme from 'enzyme'
import * as React from 'react'

import { TimerEditor } from './TimerEditor'

test.skip('renders 01:00 for 60 seconds', () => {
  const setCountDown = (value) => t.equal(value, 240)
  const subject = enzyme.shallow(<TimerEditor countDown={60} setCountDown={setCountDown} />)
  subject.find('.ant-input-number-input').at(0).simulate('change', 4)
});

test.skip('renders 00:59 for 59 seconds', () => {
  const subject = enzyme.shallow(<TimerEditor countDown={59} setCountDown={() => ({})} />)
  t.equal(subject.find('.ant-input-number').at(1).text(), '59')
});
