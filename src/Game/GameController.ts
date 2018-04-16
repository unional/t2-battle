import { Game } from './Game';

export class GameController extends Game {
  timeHandler?: number
  // this is exposed to facilitate testing
  updateInterval = 1000
  constructor(public gameDuration = 25 * 60) {
    super()
    this.countDown = gameDuration
  }
  start() {
    this.running = true
    if (!this.timeHandler)
      this.timeHandler = setInterval(() => {
        this.countDown--
        if (this.countDown <= 0) this.pause()
      }, this.updateInterval) as any as number
  }
  pause() {
    this.running = false
    if (this.timeHandler) {
      clearInterval(this.timeHandler)
      this.timeHandler = undefined
    }
  }
  reset() {
    this.running = false
    this.countDown = this.gameDuration
  }
}
