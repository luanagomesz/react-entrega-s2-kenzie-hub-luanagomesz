import styled from "styled-components";

export const Container = styled.div`
  transition: 500ms;
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;

  justify-content: center;
  background: rgba(51, 51, 51, 0.5);
`;

export const Content = styled.div`
  margin-top: 100px;
  width: 500px;
  height: fit-content;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  h1 {
    font-size: 28px;
    margin-top: 70px;
  }
  h2 {
    margin-top: 13px;
    display: flex;
    width: 90%;
    font-size: 18px;
  }
  p {
    font-size: 14px;
    color: var(--grey-100);
    margin-bottom: 56px;
  }
  .pGrey {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 16px;
    color: var(--grey-50);
  }
  button {
    background-color: var(--green);
    color: var(--white);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    width: 90%;
    height: 60px;
    border-radius: 8px;
    margin-bottom: 40px;
    :hover {
      border: 2px solid var(--grey-100);
    }
  }
`;
