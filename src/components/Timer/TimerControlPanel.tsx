import * as React from 'react'
import { observer } from 'mobx-react'

import './TimerControlPanel.css'
import { Button } from '../Button'
import { TimerDisplay } from './TimerDisplay'

export interface Timer {
  countDown: number,
  running: boolean
  start(): void,
  pause(): void,
  reset(): void,
}
export const TimerControlPanel = observer(({ timer }: { timer: Timer }) => (
  <div className='TimerControlPanel'>
    <TimerDisplay countDown={timer.countDown} />
    <Button hidden={timer.running || timer.countDown <= 0} onClick={timer.start.bind(timer)}>{'Start Game'}</Button>
    <Button hidden={!timer.running || timer.countDown <= 0} onClick={timer.pause.bind(timer)}>{'Pause Game'}</Button>
    <Button hidden={timer.running || timer.countDown > 0} onClick={timer.reset.bind(timer)}>{'Reset Game'}</Button>
  </div>
))
