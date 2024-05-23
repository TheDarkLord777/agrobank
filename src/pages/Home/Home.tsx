import { Cards } from "../../components/Cards/Cards.tsx";
import * as S from "./Home.styled.ts";
import { CardTitleIcon } from "../../components/Cards/Cards.styled.ts";
import { Rechart } from "../../components/Recharts/Rechart.tsx";
import Map from "../../components/Map/Map.tsx";
import GraphicStats from "../../components/GraphicStats/GraphicStats.tsx";
import Graphic from "../../components/Graphic/Graphic.tsx";
import { FullBody } from "./Home.styled.ts";
import HeaderGraph from "../../components/HeaderGraph/HeaderGraph.tsx";
import { GraphicBody } from "../../components/Graphic/Graphic.styled.ts";

const data = [
  { name: "Active", value: 710602 },
  { name: "Not active", value: 345000 },
];

const Home = () => {
  fetch("http://localhost:5173/src/data.json")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching JSON:", error));
  return (
    <>
      <S.Container style={{ marginTop: "30px" }}>
        <Cards />
        <Cards title={"Транзакции за день"} />
        <Cards icon={<CardTitleIcon src="/src/assets/icons/humo.svg" />} />
        <Cards icon={<CardTitleIcon src="/src/assets/icons/uzcard.svg" />} />
      </S.Container>
      <S.Container>
        <Rechart text={"Клиенты"} switcher={["Юрд", "Физ"]} />
        <Rechart text={"Карты"} switcher={["Хумо", "Uzcard"]} data={data} />
      </S.Container>
      <S.Container>
        <Map />
      </S.Container>
      <S.Container
        style={{
          gap: 0,
          marginBottom: "37px",
        }}
      >
        <FullBody>
          <HeaderGraph />
          <GraphicBody>
            <Graphic></Graphic>
            <GraphicStats></GraphicStats>
          </GraphicBody>
        </FullBody>
      </S.Container>
    </>
  );
};
export default Home;
