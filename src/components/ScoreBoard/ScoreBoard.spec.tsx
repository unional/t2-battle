import * as enzyme from 'enzyme'
import * as React from 'react'

import { ScoreBoard } from './ScoreBoard'
import { GameController } from '../../Game'
import { Button } from '../Button';

test('Invoke start game', () => {
  const game = new GameController()
  const scoreBoard = enzyme.shallow(<ScoreBoard game={game} />)

  scoreBoard.find(Button).at(0).simulate('click')

  expect(game.running).toBe(true)
});
