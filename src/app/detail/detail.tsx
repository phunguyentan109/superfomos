'use client'
import Navbar from '@/components/Layout/Navbar'
import { Container } from './styles'
import {
  Banner,
  DateForm,
  InputForm,
  InputNumberForm,
  TimeForm,
  Title,
} from '@/components/Form'
import { Col, notification, Row, Spin } from 'antd'
import dayjs from 'dayjs'
import { inter } from '@/components/Font/font'

import dateIcon from '../../../public/icons/date.png'
import timeIcon from '../../../public/icons/time.png'
import locationIcon from '../../../public/icons/location.png'
import peopleIcon from '../../../public/icons/people.png'
import costIcon from '../../../public/icons/cost.png'
import { useDispatch, useSelector } from 'react-redux'
import { selectSocialDetail } from './slice/selector'
import { useEffect } from 'react'
import { getDetailAction, getDetailActionSuccess } from '@/app/detail/slice'
import { SocialPost } from '@/interface/socialPost'

function Detail() {
  const { detail, loading } = useSelector(selectSocialDetail)
  const dispatch = useDispatch()

  useEffect(() => {
    const notify = (value: any) => {
      if (!value) notification['error']({ message: 'Server Error' })
    }

    dispatch(
      getDetailAction({
        cb: notify,
      })
    )

    return () => {
      dispatch(getDetailActionSuccess({} as SocialPost))
    }
  }, [dispatch])

  return (
    <>
      <Navbar />

      <Spin spinning={loading}>
        <Container>
          <div style={{ marginBottom: 28, paddingTop: 32 }}>
            <Title
              width='586px'
              readonly
              value={detail?.title || 'Untitle Event'}
            />
          </div>

          <div style={{ position: 'absolute', right: 85, top: 0, zIndex: -1 }}>
            <Banner readonly value={detail?.banner} />
          </div>

          <Row align='middle' gutter={[39, 0]} style={{ marginBottom: 28 }}>
            <Col>
              <DateForm
                readonly
                width='181px'
                placeholder='Date'
                icon={dateIcon}
                size='large'
                value={{ date: dayjs(detail?.startAt) }}
              />
            </Col>

            <Col>
              <TimeForm
                readonly
                width='180px'
                placeholder='Time'
                icon={timeIcon}
                size='large'
                value={{ time: dayjs(detail?.startAt) }}
              />
            </Col>
          </Row>

          <InputForm
            readonly
            width='454px'
            icon={locationIcon}
            placeholder='Venue'
            value={detail?.venue}
          />

          <Row align='middle' gutter={[35.6, 0]} style={{ marginBottom: 32 }}>
            <Col>
              <InputNumberForm
                readonly
                width='155px'
                placeholder='Max capacity'
                icon={peopleIcon}
                value={detail?.capacity}
                readOnlyFormatter={(v: number) => `${v} people`}
              />
            </Col>

            <Col>
              <InputNumberForm
                readonly
                width='155px'
                placeholder='Cost per person'
                icon={costIcon}
                value={detail?.price}
                readOnlyFormatter={(v: number) => `$${v}`}
              />
            </Col>
          </Row>

          <div
            className={`${inter.className} desc`}
            dangerouslySetInnerHTML={{
              __html: detail?.description?.replace(/(?:\r\n|\r|\n)/g, '<br>'),
            }}
          />
        </Container>
      </Spin>
    </>
  )
}

export default Detail
