'use client'
import { Container } from './styles'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { Col, Row } from 'antd'
import { inter } from '../Font/font'
import downIcon from '../../../public/icons/chevron-down.png'
import Link from 'next/link'

function Navbar() {
  return (
    <Container>
      <Row className='bar' justify='space-between'>
        <Col>
          <Link href='/'>
            <Image alt='logo' src={logo} />
          </Link>
        </Col>

        <Col>
          <Row className='items' align='middle' style={inter.style}>
            <Col>
              <div>Blog</div>
            </Col>
            <Col>
              <Link href='/detail'>Socials</Link>
            </Col>
            <Col>
              <div>Past Socials</div>
            </Col>
            <Col>
              <div>
                Clubs{' '}
                <Image
                  style={{ width: 20, height: 20 }}
                  src={downIcon}
                  alt='down'
                />
              </div>
            </Col>
            <Col>
              <div>Contact</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar
