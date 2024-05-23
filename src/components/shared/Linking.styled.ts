import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkingStyled = styled(Link)<{
  $isvisible?: boolean;
}>`
  text-decoration: none;
  color: black;
  opacity: ${(props) => (props.$isvisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
