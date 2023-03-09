import styled, { css } from 'styled-components'
import { TimePicker } from 'antd'

export const StyledImage = styled.div<{ [key: string]: any }>`
  margin-right: 15px;
  width: 18px;
  height: auto;

  ${(props) =>
    props.size === 'large' &&
    css`
      width: 33.66px;
    `}

  img {
    display: block;
  }
`

export const StyledTime = styled(TimePicker)<{ [key: string]: any }>`
  border-radius: 8px;
  padding-left: 0;

  input {
    padding-left: 3px;
    font-size: ${(props) => (props.size === 'large' ? 28 : 16)}px !important;
    line-height: 40px;
    font-weight: 600;

    &::placeholder {
      color: var(--gray) !important;
      font-size: ${(props) => (props.size === 'large' ? 28 : 16)}px !important;
      font-weight: 600;
    }
  }

  height: 40px;
`

export const StyledText = styled.div`
  width: 100%;
  font-size: 28px;
  height: 40px;
  line-height: 40px;
`
