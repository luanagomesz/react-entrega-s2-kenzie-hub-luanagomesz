import { Container } from "./style";
import { BiNetworkChart } from "react-icons/bi";
function Works({ data, setUpdateWork, setSelectedId }) {
  return (
    <Container>
      {data.map((item) => (
        <div
          id={item.id}
          onClick={() => {
            setSelectedId(item.id);

            setUpdateWork(true);
          }}
          className="cardWork"
        >
          <span>
            <BiNetworkChart />
          </span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Works;
