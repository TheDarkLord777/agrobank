import React from "react";
import styled from "styled-components";

interface SidebarIconProps {
  srcLarge: string;
  srcSmall: string;
  issidebarlarge: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({
  srcLarge,
  srcSmall,
  issidebarlarge,
}) => {
  return (
    <StyledImg
      $issidebarlarge={issidebarlarge}
      $srcLarge={srcLarge}
      $srcSmall={srcSmall}
    />
  );
};

export const StyledImg = styled.div<{
  $issidebarlarge: boolean;
  $srcSmall: string;
  $srcLarge: string;
}>`
  width: ${(props) => (props.$issidebarlarge ? "195px" : "38px")};
  height: 38px;
  background: ${(props) =>
      props.$issidebarlarge
        ? `url(${props.$srcLarge})`
        : `url(${props.$srcSmall})`}
    no-repeat;
  background-size: cover;
`;

export default SidebarIcon;
