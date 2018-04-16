import * as t from 'assert'
import * as delay from 'delay'

import { Game } from './index'

test('by default game duration is 25 mins', () => {
  const game = new Game()
  t.equal(game.gameDuration, 25 * 60)
  t.equal(game.countDown, 25 * 60)
})

test('game duration can be customized', () => {
  const game = new Game(10)
  t.equal(game.gameDuration, 10)
  t.equal(game.countDown, 10)
})

test('start() will change running to true', () => {
  const game = new Game()
  game.start()
  t.equal(game.running, true)
})

test('start() will make game to decrement countDown automatically', async () => {
  const game = new Game()
  game.updateInterval = 1
  game.start()
  await delay.default(10)
  expect(game.countDown).toBeLessThan(game.gameDuration)
})
