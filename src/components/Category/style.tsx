import styled from 'styled-components'

export const CategoryWrapper = styled.div`
  .category-label {
    padding: 0 20px;
    font-weight: 700;
  }

  .category-wrapper {
    height: 30vh;
    overflow: auto;
    text-align: center;

    .category-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;

      .category-item {
        //width: 33.3%;
        flex: 0 0 33.3333%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;

        &-content {
          width: 80%;
          height: 50px;
          border-radius: 10px;
          margin-bottom: 10px;
          border: 1px solid #61dafb;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          &.active {
            background: #bbe9ff;
            box-shadow: 1px 2px 2px #d3d3d3;

            > svg {
              transform-origin: center bottom;
              animation: wave 0.25s linear;
            }
          }

          > svg {
            margin-top: 2px;
            width: 1.2em;
            height: 1.2em;
          }

          &.newIcon {
            > svg {
              width: 1.6em;
              height: 1.6em;
            }
          }
        }

        &-edit {
          width: 80%;
          height: 50px;
          border-radius: 10px;
          margin-bottom: 10px;
          border: 1px solid #61dafb;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          &.active {
            background: #bbe9ff;
            box-shadow: 1px 2px 2px #d3d3d3;
          }

          > svg {
            margin-left: 4px;
          }
        }
      }
    }
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(8deg);
    }
    66% {
      transform: rotate(-8deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`
