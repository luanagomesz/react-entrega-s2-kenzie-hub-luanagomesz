import {
  Container,
  Content,
  ContainerPortfolio,
  CardPerfil,
  CardPerfilGreen,
} from "./style";
import { RiCellphoneLine } from "react-icons/ri";
import { AiOutlineMail, AiOutlinePlus } from "react-icons/ai";
import Works from "../../Components/Works";
import Tecnologies from "../../Components/Tecnologies";
import UpdateTech from "../../Components/RegisterTecnology/updateTech";
import { useEffect, useState } from "react";
import axios from "axios";
import RegisterTecnology from "../../Components/RegisterTecnology/Register";
import RegisterWork from "../../Components/RegisterWork/Register";
import UpdateWork from "../../Components/RegisterWork/updateWork";
import defaultImg from "./defaultUser.jpg";

function Profile({ data, history, user, setData }) {
  const [updateTech, setUpdateTech] = useState(false);
  const [techName, setTechName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [counter, setCounter] = useState(0);
  const [addTech, setAddTech] = useState(false);
  const [addWork, setAddWork] = useState(false);
  const [updateWork, setUpdateWork] = useState(false);

  useEffect(() => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions/", user)
      .then((response) => {
        console.log(response);

        setData(response.data.user);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [counter, history]);

  return (
    <Container>
      {updateWork === true ? (
        <UpdateWork
          counter={counter}
          setCounter={setCounter}
          id={selectedId}
          setUpdateWork={setUpdateWork}
        />
      ) : (
        ""
      )}
      {addWork === true ? (
        <RegisterWork
          setAddWork={setAddWork}
          counter={counter}
          setCounter={setCounter}
        />
      ) : (
        ""
      )}
      {addTech === true ? (
        <RegisterTecnology
          counter={counter}
          setCounter={setCounter}
          setAddTech={setAddTech}
        />
      ) : (
        ""
      )}

      {updateTech === true ? (
        <UpdateTech
          id={selectedId}
          setUpdateTech={setUpdateTech}
          techName={techName}
          setCounter={setCounter}
          counter={counter}
        />
      ) : (
        ""
      )}
      <Content>
        <header>
          <div>
            <h1>Kenzie</h1> <h2>Hub</h2>
          </div>
          {data.avatar_url !== null ? (
            <img src={data.avatar_url} />
          ) : (
            <img src={defaultImg} />
          )}
        </header>
        <ContainerPortfolio>
          <div className="tecnologias">
            <div className="container-top">
              <h3>Minhas Tecnologias</h3>
              <span onClick={() => setAddTech(true)}>
                <AiOutlinePlus />
              </span>
            </div>
            <Tecnologies
              data={data.techs}
              setSelectedId={setSelectedId}
              setUpdateTech={setUpdateTech}
              setTechName={setTechName}
            />
          </div>
          <div className="trabalhos">
            <div className="container-top">
              <h3>Meus Trabalhos</h3>
              <span onClick={() => setAddWork(true)}>
                <AiOutlinePlus />
              </span>
            </div>
            <Works
              data={data.works}
              setUpdateWork={setUpdateWork}
              setSelectedId={setSelectedId}
            />
          </div>
          <div className="perfil">
            <div className="containerBlue">
              {data.avatar_url !== null ? (
                <img src={data.avatar_url} />
              ) : (
                <img src={defaultImg} />
              )}
              <div>
                <h4>{data.name}</h4>
                <p>{data.course_module}</p>
              </div>
            </div>
            <CardPerfil>
              <span>
                <RiCellphoneLine />
              </span>
              <div>
                <h4 id="call">Ligar agora</h4>
                <p>{data.contact}</p>
              </div>
            </CardPerfil>
            <CardPerfilGreen>
              <span>
                <AiOutlineMail />
              </span>
              <div>
                <h4 id="call">Enviar email</h4>
                <p>{data.email}</p>
              </div>
            </CardPerfilGreen>
            <button
              onClick={() => {
                history.push("/");
                window.localStorage.clear();
              }}
            >
              Sair
            </button>
          </div>
        </ContainerPortfolio>
      </Content>
    </Container>
  );
}

export default Profile;
