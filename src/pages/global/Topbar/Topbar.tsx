import { FC, ReactNode } from "react";
import * as S from "./Topbar.styled.ts";
import { LinkingStyled } from "../../../components/shared/Linking.styled.ts";

interface Topbaric {
  topbarTitle: string;
  today: ReactNode;
  active: ReactNode;
  icon?: string;
}
const Topbar: FC<Topbaric> = ({
  topbarTitle = "Главная",
  today,
  active,
  icon,
}) => {
  return (
    <S.TopbarStyled>
      <S.TopbarLeft>{topbarTitle}</S.TopbarLeft>
      <S.TopbarRight>
        {today}
        {active}
        <S.StyledSelect>
          <S.StyledOption value="ru">Рус</S.StyledOption>
          <S.StyledOption value="en">Eng</S.StyledOption>
          <S.StyledOption value="uz">Uzb</S.StyledOption>
        </S.StyledSelect>
        <S.NotificationIcon />
        <S.HorizontalLine />
        <S.Profiler>
          <S.LeftProfiler>
            <LinkingStyled to={"/profile"} $isvisible>
              <S.AccountIcon $icon={icon} />
            </LinkingStyled>
          </S.LeftProfiler>
          <S.RightProfiler>
            <S.ProfilerTitle>
              <LinkingStyled to={"/profile"} $isvisible>
                Козлова Кира
              </LinkingStyled>
            </S.ProfilerTitle>

            <LinkingStyled to={"/profile"} $isvisible>
              <S.ProfilerBody>Админ</S.ProfilerBody>
            </LinkingStyled>
          </S.RightProfiler>
        </S.Profiler>
      </S.TopbarRight>
    </S.TopbarStyled>
  );
};
export default Topbar;
