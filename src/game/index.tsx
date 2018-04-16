import { observable } from 'mobx'

export class Game {
  @observable countDown: number
  @observable running = false
  timeHandler: number
  // this is exposed to facilitate testing
  updateInterval = 1000
  constructor(public gameDuration = 25 * 60) {
    this.countDown = gameDuration
  }
  start() {
    this.running = true
    this.timeHandler = setInterval(() => {
      this.countDown--
      if (this.countDown <= 0) this.pause()
    }, this.updateInterval) as any as number
  }
  pause() {
    this.running = false
    if (this.timeHandler)
      clearInterval(this.timeHandler)
  }
  reset() {
    this.running = false
    this.countDown = this.gameDuration
  }
}
