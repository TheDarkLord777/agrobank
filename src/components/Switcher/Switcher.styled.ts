import styled from "styled-components";

export const SwitcherStyled = styled.div`
  display: flex;
  width: 170px;
  justify-content: center;
  background: #fafafa;
  border-radius: 10px;
  font-size: 14px;
  height: 48px;
  align-items: center;
  font-family: ALSBold, sans-serif;
`;
export const SwitcherButton = styled.div<{ $active: boolean }>`
  display: flex;
  width: 79px;
  height: 36px;
  justify-content: center;

  align-items: center;
  border-radius: 8px;
  letter-spacing: 0.2px;
  color: ${(props) => (props.$active ? "#00CD69" : "#718096")};
  background: ${(props) => (props.$active ? "white" : "none")};
  box-shadow: ${(props) => (props.$active ? "-4px 2px 7px #DFE1E2" : "none")};
  cursor: ${(props) => (props.$active ? "default" : "pointer")};
  transition: box-shadow 0.5s ease-in-out;
`;
