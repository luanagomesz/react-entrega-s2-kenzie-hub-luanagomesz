import { Content, Container } from "./StyleRegisterWork";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
function RegisterWork({ setAddWork, counter, setCounter }) {
  const [sucessUpdate, setSucces] = useState(false);

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    deploy_url: yup.string().required("Campo obrigatório"),
  });
  const token = window.localStorage.getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (user) => {
    console.log(user);
    post(user);
  };

  const post = (data) => {
    axios
      .post(`https://kenziehub.herokuapp.com/users/works/`, data, config)
      .then((response) => {
        console.log(response);
        setSucces(true);
        setCounter(counter + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Content>
        <h2>
          Cadastrar Trabalho
          <span>
            <AiOutlineClose onClick={() => setAddWork(false)} />
          </span>
        </h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            type="text"
            placeholder="Nome do Trabalho"
            {...register("title")}
          />
          <p className="error">{errors.title?.message}</p>
          <input
            type="text"
            placeholder="Link para o trabalho"
            {...register("deploy_url")}
          />
          <p className="error">{errors.deploy_url?.message}</p>
          <textarea
            type="textarea"
            className="description"
            placeholder="Descrição do Trabalho"
            {...register("description")}
          />
          <p className="error">{errors.description?.message}</p>
          <button type="submit">Cadastrar</button>
        </form>
        {sucessUpdate === true ? (
          <p className="sucesso">Adicionado com sucesso</p>
        ) : (
          ""
        )}
      </Content>
    </Container>
  );
}

export default RegisterWork;
