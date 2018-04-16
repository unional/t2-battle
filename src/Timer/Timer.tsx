import * as React from 'react'
import { observer } from 'mobx-react'

export const Timer = observer(({ countDown }: { countDown: number }) => (
  <div style={{ fontSize: '150px' }}>
    {Math.floor(countDown / 60)}:{countDown % 60}
  </div>
))

