import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(51, 51, 51, 0.5);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: fit-content;
  background-color: var(--white);
  margin-top: 70px;
  border-radius: 8px;
  .error {
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: normal;
    font-size: 15px;
    height: 20px;
  }
  .sucesso {
    font-size: 20px;
    color: var(--green);
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }
  h2 {
    margin-top: 10px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    span {
      margin-top: 3px;
      color: var(--grey-50);
      :hover {
        color: var(--grey-100);
        cursor: pointer;
      }
    }
  }
  h3 {
    color: var(--green);
    background: rgba(17, 153, 94, 0.1);
    border-radius: 5px;
    padding: 10px;
  }
  p {
    font-weight: bold;
    font-size: 17px;
    width: 90%;
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  form {
    margin-top: 30px;
    width: 90%;
    .button-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      button {
        background-color: var(--green);
        padding: 20px 40px;
        color: var(--white);
        border-radius: 8px;
        margin-bottom: 33px;
        margin-top: 0px;
        :hover {
          border: 2px solid var(--grey-100);
          padding: 18px 40px;
        }
      }
      #greyButton {
        background-color: var(--grey-0);
        color: var(--grey-50);
      }
    }
  }
  input {
    width: 100%;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 400;
    height: 60px;
    background-color: var(--grey-0);
    border: none;
    border-radius: 8px;
    padding-left: 10px;
    :focus {
      border: 2px solid var(--grey-100);
    }
  }
`;

export const SelectDiv = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--green);
    background-color: var(--white);
    font-weight: 500;
    font-size: 14px;
    width: 82px;
    height: 40px;
    border-radius: 8px;

    :hover {
      cursor: pointer;
      background: rgba(17, 153, 94, 0.1);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 40px;
      border-radius: 8px;
    }
  }

  .selectedTech {
    background: rgba(17, 153, 94, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 40px;
    border-radius: 8px;
  }
`;
