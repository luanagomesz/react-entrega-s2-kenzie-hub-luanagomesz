import { Container } from "./style";
import { GrTechnology } from "react-icons/gr";
import { useEffect, useState } from "react";
function Tecnologies({ data, setSelectedId, setUpdateTech, setTechName }) {
  return (
    <Container>
      {data.map((item) => (
        <div
          id={item.id}
          onClick={() => {
            setSelectedId(item.id);
            setTechName(item.title);
            setUpdateTech(true);
          }}
          className="cardTech"
        >
          <span>
            <GrTechnology />
          </span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.status}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Tecnologies;
