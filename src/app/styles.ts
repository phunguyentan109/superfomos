import styled from 'styled-components'
import { Card, Checkbox, Form, Input, Radio } from 'antd'

export const StyledFormItem = styled(Form.Item)<{ [key: string]: any }>`
  margin-bottom: ${(props) => props.$marginBottom || 0}px !important;
`

export const Container = styled.div`
  padding-left: 112px;
  padding-right: 85px;
`

export const StyledCard = styled(Card)`
  width: 642px;
  height: 207px;
  display: block;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);

  .ant-card-body {
    padding: 12px 14px;
    width: 100%;
    height: 100%;
  }

  textarea {
    display: block;
    font-size: 16px;

    &::placeholder {
      color: #667085;
      font-size: 16px;
    }
  }
`

export const DescLabel = styled.p`
  margin-bottom: 6px;
  color: var(--gray);
  line-height: 20px;
  font-weight: 500;
`

export const StyledSetting = styled(Card)`
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 642px;
  display: block;
  border-radius: 8px;

  .ant-card-body {
    padding: 32px 32px;
    width: 100%;
    height: 100%;
  }

  textarea {
    display: block;
    font-size: 16px;

    &::placeholder {
      color: #667085;
      font-size: 16px;
    }
  }

  h1 {
    font-weight: bold;
    line-height: 60px;
    padding-left: 12px;
    padding-right: 12px;
    color: var(--purple);
    font-size: 32px;
    background: var(--yellow);
    display: inline-block;
    margin-bottom: 24px;
  }

  .section-label {
    color: #344054;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }

  .note {
    color: #475467;
    font-size: 16px;
    margin-bottom: 28px;
    line-height: 24px;
    font-weight: 400;
  }
`

export const StyledCheckbox = styled(Checkbox)`
  align-items: center !important;

  input[type='checkbox'] {
    width: 20px !important;
    height: 20px !important;
  }

  .ant-checkbox {
    top: 0;
  }

  .ant-checkbox + span {
    line-height: 20px;
    padding-left: 12px;
    color: #344054;
    font-weight: 500;
  }

  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border-radius: 6px;

    &::after {
      left: 27.5% !important;
    }
  }

  .ant-checkbox-checked::after {
    border-radius: 6px;
  }
`

export const StyledRadio = styled(Radio)`
  align-items: center;
  margin-right: 32px;

  input[type='radio'] {
    width: 20px !important;
    height: 20px !important;
  }

  .ant-radio-inner {
    width: 20px !important;
    height: 20px !important;
  }

  .ant-radio {
    top: 0 !important;
  }

  .ant-radio + span {
    font-size: 14px;
    line-height: 20px;
    padding-left: 12px;
    font-weight: 400;
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

export const StyledTextArea = styled(Input.TextArea)`
  height: 181px !important;
  resize: none;
  padding: 0;
  font-size: 16px !important;
  line-height: 24px !important;
  font-weight: 400;
`
