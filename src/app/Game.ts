import { observable } from 'mobx'

export class Game {
  @observable countDown: number
  @observable running = false
  @observable player1: string
  @observable player2: string
  @observable player1Score = 0
  @observable player2Score = 0
}
