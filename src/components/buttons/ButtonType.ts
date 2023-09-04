import { MouseEventHandler } from 'react'
import { SystemStyleObject } from '@panda/types'
import { css } from '@panda/css'

export type ButtonProps = {
  title?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
export type ButtonStyle = SystemStyleObject

export function makeStyle<T>(style: T): string {
  return css(style as SystemStyleObject)
}
