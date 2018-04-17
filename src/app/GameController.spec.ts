import * as t from 'assert'
import * as delay from 'delay'

import { GameController } from '.'

test('by default game duration is 25 mins', () => {
  const game = new GameController()
  t.equal(game.gameDuration, 25 * 60)
  t.equal(game.countDown, 25 * 60)
})

test('game duration can be customized', () => {
  const game = new GameController(10)
  t.equal(game.gameDuration, 10)
  t.equal(game.countDown, 10)
})

test('start() will change running to true', () => {
  const game = new GameController()
  game.start()
  t.equal(game.running, true)
})

test('start() will make game to decrement countDown automatically', async () => {
  const game = new GameController()
  game.updateInterval = 1
  game.start()
  await delay.default(10)
  expect(game.countDown).toBeLessThan(game.gameDuration)
})

test('calling start() multiple times will not decrement multiple times faster', async () => {
  const game = new GameController()
  game.updateInterval = 1

  for (let i = 0; i < 100; i++)
    game.start()

  await delay.default(10)
  // if it decrement multiple times, it would easily be - 200
  // if not, it should be at most 10 times (in reality 2-8 times)
  // putting in 20 just to be safe.
  expect(game.countDown).toBeGreaterThan(game.gameDuration - 20)
})

test('after pause() can start() again', async () => {
  const game = new GameController()
  game.updateInterval = 1
  const startCount = game.countDown

  game.start()
  await delay.default(5)
  game.pause()
  const pauseCount = game.countDown

  t.notEqual(pauseCount, startCount)

  game.start()
  await delay.default(5)
  t.notEqual(game.countDown, pauseCount)
})
