import styled from 'styled-components'
import { Input } from 'antd'

export const StyledImage = styled.div`
  margin-right: 11px;
  width: 18px;
  height: auto;

  img {
    display: block;
  }
`

export const StyledInput = styled(Input)`
  width: 100%;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;

  border-radius: 4px;

  &::placeholder {
    color: var(--gray);
    font-size: 16px;
    font-weight: 600;
  }
`

export const StyledText = styled.div`
  width: 100%;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
`
