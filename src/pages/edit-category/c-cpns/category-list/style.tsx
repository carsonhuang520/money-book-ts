import styled from 'styled-components'

export const CategoryListWrapper = styled.div`
  .categoryList {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;

    > li {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 45px;
      border-bottom: 1px solid #d3d3d3;

      .categoryList-item {
        display: flex;
        justify-content: center;
        align-items: center;

        > svg {
          padding: 5px;
          margin-right: 5px;
          width: 26px;
          height: 26px;
        }
      }
    }
  }
`
