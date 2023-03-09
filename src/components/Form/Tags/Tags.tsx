import React, { useMemo } from 'react'
import { Tag } from './styles'
import { Col, Row } from 'antd'
import closeIcon from '../../../../public/icons/close.png'
import Image from 'next/image'
import { inter } from '@/components/Font/font'

const tags = ['Engineer', 'Product', 'Marketing', 'Design']

type Props = {
  value?: string[]
  onChange?: (value: string[]) => void
}

function Tags(props: Props) {
  const hdClick = (t: string) => {
    if (!props.onChange) return

    props.onChange(
      (props.value || []).includes(t)
        ? (props.value || []).filter((ta) => ta !== t)
        : [...(props.value || []), t]
    )
  }

  const unSelectTags = useMemo(
    () => tags.filter((t) => !(props.value || []).includes(t)),
    [props.value]
  )

  return (
    <>
      {(props.value || []).length > 0 && (
        <Row style={{ marginBottom: 16 }}>
          {(props.value || []).map((t) => (
            <Col key={t}>
              <Tag
                className={inter.className}
                isSelected
                onClick={() => hdClick(t)}
              >
                {t} <Image src={closeIcon} alt='close' />
              </Tag>
            </Col>
          ))}
        </Row>
      )}

      <Row gutter={[8, 0]}>
        {unSelectTags.map((t) => (
          <Col key={t}>
            <Tag className={inter.className} onClick={() => hdClick(t)}>
              {t}
            </Tag>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Tags
