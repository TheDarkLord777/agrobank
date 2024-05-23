import {
  HeaderGraphStyled,
  LeftHolder,
  StatusBar,
  StatusBlock,
  TitleBar,
} from "./HeaderGraph.styled.ts";
import { Status } from "../shared/StatusCircle/Status.styled.tsx";
// import Date from "../Date/Date.tsx";
import AntRangePicker from "../AntRangePicker/AntRangePicker.tsx";

const HeaderGraph = () => {
  return (
    <HeaderGraphStyled>
      <LeftHolder>
        <TitleBar>Задолженности по кредитам</TitleBar>
        <StatusBar>
          <StatusBlock>
            <Status $color={"#3C4BDC"} />
            Uzcard
          </StatusBlock>
          <StatusBlock>
            <Status $color={"#FE9A38"} />
            Humo card
          </StatusBlock>
          <StatusBlock></StatusBlock>
        </StatusBar>
      </LeftHolder>
      <AntRangePicker />
    </HeaderGraphStyled>
  );
};
export default HeaderGraph;
