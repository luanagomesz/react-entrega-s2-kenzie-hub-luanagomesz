import { Container, Title } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Content } from "./style";
import { useState } from "react";

function Login({ setData, setLogged, history, setUser }) {
  const [error, setError] = useState("");

  const formSchema = yup.object().shape({
    email: yup.string(),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (user) => {
    setUser(user);
    post(user);
  };

  const post = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions/", data)
      .then((response) => {
        setError("");
        console.log(response);
        setLogged(true);
        setData(response.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
      })
      .catch((err) => {
        console.log(err.status);
        setError("email/senha incorretos");
        setLogged(false);
      });
  };

  return (
    <Container>
      <Title>
        <h1>Kenzie</h1> <h2>Hub</h2>
      </Title>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input placeholder="Login" {...register("email")} />
          <input
            className="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p className="error">{error}</p>
          <button className="blueButton" type="submit">
            Logar
          </button>
          <p>
            Criar uma Página para mostar suas{" "}
            <span>habilidades metas e progresso</span>
          </p>
          <button
            onClick={() => history.push("/register")}
            className="whiteButton"
          >
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
