'use client'
import { Col, Row } from 'antd'
import Image, { StaticImageData } from 'next/image'
import { StyledImage, StyledInput, StyledText } from './styles'
import React from 'react'
import { NeueMedium } from '@/components/Font/font'

type Props = {
  size?: 'large' | 'middle' | 'small'
  placeholder: string
  icon?: StaticImageData
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
  width: string
}

function InputForm(props: Props) {
  const { value, onChange, icon, readonly, width, ...rest } = props

  const hdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return

    onChange(e.target.value)
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
          <StyledInput
            {...rest}
            style={{ width }}
            onChange={hdChange}
            value={value}
          />
        </Col>
      )}

      {readonly && (
        <Col>
          <StyledText className={NeueMedium.className}>{value}</StyledText>
        </Col>
      )}
    </Row>
  )
}

export default InputForm
