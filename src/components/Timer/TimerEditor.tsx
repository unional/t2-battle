import { InputNumber } from 'antd'
import pad from 'pad-left'
import * as React from 'react'

import './TimerEditor.css'

export const TimerEditor = ({ countDown, setCountDown }: { countDown: number, setCountDown: (value) => void }) => {

  function changeMinute(value) {
    setCountDown(value * 60 + countDown % 60)
  }
  function changeSecond(value) {
    setCountDown(Math.floor(countDown / 60) + value)
  }

  return (
    <div style={{ fontSize: 150, color: countDown > 120 ? 'black' : 'orange' }}>
      <InputNumber style={{ display: 'inline-block' }} min={0} max={59} defaultValue={pad(Math.floor(countDown / 60), 2, '0')} onChange={changeMinute} />:<InputNumber style={{ display: 'inline-block' }} min={0} max={59} defaultValue={pad(countDown % 60, 2, '0')} onChange={changeSecond} />
    </div>
  )
}
