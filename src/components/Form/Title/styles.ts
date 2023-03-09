import styled from 'styled-components'

export const StyledTitle = styled.div<{ width?: string }>`
  padding-left: 7px;
  width: ${(props) => props.width};

  > span {
    font-weight: 700;
    font-size: 48px;
    outline: 12px solid #942f70;
    border: 1px solid #942f70;
    outline-offset: -5px;
    background: #942f70;

    > span {
      line-height: 64px;
      position: relative;
      color: white;

      &:focus {
        outline: 0 solid transparent;
      }
    }
  }
`
