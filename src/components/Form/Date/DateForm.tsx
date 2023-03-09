'use client'
import { Col, Row } from 'antd'
import Image, { StaticImageData } from 'next/image'
import { StyledDate, StyledImage, StyledText } from './styles'
import dayjs, { Dayjs } from 'dayjs'
import { NeueBold, NeueMedium } from '@/components/Font/font'

type DateType = { date: Dayjs; dateString?: string }

type Props = {
  size?: 'large' | 'middle' | 'small'
  placeholder: string
  icon?: StaticImageData
  value?: DateType
  onChange?: (value: DateType) => void
  readonly?: boolean
  width: string
}

function DateForm(props: Props) {
  const { value, onChange, icon, readonly, width, size, ...rest } = props

  const hdChange = (date: Dayjs, dateString: string) => {
    if (!onChange) return

    onChange({ date, dateString })
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
          <StyledDate
            {...rest}
            size={size}
            className={NeueMedium.className}
            suffixIcon={null}
            style={{ width }}
            onChange={hdChange}
            value={value?.date || null}
            showNow={false}
          />
        </Col>
      )}

      {readonly && (
        <Col>
          <StyledText className={NeueMedium.className}>
            {dayjs(props.value?.date || null).format('MMM DD, ddd')}
          </StyledText>
        </Col>
      )}
    </Row>
  )
}

export default DateForm
