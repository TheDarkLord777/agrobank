import {
  BackgroundIcon,
  GraphicInfoStyled,
  GraphicStatsNumber,
  GraphicStatsText,
} from "./GraphicInfo.styled.ts";
import { FC } from "react";

interface Icons {
  icon?: string;
}
const GraphicInfo: FC<Icons> = ({ icon = "/src/assets/icons/1.png" }) => {
  return (
    <GraphicInfoStyled>
      <BackgroundIcon src={icon} />
      <GraphicStatsNumber>2 120 000 000</GraphicStatsNumber>
      <GraphicStatsText>Начала месяца</GraphicStatsText>
    </GraphicInfoStyled>
  );
};
export default GraphicInfo;
