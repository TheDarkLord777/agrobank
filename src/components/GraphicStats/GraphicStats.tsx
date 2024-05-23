import { GraphicContainer, GraphicStatsStyled } from "./GraphicStats.styled.ts";
import GraphicInfo from "./components/GraphicInfo.tsx";

const GraphicStats = () => {
  return (
    <GraphicContainer>
      <GraphicStatsStyled>
        <GraphicInfo />
        <GraphicInfo icon="/src/assets/icons/2.png" />
        <GraphicInfo />
        <GraphicInfo icon="/src/assets/icons/2.png" />
      </GraphicStatsStyled>
    </GraphicContainer>
  );
};
export default GraphicStats;
