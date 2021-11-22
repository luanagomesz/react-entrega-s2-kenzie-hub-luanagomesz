import { Container, Content, SelectDiv } from "./StyleRegisterTech";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
function RegisterTecnology({ setCounter, counter, setAddTech }) {
  const [sucessUpdate, setSucces] = useState(false);

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Escolha seu nível"),
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
      .post(`https://kenziehub.herokuapp.com/users/techs/`, data, config)
      .then((response) => {
        console.log(response);
        setSucces(true);
        setCounter(counter + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setClassButtons = (selected) => {
    let selectedButton = document.getElementById(selected);
    let containerModulos = document.getElementById("selectedDiv");
    let arr = Array.from(containerModulos.children);
    arr.map((item) => {
      if (item.id === selectedButton.id) {
        item.classList.add("selectedTech");
      } else if (item.id !== selectedButton.id) {
        item.classList.remove("selectedTech");
      }
    });
  };
  return (
    <Container>
      <Content>
        <h2>
          Cadastrar Tecnologia
          <span>
            <AiOutlineClose onClick={() => setAddTech(false)} />
          </span>
        </h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            type="text"
            placeholder="Nome da Tecnologia"
            {...register("title")}
          />
          <p className="error">{errors.title?.message}</p>
          <p>Selecionar status</p>
          <SelectDiv id="selectedDiv">
            <span
              id="Iniciante"
              onClick={(event) => {
                setValue("status", event.target.id);
                setClassButtons(event.target.id);
              }}
            >
              Iniciante
            </span>
            <span
              id="Intermediário"
              onClick={(event) => {
                setValue("status", event.target.id);
                setClassButtons(event.target.id);
              }}
            >
              Intermediário
            </span>
            <span
              id="Avançado"
              onClick={(event) => {
                setValue("status", event.target.id);
                setClassButtons(event.target.id);
              }}
            >
              Avançado
            </span>
          </SelectDiv>
          <p className="error">{errors.status?.message}</p>
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

export default RegisterTecnology;
