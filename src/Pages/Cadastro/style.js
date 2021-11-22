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
  margin-top: 30px;
  margin-bottom: 54px;
  h1 {
    cursor: pointer;
  }
  h2 {
    cursor: pointer;
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
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 40px;
  span {
    display: flex;
    justify-content: center;
    height: 25px;
    font-size: 15px;
    width: 90%;
    p {
      color: var(--grey-50);
      display: block;
      font-size: 13px;
      margin: 0px;
      width: 90%;
    }
  }
  p {
    display: flex;
    width: 90%;
    margin-bottom: 25px;
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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      width: 90%;

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

export const ContainerModulos = styled.div`
  display: flex;
  width: 90%;

  justify-content: space-between;

  input {
    display: none;
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--blue);
    background-color: var(--white);
    font-weight: 500;
    font-size: 14px;
    width: 82px;
    height: 40px;
    border-radius: 8px;

    :hover {
      cursor: pointer;
      background: rgba(78, 71, 255, 0.1);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 82px;
      height: 40px;
      border-radius: 8px;
    }
  }

  .selectedButton {
    background: rgba(78, 71, 255, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 82px;
    height: 40px;
    border-radius: 8px;
  }
`;
