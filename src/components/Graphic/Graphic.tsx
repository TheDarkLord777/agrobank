import { GraphicStyled } from "./Graphic.styled.ts";
import LinearGraph from "../LinearGraph/LinearGraph.tsx";

const Graphic = () => {
  return (
    <GraphicStyled>
      <LinearGraph />
    </GraphicStyled>
  );
};
export default Graphic;
