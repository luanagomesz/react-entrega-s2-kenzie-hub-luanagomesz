import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 120px;
  margin-bottom: 54px;
  h2 {
    margin-top: 3px;
    margin-left: 5px;
    color: var(--white);
    background: var(--blue);
    border-radius: 2px;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #f5f5f5;
  border-radius: 10px;
  width: 480px;
  height: 426px;
  background-color: #ffffff;
  @media (max-width: 520px) {
    width: 90%;
    min-width: 320px;
  }

  p {
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    color: var(--grey-50);
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
    span {
      color: var(--grey-100);
      font-size: 14px;
    }
  }
  .password {
    margin-bottom: 0px;
  }
  .error {
    height: 25px;
    margin: 0px;
  }
  .blueButton {
    background-color: var(--blue);
    color: var(--white);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    width: 90%;
    height: 60px;
    border-radius: 8px;
  }
  .whiteButton {
    background-color: var(--grey-0);
    color: var(--grey-50);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    width: 90%;
    height: 60px;
    border-radius: 8px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      width: 90%;
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
  }
`;
