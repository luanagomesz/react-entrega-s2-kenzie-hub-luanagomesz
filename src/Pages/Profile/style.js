import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--grey-0);
`;

export const Content = styled.div`
  width: 85%;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: var(--white);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 28px;

    img {
      width: 50px;
      border-radius: 100%;
      margin-left: 35px;
      margin-right: 25px;
    }
    div {
      display: flex;
    }
    h1 {
      margin-left: 23px;
    }
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
  }
`;

export const ContainerPortfolio = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  .perfil {
    width: 30%;
    max-width: 366px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    height: fit-content;

    button {
      width: 80%;
      height: 60px;
      border-radius: 8px;
      margin-bottom: 20px;
      color: var(--grey-50);
      :hover {
        border: 2px solid var(--grey-100);
      }
    }
    h4 {
      font-size: 18px;
      color: var(--white);
    }
    .containerBlue {
      border-radius: 10px 10px 0px 0px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100px;
      background-color: var(--blue);
      margin-bottom: 24px;
      img {
        width: 70px;
        border-radius: 100%;
        margin-left: 35px;
        margin-right: 8px;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        p {
          margin-top: 5px;
          font-size: 12px;
          color: var(--white);
        }
      }
    }
  }
  //
  //
  //
  //
  //
  .trabalhos {
    width: 30%;
    max-width: 366px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    max-height: 50vh;
    overflow-y: auto;
    align-items: center;
    background-color: var(--white);
    border-radius: 8px;
    overflow-x: hidden;
    .container-top {
      align-items: center;
      font-size: 22px;
      margin-top: 15px;
      display: flex;
      width: 85%;
      justify-content: space-between;
      margin-bottom: 40px;
      h3 {
        font-size: 20px;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 34px;
        width: 43px;
        border-radius: 5px;
        background-color: var(--blue);
        color: var(--white);
        :hover {
          cursor: pointer;
          background-color: rgba(78, 71, 255, 0.5);
          color: var(--grey-100);
        }
      }
    }
  }
  .trabalhos::-webkit-scrollbar {
    border-radius: 0px;
    width: 13px;
  }
  .trabalhos::-webkit-scrollbar-track {
    background: var(--grey-50);
    border-radius: 5px;
    width: 10px;
  }
  .trabalhos::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border-radius: 10px;
    border: 2px solid var(--grey-100);
  }

  //
  //
  //
  //
  .tecnologias {
    width: 30%;
    max-width: 366px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    max-height: 50vh;
    overflow-y: auto;
    align-items: center;
    background-color: var(--white);
    border-radius: 8px;
    overflow-x: hidden;
    .container-top {
      align-items: center;
      font-size: 22px;
      margin-top: 15px;
      display: flex;
      width: 85%;
      justify-content: space-between;
      margin-bottom: 40px;
      h3 {
        font-size: 20px;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 34px;
        width: 43px;
        border-radius: 5px;
        background-color: var(--green);
        color: var(--white);
        :hover {
          cursor: pointer;
          background-color: rgba(17, 153, 94, 0.5);
          color: var(--grey-100);
        }
      }
    }
  }
  .tecnologias::-webkit-scrollbar {
    border-radius: 0px;
    width: 13px;
  }
  .tecnologias::-webkit-scrollbar-track {
    background: var(--grey-50);
    border-radius: 5px;
    width: 10px;
  }
  .tecnologias::-webkit-scrollbar-thumb {
    background-color: var(--green);
    border-radius: 10px;
    border: 2px solid var(--grey-100);
  }
`;

export const CardPerfil = styled.div`
  width: 80%;
  height: 65px;
  background: rgba(64, 60, 170, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  span {
    font-size: 30px;
    background-color: var(--blue);
    height: 80%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border-radius: 5px;
    color: var(--white);
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    #call {
      font-size: 16px;
      margin-bottom: 5px;
      color: var(--grey-100);
      display: flex;
      justify-content: baseline;
      width: 100%;
    }
    p {
      color: var(--grey-50);
      font-size: 12px;
    }
  }
`;

export const CardPerfilGreen = styled.div`
  width: 80%;
  height: 65px;
  background: rgba(17, 153, 94, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin-bottom: 19px;

  span {
    font-size: 30px;
    background-color: var(--blue);
    height: 80%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border-radius: 5px;
    color: var(--white);
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    #call {
      display: flex;
      justify-content: baseline;
      width: 100%;
      font-size: 16px;
      margin-bottom: 5px;
      color: var(--grey-100);
    }
    p {
      color: var(--grey-50);
      font-size: 12px;
    }
  }
`;
