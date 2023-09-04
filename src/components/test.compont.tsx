import { css } from '@panda/css'
import { MouseEventHandler } from 'react'

type ButtonProps = {
  title?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
const titleStyle = css({
  color: 'blue.400',
  fontWeight: 'bold',
  bgColor: 'blue.100',
  px: 8,
  borderRadius: '5px',
})

export function ButtonComponent(prop: ButtonProps) {
  return (
    <div>
      <div>{prop.title}</div>
      <button className={titleStyle} onClick={prop.onClick}>
        onClick
      </button>
    </div>
  )
}
