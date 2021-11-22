import { Container, Title, Content, ContainerModulos } from "./style";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import RegisterSucess from "../../Components/RegisterSucess";
import { useState } from "react";
function Cadastro({ history }) {
  const [registred, setRegistred] = useState(false);
  const phoneRegex =
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;
  const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

  const formSchema = yup.object().shape({
    email: yup.string().required("Email inválido").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        passwordRegex,
        "Deve conter ao menos 6 caracteres incluindo um numero"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais")
      .required("Senha obrigatória"),
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(nameRegex, "Somente Letras"),
    bio: yup.string().required("Bio obrigátoria"),
    contact: yup
      .string()
      .required("Telefone obrigatório")
      .matches(phoneRegex, "Telefone invalido"),
    course_module: yup.string().required("Selecione um módulo"),
  });

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
      .post("https://kenziehub.herokuapp.com/users/", data)
      .then((response) => {
        console.log(response);
        setRegistred(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const setClassButtons = (selected) => {
    let selectedButton = document.getElementById(selected);
    let containerModulos = document.getElementById("containerModulos");
    let arr = Array.from(containerModulos.children);
    arr.map((item) => {
      if (item.id === selectedButton.id) {
        item.classList.add("selectedButton");
      } else if (item.id !== selectedButton.id) {
        item.classList.remove("selectedButton");
      }
    });
  };

  return (
    <>
      {registred === true ? (
        <RegisterSucess history={history} setRegistred={setRegistred} />
      ) : (
        ""
      )}
      <Container>
        <Title>
          <h1 onClick={() => history.push("/")}>Kenzie</h1>{" "}
          <h2 onClick={() => history.push("/")}>Hub</h2>
        </Title>
        <Content>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Nome" {...register("name")} />
            <span>
              <p>{errors.name?.message}</p>
            </span>
            <input placeholder="Email" {...register("email")} />
            <span>
              <p>{errors.email?.message}</p>
            </span>
            <input placeholder="Bio" {...register("bio")} />
            <span>
              <p>{errors.bio?.message}</p>
            </span>
            <input placeholder="Telefone" {...register("contact")} />
            <span>
              <p>{errors.contact?.message}</p>
            </span>
            <p>Selecionar módulo:</p>
            <ContainerModulos id="containerModulos">
              <span
                id="Primeiro Módulo"
                onClick={(event) => {
                  setValue("course_module", event.target.id);
                  setClassButtons(event.target.id);
                }}
              >
                Primeiro
              </span>
              <span
                id="Segundo Módulo"
                onClick={(event) => {
                  setValue("course_module", event.target.id);
                  setClassButtons(event.target.id);
                }}
              >
                Segundo
              </span>
              <span
                id="Terceiro Módulo"
                onClick={(event) => {
                  setValue("course_module", event.target.id);
                  setClassButtons(event.target.id);
                }}
              >
                Terceiro
              </span>
              <span
                id="Quarto Módulo"
                onClick={(event) => {
                  setValue("course_module", event.target.id);
                  setClassButtons(event.target.id);
                }}
              >
                Quarto
              </span>
            </ContainerModulos>
            <span>
              <p>{errors.course_module?.message}</p>
            </span>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <span>
              <p>{errors.password?.message}</p>
            </span>
            <input
              type="password"
              placeholder="Confirmar Senha"
              {...register("confirmPassword")}
            />
            <span>
              <p>{errors.confirmPassword?.message}</p>
            </span>
            <button className="blueButton" type="submit">
              Cadastrar
            </button>
          </form>
        </Content>
      </Container>
    </>
  );
}

export default Cadastro;
