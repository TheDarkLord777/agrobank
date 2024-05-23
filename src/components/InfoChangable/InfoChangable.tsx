import {
  InfoChangableStyled,
  InfoLine,
  InfoTitle,
  InfoValue,
} from "./InfoChangable.styled.ts";

const InfoChangable = () => {
  return (
    <InfoChangableStyled>
      <InfoLine>
        <InfoTitle>Дата платежа</InfoTitle>
        <InfoValue>30/07/2023</InfoValue>
      </InfoLine>
      <InfoLine>
        <InfoTitle>дни просрочки</InfoTitle>
        <InfoValue>31</InfoValue>
      </InfoLine>
      <InfoLine>
        <InfoTitle>Место прописки</InfoTitle>
        <InfoValue>Тошкент ш, Миробод туман, Толарик 85</InfoValue>
      </InfoLine>
      <InfoLine>
        <InfoTitle>Фактический адрес</InfoTitle>
        <InfoValue>Тошкент ш, Миробод туман, Толарик 85</InfoValue>
      </InfoLine>
      <InfoLine>
        <InfoTitle>Место работы</InfoTitle>
        <InfoValue>ООО "Тошшахарнур"31</InfoValue>
      </InfoLine>
    </InfoChangableStyled>
  );
};
export default InfoChangable;
