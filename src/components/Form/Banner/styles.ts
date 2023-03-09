import styled, { css } from 'styled-components'
import { Modal } from 'antd'

export const EmptyBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 739px;
  height: 445px;
  background: rgba(242, 242, 242, 0.1);
  border: 1px dashed #f2f2f2;
  border-radius: 0 64px;
  font-weight: 600;
  font-size: 20px;
  color: #14597a;

  cursor: pointer;

  img {
    margin-right: 16px;
    vertical-align: middle;
  }
`

export const ImageItem = styled.div<{ isChosen: boolean }>`
  width: 100%;
  height: 100px;
  cursor: pointer;
  transition-duration: 0.2s;
  border: 2px solid white;

  &:hover {
    border-color: #942f70;
  }

  img {
    position: relative !important;
  }

  ${(props) =>
    props.isChosen &&
    css`
      border: 5px solid #942f70;
    `}
`

export const ImageBanner = styled.div`
  width: 739px;
  cursor: pointer;
  transition-duration: 0.2s;
  height: 445px;

  &:hover {
    filter: brightness(150%);
  }

  img {
    position: relative !important;
    border-radius: 0 64px;
  }
`

export const StyledModal = styled(Modal)`
  .ant-modal-title {
    font-weight: bold;
  }

  .ant-modal-footer {
    .ant-btn {
      font-weight: bold !important;
      color: gray;
    }

    .ant-btn.ant-btn-primary {
      background: #fef452;
      border-radius: 8px;
      color: #942f70;
      outline: none;
      border: none;
    }
  }
`
