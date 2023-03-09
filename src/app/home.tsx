'use client'
import Navbar from '@/components/Layout/Navbar'
import { Col, Form, notification, Radio, Row, Spin } from 'antd'
import {
  Container,
  DescLabel,
  StyledButton,
  StyledCard,
  StyledCheckbox,
  StyledFormItem,
  StyledRadio,
  StyledSetting,
  StyledTextArea,
} from './styles'
import {
  Banner,
  DateForm,
  InputForm,
  InputNumberForm,
  Tags,
  TimeForm,
  Title,
} from '@/components/Form'
import { LoadingOutlined } from '@ant-design/icons'

import { inter, NeueBold } from '@/components/Font/font'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreateSocial } from './slice/selector'
import { createSocialAction, getBannerAction } from './slice'

import locationIcon from '../../public/icons/location.png'
import costIcon from '../../public/icons/cost.png'
import peopleIcon from '../../public/icons/people.png'
import dateIcon from '../../public/icons/date.png'
import timeIcon from '../../public/icons/time.png'
import dayjs from 'dayjs'
import { SocialPost } from '@/interface/socialPost'

export default function Home() {
  const [form] = Form.useForm()
  const createSocial = useSelector(selectCreateSocial)
  const dispatch = useDispatch()

  const hdSubmit = (valuesForm: SocialPost) => {
    const values = { ...valuesForm }

    let isInvalid = Object.values(values).some(
      (v) => v === null || v === undefined
    )

    if (isInvalid)
      return notification['error']({
        message: 'Missing Required Information',
        description: 'Please fill in all required fields before submit',
      })

    values.startAt = dayjs(
      `${values.startDate?.dateString} ${values.startTime?.timeString}`
    ).format()

    delete values.startDate
    delete values.startTime

    const notify = (value: any) =>
      notification[!!value ? 'success' : 'error']({
        message: !!value ? 'Create Social Post Successfully!' : 'Server Error',
      })

    dispatch(createSocialAction({ values, cb: notify }))
  }

  const hdFetchBanner = () => {
    dispatch(
      getBannerAction({
        cb: (rs: any) => {
          if (!rs)
            return notification['error']({
              message: 'Server Error',
            })
        },
      })
    )
  }

  return (
    <>
      <Navbar />

      <Container>
        <Form
          onFinish={hdSubmit}
          form={form}
          initialValues={{
            title: 'Untitled Event',
          }}
        >
          <Spin spinning={createSocial.loading}>
            <Row gutter={[18, 0]} style={{ marginBottom: 31 }}>
              <Col style={{ paddingTop: 32 }}>
                <StyledFormItem name='title' marginBottom={28}>
                  <Title width='485px' />
                </StyledFormItem>

                <Row
                  align='middle'
                  gutter={[23, 0]}
                  style={{ marginBottom: 28 }}
                >
                  <Col>
                    <StyledFormItem name='startDate' marginBottom={0}>
                      <DateForm
                        width='181px'
                        placeholder='Date'
                        icon={dateIcon}
                        size='large'
                      />
                    </StyledFormItem>
                  </Col>

                  <Col>
                    <StyledFormItem name='startTime' marginBottom={0}>
                      <TimeForm
                        width='180px'
                        placeholder='Time'
                        icon={timeIcon}
                        size='large'
                      />
                    </StyledFormItem>
                  </Col>
                </Row>

                <StyledFormItem name='venue' marginBottom={12}>
                  <InputForm
                    width='454px'
                    icon={locationIcon}
                    placeholder='Venue'
                  />
                </StyledFormItem>

                <Row align='middle' gutter={[35.6, 0]}>
                  <Col>
                    <StyledFormItem name='capacity'>
                      <InputNumberForm
                        width='155px'
                        placeholder='Max capacity'
                        icon={peopleIcon}
                      />
                    </StyledFormItem>
                  </Col>

                  <Col>
                    <StyledFormItem name='price'>
                      <InputNumberForm
                        width='155px'
                        placeholder='Cost per person'
                        icon={costIcon}
                      />
                    </StyledFormItem>
                  </Col>
                </Row>
              </Col>

              <Col>
                <StyledFormItem name='banner' marginBottom={0}>
                  <Banner
                    imgs={createSocial.banners}
                    loading={createSocial.loadingBanner}
                    fetchBanner={hdFetchBanner}
                  />
                </StyledFormItem>
              </Col>
            </Row>

            <DescLabel
              className={inter.className}
              style={{ marginBottom: 6, color: 'var(--gray)' }}
            >
              Description
            </DescLabel>
            <StyledCard style={{ marginBottom: 32 }}>
              <StyledFormItem name='description' marginBottom={0}>
                <StyledTextArea
                  bordered={false}
                  placeholder='Description of your event..'
                  style={{
                    ...inter.style,
                  }}
                />
              </StyledFormItem>
            </StyledCard>

            <StyledSetting>
              <h1 className={NeueBold.className}>Settings</h1>

              <StyledFormItem
                name='isManualApprove'
                valuePropName='checked'
                marginBottom={24}
              >
                <StyledCheckbox className={inter.className}>
                  I want to approve attendees
                </StyledCheckbox>
              </StyledFormItem>

              <p
                className='section-label'
                style={{ marginBottom: 10, ...inter.style }}
              >
                Privacy
              </p>

              <StyledFormItem name='privacy' marginBottom={24}>
                <Radio.Group>
                  <StyledRadio className={inter.className} value='Public'>
                    Public
                  </StyledRadio>
                  <StyledRadio value='Curated Audience'>
                    Curated Audience
                  </StyledRadio>
                  <StyledRadio value='Community Only'>
                    Community Only
                  </StyledRadio>
                </Radio.Group>
              </StyledFormItem>

              <p
                className='section-label'
                style={{ marginBottom: 2, ...inter.style }}
              >
                Tag your social
              </p>
              <p style={inter.style} className='note'>
                Pick tags for our curation engine to work its magin
              </p>

              <StyledFormItem name='tags' marginBottom={0}>
                <Tags />
              </StyledFormItem>
            </StyledSetting>

            <StyledButton
              disabled={createSocial?.loading}
              className={inter.className}
            >
              {createSocial?.loading ? <LoadingOutlined /> : 'CREATE SOCIAL'}
            </StyledButton>
          </Spin>
        </Form>
      </Container>
    </>
  )
}
