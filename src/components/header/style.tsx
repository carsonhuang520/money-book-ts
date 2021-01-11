import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  &.header-wrapper {
    height: 50px;
    background: #f8f8f8;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;

    .btn {
      background: #e8e8e9;
      border-color: #e8e8e9;
      color: #61dafb;
      font-weight: 700;
      box-shadow: none;
      padding: 3px 35px;

      &:first-child {
        margin-right: 5px;
      }

      &:last-child {
        margin-left: 5px;
      }

      &.active {
        background: #61dafb;
        border-color: #61dafb;
        color: #ffffff;
      }
    }
  }
`
