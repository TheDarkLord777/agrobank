import styled from "styled-components";

export const SideBarOption = styled.div<{ $active?: boolean }>`
    width: 100%;
    height: ${({ $active }) => ($active ? "144px" : "0")};
    opacity: ${({ $active }) => ($active ? "1" : "0")};
    overflow: hidden;
    transition: height 0.4s ease-in-out, opacity 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const DropdownDesignedComponent = styled.div`
  height: 48px;
  width: 3px;
  background: #e7f7ef;
  margin-left: 6px;
  position: relative;
  &:after {
    content: "";
    height: 27px;
    width: 15px;
    border-bottom: #e7f7ef 3px solid;
    border-left: #e7f7ef 3px solid;
    border-bottom-left-radius: 50%;
    position: absolute;
    top: 0;
  }
  &:last-child {
    background: white;
  }
`;
export const SideBarButton = styled.div<{
  $isSidebarLarge: boolean;
  color: string;
}>`
  width: ${(props) => (props.$isSidebarLarge ? "208px" : "100%")};
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  color: ${(props) => props.color};
  justify-content: ${(props) => (props.$isSidebarLarge ? "normal" : "center")};
  &:hover {
    background-color: #fafafa;
  }
`;
