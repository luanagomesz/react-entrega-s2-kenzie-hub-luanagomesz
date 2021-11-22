import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 85%;
  .cardTech {
    display: flex;
    margin-bottom: 40px;
    justify-content: start;
    border-right: 4px solid var(--grey-0);
    overflow-x: hidden;
    width: 100%;
    :hover {
      background: var(--grey-0);
      border-right: 4px solid var(--green);
      cursor: pointer;
      span {
        background: var(--green);
        cursor: pointer;
      }
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 35px;
      background: rgba(17, 153, 94, 0.1);

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
      margin-top: 5px;
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        margin-top: 2px;
        color: var(--green);
        background: #e7f5ef;
        font-size: 14px;
        margin-right: 5px;
        padding: 8px 20px;
        border-radius: 8px;
      }
    }
  }
`;
