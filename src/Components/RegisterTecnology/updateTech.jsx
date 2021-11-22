import { Container, Content, SelectDiv } from "./styleUpdateTech";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

function UpdateTech({ id, setUpdateTech, techName, setCounter, counter }) {
  const [sucessUpdate, setSucces] = useState(false);

  const formSchema = yup.object().shape({
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
      .put(`https://kenziehub.herokuapp.com/users/techs/${id}`, data, config)
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

  const deleteTech = () => {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, config)
      .then((response) => {
        console.log(response);
        setSucces("deleted");
        setUpdateTech(false);
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
          Alterar Tecnologia
          <span>
            <AiOutlineClose onClick={() => setUpdateTech(false)} />
          </span>
        </h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h3>{techName}</h3>
          <p>selecionar status:</p>
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
          <div className="button-container">
            <button type="submit">Salvar Alterações</button>
            <button onClick={() => deleteTech()} type="button" id="greyButton">
              Excluir Tecnologia
            </button>
          </div>
        </form>
        {sucessUpdate === true ? (
          <p className="sucesso">Modificado com sucesso</p>
        ) : (
          ""
        )}
        {sucessUpdate === "deleted" ? (
          <p className="sucesso">Removido Com sucesso</p>
        ) : (
          ""
        )}
      </Content>
    </Container>
  );
}

export default UpdateTech;
