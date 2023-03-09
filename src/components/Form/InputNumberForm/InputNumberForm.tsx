'use client'
import { Col, Row } from 'antd'
import Image, { StaticImageData } from 'next/image'
import { StyledImage, StyledInputNumber, StyledText } from './styles'
import React from 'react'
import { NeueMedium } from '@/components/Font/font'

type Props = {
  size?: 'large' | 'middle' | 'small'
  placeholder: string
  icon?: StaticImageData
  value?: number
  onChange?: (value: number) => void
  readonly?: boolean
  width: string
  readOnlyFormatter?: (v: number) => string
}

function InputNumberForm(props: Props) {
  const {
    value,
    onChange,
    icon,
    readonly,
    width,
    readOnlyFormatter = (v: number) => `${v}`,
    ...rest
  } = props

  const hdChange = (value: number) => {
    if (!onChange) return

    onChange(value)
  }

  return (
    <Row align='middle'>
      {!!icon && (
        <StyledImage>
          <Image src={icon} alt='icon' />
        </StyledImage>
      )}

      {readonly || (
        <Col>
          <StyledInputNumber
            {...rest}
            style={{ width }}
            onChange={hdChange}
            value={value}
            controls={false}
          />
        </Col>
      )}

      {readonly && (
        <Col>
          <StyledText className={NeueMedium.className}>
            {readOnlyFormatter(value || 0)}
          </StyledText>
        </Col>
      )}
    </Row>
  )
}

export default InputNumberForm
