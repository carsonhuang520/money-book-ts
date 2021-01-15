import styled from 'styled-components'

export const PriceItemWrapper = styled.div`
  &.priceItem-wrapper {
    display: flex;
    flex-direction: column;

    .priceItem-header {
      font-weight: 500;
      padding: 4px 12px;
      background: #f4f5f6;
      min-height: 20px;
      border-bottom: 1px solid #d3d3d3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;

      &-price {
        &.profit {
          color: #5ad89f;
        }

        &.deficit {
          color: #fe4365;
        }
      }
    }

    .priceItem-list {
      list-style: none;
      padding: 0;
      margin: 0;

      .priceItem-item {
        min-height: 45px;
        padding: 10px 12px 10px 16px;
        border-bottom: 1px solid #d3d3d3;
        position: relative;
        transition: all 200ms linear;

        &.active {
          transform: translateX(-60px);
        }

        &-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 200ms linear;

          > span {
            display: flex;
            align-items: center;
          }

          &.active {
            transform: translateX(-60px);
          }
        }

        &-del {
          width: 38px;
          height: 100%;
          padding: 0 10px;
          background: #ff4d4f;
          border: 1px solid #ff4d4f;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          position: absolute;
          top: 0;
          right: -61px;
          transition: all 250ms linear;
          box-sizing: content-box;
          margin-top: -1px;

          &.active {
            transform: translateX(-60px);
          }
        }

        svg {
          width: 18px;
          height: 18px;
          margin-right: 16px;
        }
      }
    }
  }
`
