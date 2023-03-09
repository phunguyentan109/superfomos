import styled from 'styled-components'

export const Tag = styled.div<{
  isSelected?: boolean
  onClick: (value: string) => void
}>`
  cursor: pointer;
  padding: 2px 10px;
  color: ${(props) => (props.isSelected ? 'var(--purple)' : '#344054')};
  background-color: ${(props) => (props.isSelected ? '#F9F5FF' : '#f2f4f7')};
  border-radius: 16px;
  text-align: center;
  mix-blend-mode: multiply;

  font-weight: 500;
  font-size: 14px;
  line-height: ${(props) => (props.isSelected ? 28 : 24)}px;

  img {
    margin-left: 7px;
    vertical-align: baseline;
    display: inline;
  }
`
