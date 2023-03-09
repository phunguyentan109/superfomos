import styled from 'styled-components'
import Image from 'next/image'
import { Input, InputNumber } from 'antd'

export const StyledImage = styled.div`
  margin-right: 11px;
  width: 18px;
  height: auto;

  img {
    display: block;
  }
`

export const StyledInputNumber = styled(InputNumber)<{ [key: string]: any }>`
  border-radius: 4px;

  input {
    width: 100%;
    font-size: 16px;
    height: 40px !important;
    line-height: 40px;
    font-weight: 600;

    &::placeholder {
      color: var(--gray) !important;
      font-size: 16px;
      font-weight: 600;
    }
  }
`

export const StyledText = styled.div`
  width: 100%;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
`
