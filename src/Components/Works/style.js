import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 85%;
  .cardWork {
    width: 100%;
    display: flex;
    margin-bottom: 40px;
    justify-content: start;
    border-right: 4px solid var(--grey-0);
    overflow-x: hidden;
    :hover {
      background: var(--grey-0);
      border-right: 4px solid var(--blue);
      cursor: pointer;
      span {
        background: var(--blue);
        cursor: pointer;
      }
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 35px;
      background: rgba(64, 60, 170, 0.1);
      height: 71px;
      width: 80px;
      border-radius: 5px;
      margin-right: 16px;
    }
    div {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      margin-top: 4px;
      h3 {
        font-size: 18px;
        margin-bottom: 6px;
      }
      p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--grey-50);
        font-size: 14px;
        margin-right: 5px;
      }
    }
  }
`;
