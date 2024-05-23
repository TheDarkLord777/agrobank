import * as S from "./Cards.styled.ts";
import { DollarCircle } from "iconsax-react";
import { ReactNode } from "react";

export const Cards = ({
  title = "Транзакции за месяц",
  price = "200 000 000 сум",
  icon = <DollarCircle size="32" color="#718096" />,
}: {
  title?: string;
  price?: string;
  icon?: ReactNode;
}) => {
  return (
    <S.Border>
      <S.CardTitle>
        {icon}
        {title}
      </S.CardTitle>
      <S.HorizontalLine />
      <S.BottomParent>
        <S.Price>{price}</S.Price>
        <S.BottomOfCard>
          <S.BottomIcon />
          <S.BottomText>5.14%</S.BottomText>
          <S.BottomTextPlus>Cравнение с прошлым месяцем</S.BottomTextPlus>
        </S.BottomOfCard>
      </S.BottomParent>
    </S.Border>
  );
};
