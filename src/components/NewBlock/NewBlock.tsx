import {
  NewBlockFirstLine,
  NewBlockSecondLine,
  NewBlockStyled,
} from "./NewBlock.styled.ts";
import { FC } from "react";
import { ArrowRight2 } from "iconsax-react";
interface NewBlockStyled {
  price: string;
  icon: string;
}
const NewBlock: FC<NewBlockStyled> = ({ price, icon }) => {
  return (
    <NewBlockStyled>
      <NewBlockFirstLine $icon={icon}>Название банка</NewBlockFirstLine>
      <NewBlockSecondLine>
        {price}
        <ArrowRight2 size="18" color="#A0AEC0" />
      </NewBlockSecondLine>
    </NewBlockStyled>
  );
};
export default NewBlock;
