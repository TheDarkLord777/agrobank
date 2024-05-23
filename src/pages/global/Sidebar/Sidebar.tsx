import { FC, useEffect, useState } from "react";
import * as S from "../Sidebar/Sidebar.styled.ts";
import {
  ArrowLeft2,
  ArrowRight2,
  EmptyWalletChange,
  Star,
} from "iconsax-react";
import DropDown from "../../../components/DropDown/DropDown.tsx";
import { DropdownDesignedComponent } from "../../../components/DropDown/DropDown.styled.ts";
import { LinkingStyled } from "../../../components/shared/Linking.styled.ts";
import SideBarButton from "../../../components/SideBarButton/SideBarButton.tsx";
import { useLocation } from "react-router-dom";
import SidebarIcon from "../../../components/SidebarTopSide/SidebarIcon.tsx";

interface States {
  setLayoutState: (newState: boolean) => void;
}

const Sidebar: FC<States> = ({ setLayoutState }) => {
  const location = useLocation();
  const [issidebarlarge, setIsSidebarLarge] = useState(true);
  const [dropDownState, setDropdownState] = useState({
    autoExtinguishing: false,
    scoring: false,
    home: false,
    clients: false,
  });

  useEffect(() => {
    if (location.pathname === "/scoring") {
      setDropdownState((prevState) => ({
        ...prevState,
        scoring: true,
        clients: false,
      }));
    } else if (location.pathname === "/clients") {
      setDropdownState((prevState) => ({
        ...prevState,
        autoExtinguishing: true,
        home: false,
        scoring: false,
        clients: true,
      }));
    } else if (location.pathname === "/profile") {
      setDropdownState((prevState) => ({
        ...prevState,
        autoExtinguishing: false,
        home: false,
        scoring: false,
        clients: false,
      }));
    } else {
      setDropdownState((prevState) => ({
        ...prevState,
        scoring: false,
        autoExtinguishing: false,
        home: true,
        clients: false,
      }));
    }
  }, [location.pathname]);

  const sendState = () => {
    setIsSidebarLarge((prevState) => !prevState);
  };

  return (
    <S.SidebarStyled $isLarge={!issidebarlarge}>
      <S.SidebarTop $issidebarlarge={issidebarlarge}>
        <S.Block1 $issidebarlarge={issidebarlarge}>
          <SidebarIcon
            issidebarlarge={issidebarlarge}
            srcLarge="/../src/assets/images/Agrobank.png"
            srcSmall="/../src/assets/icons/SmallVersionAgroIcon.png"
          />
        </S.Block1>
        <S.Expand
          onClick={() => {
            sendState();
            setLayoutState(issidebarlarge);
          }}
          $animateIt={!issidebarlarge}
        >
          {issidebarlarge && <ArrowLeft2 size="16" color="black" />}
          {!issidebarlarge && <ArrowRight2 size="16" color="black" />}
        </S.Expand>
      </S.SidebarTop>
      <S.SidebarWrapper>
        <S.Text style={{ visibility: issidebarlarge ? "visible" : "hidden" }}>
          МЕНЮ
        </S.Text>
        <SideBarButton
          issidebarlarge={issidebarlarge}
          dropDownState={dropDownState}
        />
        <DropDown
          url={"/clients"}
          options={[
            <DropdownDesignedComponent>
              <LinkingStyled to="/clients" $isvisible={issidebarlarge}>
                <S.SideBarInsideButton $state={dropDownState.clients}>
                  Клиенты
                </S.SideBarInsideButton>
              </LinkingStyled>
            </DropdownDesignedComponent>,
            <DropdownDesignedComponent>
              <S.SideBarInsideButton $state={false}>
                Платежи
              </S.SideBarInsideButton>
            </DropdownDesignedComponent>,
            <DropdownDesignedComponent>
              <S.SideBarInsideButton $state={false}>
                Отчеты
              </S.SideBarInsideButton>
            </DropdownDesignedComponent>,
          ]}
          name={"Автопогашение"}
          icon={<EmptyWalletChange size="25" variant={"Linear"} />}
          isOpen={dropDownState.autoExtinguishing}
          issidebarlarge={issidebarlarge}
          onClick={() =>
            setDropdownState((prevState) => ({
              ...prevState,
              autoExtinguishing:
                !dropDownState.home && dropDownState.autoExtinguishing
                  ? true
                  : !prevState.autoExtinguishing,
            }))
          }
          status={dropDownState.clients}
        />
        <DropDown
          url={"/scoring"}
          options={[
            <DropdownDesignedComponent>
              <LinkingStyled to="/scoring" $isvisible={issidebarlarge}>
                <S.SideBarInsideButton $state={false}>
                  Скоринг
                </S.SideBarInsideButton>
              </LinkingStyled>
            </DropdownDesignedComponent>,
          ]}
          name="Скоринг"
          icon={<Star size="25" variant={"Linear"} />}
          isOpen={dropDownState.scoring}
          issidebarlarge={issidebarlarge}
          onClick={() =>
            setDropdownState((prevState) => ({
              ...prevState,
              scoring:
                dropDownState.home && !dropDownState.scoring
                  ? true
                  : !prevState.scoring,
            }))
          }
          status={dropDownState.scoring}
        />
      </S.SidebarWrapper>
    </S.SidebarStyled>
  );
};

export default Sidebar;
