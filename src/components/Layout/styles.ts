'use client'
import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 112px;
  padding-right: 112px;

  margin-bottom: 118px;

  .bar {
    flex-basis: 100%;
  }

  img {
    width: 200px;
  }

  .items {
    > div {
      line-height: 35.56px;
      padding: 0 24px;
      font-weight: 500;
      color: var(--gray) !important;

      &:last-child {
        padding-left: 53px !important;
        padding-right: 0;
      }
    }

    a {
      line-height: 35.56px;
      padding: 0 24px;
      font-weight: 500;
      color: var(--gray) !important;
    }
  }
`
