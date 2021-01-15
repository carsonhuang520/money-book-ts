import styled from 'styled-components'

export const StatisticalWrapper = styled.div`
  .total-wrapper {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    > li {
      cursor: pointer;

      &.base {
        display: block;
        height: 50px;
        width: 120px;
        line-height: 50px;
        text-align: center;
        border-radius: 10px;
        margin: 5px;
        font-weight: 700;
        border: 1px solid #d3d3d3;
        box-shadow: 1px 2px 2px #d3d3d3;
      }

      &:first-child {
        color: #fe4365;

        &.empty {
          color: #d3d3d3;
        }
      }

      &:last-child {
        color: #5ad89f;

        &.empty {
          color: #d3d3d3;
        }
      }
    }
  }

  .total {
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      &.base {
        display: block;
        height: 50px;
        width: 120px;
        line-height: 50px;
        text-align: center;
        border-radius: 10px;
        margin: 5px;
        font-weight: 700;
        border: 1px solid #d3d3d3;
        box-shadow: 1px 2px 2px #d3d3d3;
      }

      &.profit {
        color: #5ad89f;
      }

      &.deficit {
        color: #fe4365;
      }

      &.empty {
        color: #d3d3d3;
      }
    }
  }
`
