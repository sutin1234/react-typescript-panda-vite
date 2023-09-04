import { ButtonProps, ButtonStyle } from '@components/buttons/ButtonType'
import { css } from '@panda/css'

const buttonStyle: ButtonStyle = {
  color: 'blue.400',
  fontWeight: 'bold',
  bgColor: 'blue.100',
  px: 8,
  borderRadius: '5px',
}

export function Button(props: ButtonProps) {
  return (
    <div>
      <div>{props.title}</div>
      <button className={css(buttonStyle)} onClick={props.onClick}>
        onClick
      </button>
    </div>
  )
}
