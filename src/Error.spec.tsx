import * as React from 'react'
import * as enzyme from 'enzyme'
import * as t from 'assert'

import { Error } from './Error'

test('display message', () => {
  const actual = enzyme.shallow(<Error message='abc' />)
  t.equal(actual.find('div').text(), 'abc')
})
