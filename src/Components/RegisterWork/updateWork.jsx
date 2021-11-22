import { Content, Container } from "./StyleRegisterWork";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
function UpdateWork({ counter, setCounter, id, setUpdateWork }) {
  const [sucessUpdate, setSucces] = useState(false);

  const formSchema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    deploy_url: yup.string(),
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
      .put(`https://kenziehub.herokuapp.com/users/works/${id}`, data, config)
      .then((response) => {
        console.log(response);
        setSucces(true);
        setCounter(counter + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteWork = () => {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/works/${id}`, config)
      .then((response) => {
        console.log(response);
        setUpdateWork(false);
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
          Atualizar Trabalho
          <span>
            <AiOutlineClose onClick={() => setUpdateWork(false)} />
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
          <div className="button-container">
            <button type="submit">Atualizar</button>
            <button onClick={() => deleteWork()} type="button" id="greyButton">
              Excluir Trabalho
            </button>
          </div>
        </form>
        {sucessUpdate === true ? (
          <p className="sucesso">Modificado com sucesso</p>
        ) : (
          ""
        )}
      </Content>
    </Container>
  );
}

export default UpdateWork;
