import {
  CardInfoStyled,
  Line,
  TextInfo,
  ValueInfo,
} from "./CardInfo.styled.ts";
import { ButtonStyled } from "../shared/Buttons/Button.styled.ts";
import { Danger, TickSquare } from "iconsax-react";
import { FC } from "react";
interface CardInfoProps {
  warning?: boolean;
}
const CardInfo: FC<CardInfoProps> = ({ warning = false }) => {
  return (
    <CardInfoStyled>
      <Line>
        <TextInfo>Баланс</TextInfo>
        <ValueInfo>56 000 300.00 UZS</ValueInfo>
      </Line>
      <Line>
        <TextInfo>Телефон</TextInfo>
        <ValueInfo>+998 (90) 435 54 54</ValueInfo>
      </Line>
      <Line>
        <TextInfo>Статус</TextInfo>
        <ValueInfo>
          {!warning ? (
            <ButtonStyled
              size={"small"}
              $variant={"plain"}
              $font={"medium"}
              width={"140px"}
              style={{ fontSize: "14px" }}
            >
              <TickSquare size="20" /> Подтвержден
            </ButtonStyled>
          ) : (
            <ButtonStyled
              $variant={"warning"}
              width={"165px"}
              size={"small"}
              $font={"medium"}
              style={{ fontSize: "14px" }}
            >
              <Danger size="20" />
              Не подтвержден
            </ButtonStyled>
          )}
        </ValueInfo>
      </Line>
    </CardInfoStyled>
  );
};
export default CardInfo;
