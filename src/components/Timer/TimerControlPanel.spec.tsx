import * as enzyme from 'enzyme'
import * as React from 'react'

import { TimerControlPanel } from './TimerControlPanel'
import { GameController } from '../../Game'
import { Button } from '../Button';

test('Invoke start game', () => {
  const game = new GameController()
  const timerControl = enzyme.shallow(<TimerControlPanel game={game} />)

  timerControl.find(Button).at(0).simulate('click')

  expect(game.running).toBe(true)
});
