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
  h2 {
    margin-top: 15px;
    margin-bottom: 30px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    span {
      :hover {
        color: var(--blue);
        cursor: pointer;
      }
    }
  }
  form {
    display: flex;
    width: 90%;
    flex-direction: column;
    button {
      background-color: var(--blue);
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
    .button-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      button {
        background-color: var(--blue);
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
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 400;
    height: 60px;
    background-color: var(--grey-0);
    border: none;
    border-radius: 8px;
    padding-left: 10px;
    margin-bottom: 20px;
    :focus {
      border: 2px solid var(--grey-100);
    }
  }
  .description {
    width: 100%;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 400;
    background-color: var(--grey-0);
    border: none;
    border-radius: 8px;
    padding-left: 10px;
    margin-bottom: 20px;
    height: 120px;
    :focus {
      border: 2px solid var(--grey-100);
    }
  }
  .sucesso {
    font-size: 20px;
    color: var(--blue);
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 30px;
  }
  .error {
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: normal;
    font-size: 15px;
    height: 20px;
  }
`;
