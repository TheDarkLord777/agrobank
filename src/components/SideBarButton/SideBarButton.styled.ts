import styled from "styled-components";

export const SideBarButtonStyled = styled.div<{ $isSidebarLarge: boolean }>`
  width: ${(props) => (props.$isSidebarLarge ? "208px" : "100%")};
  height: 48px;
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  justify-content: ${(props) => (props.$isSidebarLarge ? "normal" : "center")};
  font-family: ALSMedium, sans-serif;
  color: ${(props) => props.color};
  &:hover {
    background-color: #fafafa;
  }
`;
