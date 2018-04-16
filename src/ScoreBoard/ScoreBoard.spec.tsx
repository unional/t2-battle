import * as enzyme from 'enzyme'
import * as React from 'react'

import { ScoreBoard } from './ScoreBoard'
import { Game } from '../game'

test('Invoke start game', () => {
  const game = new Game()
  const actual = enzyme.shallow(<ScoreBoard game={game} />)
  actual.find('.startAction').simulate('click')

  expect(game.running).toBe(true)
});
