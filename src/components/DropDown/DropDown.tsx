import React, { FC, ReactElement } from "react";
import * as S from "./DropDown.styled.ts";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { LinkingStyled } from "../shared/Linking.styled.ts";
import { IndicatorOpeningStyled } from "../IndicatorOpening/IndicatorOpening.styled.ts";

interface DropDownProps {
  options: React.ReactNode[];
  name: string;
  icon: ReactElement;
  isOpen: boolean;
  issidebarlarge: boolean;
  onClick?: () => void;
  url: string;
  status: boolean;
}

const DropDown: FC<DropDownProps> = ({
  options,
  name,
  icon,
  isOpen,
  issidebarlarge,
  onClick = () => {},
  url,
  status,
}) => {
  return (
    <>
      <S.SideBarButton
        onClick={onClick}
        color={isOpen ? "#00CD69" : "black"}
        $isSidebarLarge={issidebarlarge}
      >
        {issidebarlarge ? (
          React.cloneElement(icon, {
            variant: status ? "Bold" : "Linear",
            size: "25px",
          })
        ) : (
          <LinkingStyled
            to={url}
            $isvisible
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: isOpen ? "#00CD69" : "black",
            }}
          >
            {isOpen && <IndicatorOpeningStyled />}
            {React.cloneElement(icon, {
              variant: status ? "Bold" : "Linear",
              size: "25px",
            })}
          </LinkingStyled>
        )}
        {issidebarlarge && (
          <LinkingStyled
            to={url}
            $isvisible={issidebarlarge}
            style={{ color: isOpen ? "#00CD69" : "black" }}
          >
            {name}
          </LinkingStyled>
        )}
        {issidebarlarge &&
          ((isOpen && (
            <ArrowUp2 size="16" style={{ marginLeft: "auto" }} />
          )) || <ArrowDown2 size="16" style={{ marginLeft: "auto" }} />)}
      </S.SideBarButton>
      {issidebarlarge && (
        <S.SideBarOption $active={isOpen}>{...options}</S.SideBarOption>
      )}
    </>
  );
};

export default DropDown;
