import * as React from 'react'
import * as enzyme from 'enzyme'
import t from 'assert'

import { Error } from './Error'

test('display message', () => {
  const actual = enzyme.shallow(<Error message='abc' />)
  t.equal(actual.find('Error').text(), 'abc')
})
