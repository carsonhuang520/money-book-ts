import styled from 'styled-components'

export const FooterWrapper = styled.nav`
  &.nav-wrapper {
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px rgba(23, 22, 12, 0.3);

    > a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      text-decoration: none;
      text-align: center;
      padding: 10px 0;
      color: #61dafb;

      &.active {
        color: #00c8ff;
        font-weight: 500;
      }

      > svg {
        width: 1.4em;
        height: 1.4em;
      }
    }
  }
`
