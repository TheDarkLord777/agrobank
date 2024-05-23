import {
  CirleForActive,
  WorkingOrNotStyled,
  WorkingOrNotText,
} from "./WorkingOrNot.styled.ts";
import { ArrowRight2 } from "iconsax-react";

const WorkingOrNot = () => {
  return (
    <WorkingOrNotStyled>
      <CirleForActive />
      <WorkingOrNotText>Система работает</WorkingOrNotText>
      <ArrowRight2 size="14" color="#0caf60" />
    </WorkingOrNotStyled>
  );
};
export default WorkingOrNot;
