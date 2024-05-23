import {
  MapCircleBig,
  MapCircleInside,
  MapCircleSmall,
  MapCircleStyled,
} from "./MapCircle.styled.ts";
import { FC } from "react";
interface Positional {
  top: string;
  left: string;
}
const MapCircle: FC<{ pos: Positional[]; color: string }> = ({
  pos,
  color,
}) => {
  return (
    <MapCircleBig $pos={pos}>
      <MapCircleStyled>
        <MapCircleInside $color={color}>
          <MapCircleSmall $color={color}></MapCircleSmall>
        </MapCircleInside>
      </MapCircleStyled>
    </MapCircleBig>
  );
};
export default MapCircle;
