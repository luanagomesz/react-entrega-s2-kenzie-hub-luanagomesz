import { Container, Content } from "./style";

function RegisterSucess({ history, setRegistred }) {
  return (
    <Container>
      <Content>
        <h2>Sucesso</h2>
        <h1>Yeesss!</h1>
        <p className="pGrey">Tudo certinho, seu cadastro deu bom demais</p>
        <p>Agora basta fazer seu login e começar sua jornada...</p>
        <button
          onClick={() => {
            history.push("/");
            setRegistred(false);
          }}
        >
          Ir para login
        </button>
      </Content>
    </Container>
  );
}

export default RegisterSucess;
