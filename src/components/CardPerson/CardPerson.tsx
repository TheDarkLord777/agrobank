import {
  BottomCardPerson,
  ButtonCardPerson,
  CardPersonHeader,
  CardPersonStyled,
  Container,
  FullName,
  IconHideVis,
} from "./CardPerson.styled.ts";
import { FC, useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";
interface CardPerson {
  number: string;
  color?: string;
}
const CardPerson: FC<CardPerson> = ({ number, color }) => {
  const hiddennumber =
    number.substring(0, 10) + "**** **" + number.substring(17, 20);
  const [ishidden, setIsHidden] = useState(true);
  const [hideshownumber, setHideshownumber] = useState(hiddennumber);

  const HideShow = () => {
    setIsHidden((prevState) => !prevState);
    if (ishidden) {
      setHideshownumber(number);
    } else {
      setHideshownumber(hiddennumber);
    }
  };

  return (
    <CardPersonStyled $color={color}>
      <CardPersonHeader>
        {hideshownumber}
        <IconHideVis onClick={HideShow}>
          {ishidden ? (
            <EyeSlash size="16" color="#fff" />
          ) : (
            <Eye size="16" color="#fff" />
          )}
        </IconHideVis>
      </CardPersonHeader>
      <Container>
        <FullName>Азаматов Азамат Азаматович</FullName>
        <BottomCardPerson>
          <ButtonCardPerson $color={color}>Заемщик</ButtonCardPerson>
        </BottomCardPerson>
      </Container>
    </CardPersonStyled>
  );
};
export default CardPerson;
