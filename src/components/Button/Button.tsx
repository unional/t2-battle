import * as React from 'react'

import './Button.css'

export function Button({ children, ...rest }) {
  return (
    <button className='Button' {...rest} >{children}</button>
  )
}
