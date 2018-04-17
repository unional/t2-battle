import * as t from 'assert'
import * as enzyme from 'enzyme'
import * as React from 'react'

import { TimerControlPanel } from './TimerControlPanel'
import { GameController } from '../../app'
import { Button } from '../Button';

it('starts with start shown, pause and reset hidden', () => {
  const { panel } = setupEnzyme(() => new GameController())

  t.equal(startButton(panel).prop('hidden'), false)
  t.equal(pauseButton(panel).prop('hidden'), true)
  t.equal(resetButton(panel).prop('hidden'), true)
})

it('click start button starts timer', () => {
  const { game, panel } = setupEnzyme(() => new GameController())
  t.equal(game.running, false)

  startButton(panel).simulate('click')

  t.equal(game.running, true)
})

function startButton(panel): enzyme.ShallowWrapper<{
  [x: string]: any;
  children: any;
}, never> {
  return panel.find(Button).at(0)
}

function pauseButton(panel): enzyme.ShallowWrapper<{
  [x: string]: any;
  children: any;
}, never> {
  return panel.find(Button).at(1)
}

function resetButton(panel): enzyme.ShallowWrapper<{
  [x: string]: any;
  children: any;
}, never> {
  return panel.find(Button).at(2)
}

function setup(getGame = () => new GameController()) {
  const game = getGame()
  const story = <TimerControlPanel timer={game} />
  return { game, story }
}

function setupEnzyme(getGame) {
  const { game, story } = setup(getGame)
  const panel = enzyme.shallow(story)
  return { game, panel }
}
