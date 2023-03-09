import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 112px;
  padding-right: 85px;

  min-height: 1000px;

  position: relative;
  z-index: 0;

  .desc {
    font-size: 18px;
    line-height: 28px;
    width: 642px;
    margin-bottom: 188px;
  }
`

export const StyledButton = styled.button`
  margin-top: 32px;
  width: 642px;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 48px;
  background-color: var(--yellow);
  color: var(--purple);
  border: 1px solid var(--yellow);
  cursor: pointer;

  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  margin-bottom: 100px;
  font-weight: 500;
`
