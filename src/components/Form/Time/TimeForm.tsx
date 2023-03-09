'use client'
import { Col, Row } from 'antd'
import Image, { StaticImageData } from 'next/image'
import { StyledImage, StyledTime, StyledText } from './styles'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { NeueMedium } from '@/components/Font/font'

type TimeType = { time: Dayjs; timeString?: string }

type Props = {
  size?: 'large' | 'middle' | 'small'
  placeholder: string
  icon?: StaticImageData
  value?: TimeType
  onChange?: (value: TimeType) => void
  readonly?: boolean
  width: string
}

function TimeForm(props: Props) {
  const { value, onChange, icon, readonly, width, size, ...rest } = props

  const hdChange = (time: Dayjs, timeString: string) => {
    if (!onChange) return

    onChange({ time, timeString })
  }

  return (
    <Row align='middle'>
      {!!icon && (
        <StyledImage size={size}>
          <Image src={icon} alt='icon' />
        </StyledImage>
      )}

      {readonly || (
        <Col>
          <StyledTime
            {...rest}
            className={NeueMedium.className}
            suffixIcon={null}
            style={{ width }}
            onChange={hdChange}
            value={value?.time || null}
            showNow={false}
            size={size}
          />
        </Col>
      )}

      {readonly && (
        <Col>
          <StyledText className={NeueMedium.className}>
            {dayjs(props.value?.time || null).format('H A')}
          </StyledText>
        </Col>
      )}
    </Row>
  )
}

export default TimeForm
