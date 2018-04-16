import { observer } from 'mobx-react'
import pad from 'pad-left'
import * as React from 'react'


export const Timer = observer(({ countDown }: { countDown: number }) => (
  <div style={{ fontSize: '150px' }}>
    {pad(Math.floor(countDown / 60), 2, '0')}:{pad(countDown % 60, 2, '0')}
  </div>
))

