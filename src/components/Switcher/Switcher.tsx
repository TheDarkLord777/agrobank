import { SwitcherButton, SwitcherStyled } from "./Switcher.styled.ts";
import { FC, useState } from "react";
interface UseData {
  data?: Array<string>;
}

const Switcher: FC<UseData> = ({ data = [] }) => {
  const [active, setActive] = useState(true);
  return (
    <SwitcherStyled>
      <SwitcherButton
        $active={!active}
        onClick={() => {
          setActive(false);
        }}
      >
        {data[0]}
      </SwitcherButton>
      <SwitcherButton
        $active={active}
        onClick={() => {
          setActive(true);
        }}
      >
        {data[1]}
      </SwitcherButton>
    </SwitcherStyled>
  );
};
export default Switcher;
