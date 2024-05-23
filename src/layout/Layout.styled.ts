import styled from "styled-components";

export const LayoutStyled = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100% - 96px);
`;
export const Content = styled.div<{ $isSidebarLarge: boolean }>`
  width: ${(props) =>
    props.$isSidebarLarge ? "calc(100% - 256px)" : "calc(100% - 80px)"};
  transition: width 0.3s ease-in-out;
  background: #f9fafb;
`;
