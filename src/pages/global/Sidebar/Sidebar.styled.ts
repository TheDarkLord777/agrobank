import styled, { css } from "styled-components";

export const SidebarStyled = styled.div.attrs<{ $isLarge: boolean }>(
  (props) => ({
    ...props,
  }),
)`
  display: flex;
  flex-direction: column;
  border: #eeeff2 1px solid;
  transition: width 0.3s ease-in-out;
  ${({ $isLarge }) =>
    $isLarge
      ? css`
          width: 80px;
        `
      : css`
          width: 256px;
        `}
`;
export const SidebarTop = styled.div<{ $issidebarlarge: boolean }>`
  position: relative;
  height: 96px;
  display: flex;
  align-items: center;
  background-color: white;

  ${(props) =>
    props.$issidebarlarge &&
    css`
      padding-left: 24px;
    `}
`;

export const Block1 = styled.div<{ $issidebarlarge: boolean }>`
  display: flex;
  align-items: center;
  width: 100%; //300px
  justify-content: center;
  overflow: hidden;
  ${(props) =>
    props.$issidebarlarge &&
    css`
      justify-content: normal;
    `}
`;
export const Expand = styled.div.attrs<{
  $left?: string;
  $animateIt?: boolean;
}>((props) => ({
  ...props,
}))`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: #eeeff2 1px solid;
  background-color: white;
  cursor: pointer;
  box-shadow: 2px 4px 24px rgba(26, 32, 44, 0.06);
  transition: left 0.3s ease-in-out;
`;
export const SidebarWrapper = styled.div`
  width: 100%;
  height: calc(100% - 96px);
  padding: 24px 20px 20px;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const Text = styled.p`
  font-size: 12px;
  color: #a0aec0;
`;
export const SideBarInsideButton = styled.div<{ $state: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  cursor: pointer;
  margin-left: 24px;
  color: ${(props) => (props.$state ? "#00CD69" : "black")};
  font-family: ALSMedium, sans-serif;
  font-size: 14px;
`;
