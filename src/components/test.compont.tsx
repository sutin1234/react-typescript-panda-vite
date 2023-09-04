import { css } from '@panda/css'
import { MouseEventHandler } from 'react'
import { SystemStyleObject } from '@panda/types'

type ButtonProps = {
  title?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
const buttonStyle: SystemStyleObject = {
  color: 'blue.400',
  fontWeight: 'bold',
  bgColor: 'blue.100',
  px: 8,
  borderRadius: '5px',
}

export function ButtonComponent(prop: ButtonProps) {
  return (
    <div>
      <div>{prop.title}</div>
      <button className={css(buttonStyle)} onClick={prop.onClick}>
        onClick
      </button>
    </div>
  )
}
