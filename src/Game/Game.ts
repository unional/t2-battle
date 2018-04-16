import { observable } from 'mobx'

export class Game {
  @observable countDown: number
  @observable running = false
}
