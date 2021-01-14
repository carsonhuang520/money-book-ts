import styled from 'styled-components'

export const PriceListWrapper = styled.div`
  &.priceItem-wrapper {
    display: flex;
    flex-direction: column;

    .priceItem-header {
      font-weight: 500;
      padding: 4px 12px;
      background: $timeBgColor;
      min-height: 20px;
      border-bottom: 1px solid $borderColor;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;

      &-price {
        &.profit {
          color: $profitColor;
        }

        &.deficit {
          color: $deficitColor;
        }
      }
    }
  }
`
