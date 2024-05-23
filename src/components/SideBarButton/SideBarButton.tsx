import { SideBarButtonStyled } from "./SideBarButton.styled.ts";
import { LinkingStyled } from "../shared/Linking.styled.ts";
import { Home, Home2 } from "iconsax-react";
import { FC } from "react";
import { IndicatorOpeningStyled } from "../IndicatorOpening/IndicatorOpening.styled.ts";

interface Component {
  issidebarlarge: boolean;
  dropDownState: {
    autoExtinguishing: boolean;
    scoring: boolean;
    home: boolean;
  };
}

const SideBarButton: FC<Component> = ({ issidebarlarge, dropDownState }) => {
  return (
    <>
      {issidebarlarge ? (
        <SideBarButtonStyled $isSidebarLarge={issidebarlarge}>
          {dropDownState.home ? (
            <Home2 size="25" color={"#00CD69"} variant="Bold" />
          ) : (
            <Home size="25" color={"black"} variant="Linear" />
          )}

          <LinkingStyled
            to="/"
            style={{
              color: dropDownState.home ? "#00CD69" : "black",
            }}
            $isvisible={issidebarlarge}
          >
            Главная
          </LinkingStyled>
        </SideBarButtonStyled>
      ) : (
        <SideBarButtonStyled $isSidebarLarge={issidebarlarge}>
          {dropDownState.home ? (
            <>
              <div>
                <IndicatorOpeningStyled />
                <LinkingStyled to={"/"} $isvisible>
                  <Home2 size="25" color="#00CD69" variant="Bold" />
                </LinkingStyled>
              </div>
            </>
          ) : (
            <LinkingStyled
              to={"/"}
              $isvisible
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Home size="25" color="black" variant="Linear" />
            </LinkingStyled>
          )}
        </SideBarButtonStyled>
      )}
    </>
  );
};

export default SideBarButton;
