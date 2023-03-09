'use client'
import React, { useEffect, useState } from 'react'
import { Col, Row, Spin } from 'antd'
import { EmptyBanner, ImageBanner, ImageItem, StyledModal } from './styles'
import Image from 'next/image'
import imgIcon from '../../../../public/icons/image.png'
import { Proxima } from '@/components/Font/font'

type Props = {
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
  loading?: boolean
  imgs?: string[]
  fetchBanner?: () => void
}

function Banner(props: Props) {
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState<string>('')

  const { imgs = [] } = props

  useEffect(() => {
    setImg(props.value || '')
  }, [props.value])

  const hdSelect = (url: string) => {
    if (!props.onChange) return

    setImg(url)
  }

  const hdSubmit = () => {
    !!props.onChange && props.onChange(img)

    setOpen((prev) => !prev)
  }

  const hdOpen = () => {
    if (!open && props.fetchBanner) props.fetchBanner()

    setOpen((prev) => !prev)
  }

  return (
    <>
      {!props.value && (
        <EmptyBanner onClick={hdOpen}>
          <span className={Proxima.className}>
            <Image src={imgIcon} alt='icon' />
            Add a banner
          </span>
        </EmptyBanner>
      )}

      {props.value && (
        <ImageBanner
          onClick={() => !props.readonly && setOpen((prev) => !prev)}
        >
          <Image src={props.value} alt='icon' fill />
        </ImageBanner>
      )}

      <StyledModal
        width={1000}
        onCancel={() => setOpen((prev) => !prev)}
        title='Choose a banner'
        open={open}
        cancelButtonProps={{
          type: 'text',
        }}
        okText='Save'
        cancelText='Close'
        onOk={hdSubmit}
      >
        <Spin spinning={props.loading}>
          <Row gutter={[8, 8]}>
            {imgs.map((im) => (
              <Col span={4} key={im}>
                <ImageItem isChosen={im === img} onClick={() => hdSelect(im)}>
                  <Image src={im} alt='icon' fill />
                </ImageItem>
              </Col>
            ))}
          </Row>
        </Spin>
      </StyledModal>
    </>
  )
}

export default Banner
