import {
  ArrowRIght,
  Avatar,
  BigBorderCard,
  BorderCard,
  BottomClientCard,
  Container,
  GetherBlock,
  InfoUser,
  InfoUserInside,
  InsideSwitcher,
  InsideUserLeft,
  NewContainer,
  NewContainerHeader,
  SwitcherNext,
  TitleOfInfo,
  TitleText,
  UserLeft,
  UserLeftNames,
  UserLeftNamesFirst,
  UserName,
  UserRight,
  UserSettingsStyled,
  ValueOfInfo,
} from "./UserSettings.styled.ts";
import { Add, Math } from "iconsax-react";
import { ButtonStyled } from "../../components/shared/Buttons/Button.styled.ts";
import NewBlock from "../../components/NewBlock/NewBlock.tsx";
import { useState } from "react";
import InfoChangable from "../../components/InfoChangable/InfoChangable.tsx";
import CardPerson from "../../components/CardPerson/CardPerson.tsx";
import CardInfo from "../../components/CardInfo/CardInfo.tsx";
import { HorizontalLine } from "../../components/Cards/Cards.styled.ts";
import TransactionTable from "../../components/TransactionTable/TransactionTable.tsx";

const UserSettings = () => {
  const [selected, setSelected] = useState(0);
  return (
    <UserSettingsStyled>
      <UserLeft>
        <Container>
          <InsideUserLeft>
            <Avatar src="/src/assets/images/Avatar.png" alt="avatar" />
            <GetherBlock>
              <UserLeftNames>
                <UserLeftNamesFirst>Заемщик</UserLeftNamesFirst>
              </UserLeftNames>
              <UserName>Азаматов Азамат Азаматович</UserName>
            </GetherBlock>
            <ButtonStyled
              size={"large"}
              $variant={"plain"}
              $font={"medium"}
              width={"100%"}
            >
              <Math size="32" color="#00CD69" variant="Bold" /> График погошения
            </ButtonStyled>
            <InfoUser>
              <InfoUserInside>
                <TitleOfInfo>Филиал</TitleOfInfo>
                <ValueOfInfo>00394</ValueOfInfo>
                <ArrowRIght />
              </InfoUserInside>
              <InfoUserInside>
                <TitleOfInfo>Дата договора</TitleOfInfo>
                <ValueOfInfo>10.12.2022</ValueOfInfo>
                <ArrowRIght />
              </InfoUserInside>
              <InfoUserInside>
                <TitleOfInfo>Остаток основного долга</TitleOfInfo>
                <ValueOfInfo>9 345 945.44 UZS</ValueOfInfo>
                <ArrowRIght />
              </InfoUserInside>
              <InfoUserInside>
                <TitleOfInfo>Начисленные %</TitleOfInfo>
                <ValueOfInfo>1 644 600.56 UZS</ValueOfInfo>
                <ArrowRIght />
              </InfoUserInside>
              <InfoUserInside>
                <TitleOfInfo>Следующий платеж</TitleOfInfo>
                <ValueOfInfo>1 567 345.56 UZS</ValueOfInfo>
                <ArrowRIght />
              </InfoUserInside>
            </InfoUser>
          </InsideUserLeft>
        </Container>
        <NewBlock
          price={"50 000 0000 0000 Uzs"}
          icon={"src/assets/icons/bank.png"}
        />
        <NewBlock
          price={"130 0000 0000 Uzs"}
          icon={"src/assets/icons/icon2.png"}
        />
      </UserLeft>

      <UserRight>
        <SwitcherNext>
          <InsideSwitcher
            $isselected={selected === 0}
            onClick={() => setSelected(0)}
          >
            Основная информация
          </InsideSwitcher>
          <InsideSwitcher
            $isselected={selected === 1}
            onClick={() => setSelected(1)}
          >
            Карты клиент
          </InsideSwitcher>
          <InsideSwitcher
            $isselected={selected === 2}
            onClick={() => setSelected(2)}
          >
            Платежи
          </InsideSwitcher>
          <InsideSwitcher
            $isselected={selected === 3}
            onClick={() => setSelected(3)}
          >
            Поручителей
          </InsideSwitcher>
        </SwitcherNext>
        <InfoChangable />
        <NewContainer>
          <NewContainerHeader>
            <TitleText>Карты клиента</TitleText>
            <ButtonStyled
              $variant={"plain"}
              $font={"medium"}
              size={"small"}
              style={{ fontSize: "12px", width: "140px" }}
            >
              <Add size="20" color="#00CD69" />
              Добавить карту
            </ButtonStyled>
          </NewContainerHeader>
          <HorizontalLine />
          <BigBorderCard>
            <BorderCard>
              <CardPerson number={"9860 6877 7777 5256"} />
              <CardInfo />
            </BorderCard>
          </BigBorderCard>
          <BigBorderCard>
            <BorderCard>
              <CardPerson number={"9860 6877 7777 1947"} color={"#55C790"} />
              <CardInfo warning={true} />
            </BorderCard>
          </BigBorderCard>
          <HorizontalLine />
          <BottomClientCard>
            К оплате 1 500 000.00 UZS
            <ButtonStyled $variant={"primary"} $font={"medium"} width={"148px"}>
              Оплатить
            </ButtonStyled>
          </BottomClientCard>
        </NewContainer>
        <NewContainer>
          <NewContainerHeader>
            <TitleText>Платежи</TitleText>
            <ButtonStyled
              $variant={"plain"}
              $font={"medium"}
              size={"small"}
              style={{ fontSize: "12px", width: "140px" }}
            >
              Смотреть еще
            </ButtonStyled>
          </NewContainerHeader>
          <HorizontalLine />
          <TransactionTable />
        </NewContainer>

        <InfoChangable />
        <InfoChangable />
      </UserRight>
    </UserSettingsStyled>
  );
};
export default UserSettings;
