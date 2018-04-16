import pad from 'pad-left'
import * as React from 'react'


export const TimerDisplay = ({ countDown }: { countDown: number }) => (
  <div style={{ fontSize: '150px' }}>
    {pad(Math.floor(countDown / 60), 2, '0')}:{pad(countDown % 60, 2, '0')}
  </div>
)

