import React from 'react'
import { StyledTitle } from './styles'
import { NeueBold } from '@/components/Font/font'

type Props = {
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
  width?: string
}

function Title(props: Props) {
  const hdChange = () => {
    let nodeText = document.getElementById('title')?.innerText

    if (!props.onChange) return

    props.onChange(nodeText || '')
  }

  return (
    <StyledTitle width={props.width}>
      <span>
        <span
          id='title'
          className={NeueBold.className}
          role='textbox'
          contentEditable={!props.readonly}
          onInput={hdChange}
          onBlur={hdChange}
        >
          {props.value}
        </span>
      </span>
    </StyledTitle>
  )
}

export default Title
