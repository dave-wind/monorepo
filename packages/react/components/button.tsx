import React from 'react'
import { IBaseProps } from '@DAO/common/types'

function NeoButton(props: IBaseProps) {
  return (
    <div style={{ color: props.color ? props.color : 'inherit' }}>
      {props.title ? props.title : 'button'}
    </div>
  )
}

export default NeoButton
