import styled from 'styled-components'

export const CategoryFormWrapper = styled.div`
  height: 100%;

  .form-wrapper {
    height: 80%;
    //overflow: hidden;

    .form-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;

      .form-item {
        &:last-child {
          display: block;
          border-bottom: none;
        }

        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #d3d3d3;
        padding: 10px 0;
        justify-content: space-between;
        align-items: center;

        &-label {
          padding: 0 20px;
          font-weight: 700;
        }

        &-content {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        &-input {
          width: 250px;

          &.money {
            background: #bbe9ff;

            .ant-input {
              font-weight: 700;
              background: #bbe9ff;
            }
          }
        }
      }
    }
  }

  .button-wrapper {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    .btn-create {
      height: 40px;
      width: 80%;
      font-weight: 700;
    }
  }
`
