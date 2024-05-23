import styled from "styled-components";
export const MapCircleBig = styled.div<{
  $pos: { top: string; left: string }[];
}>`
  pointer-events: none;
  position: absolute;
  width: 14px;
  height: 14px;
  box-sizing: unset;
  border: 1px solid #fff0e6;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $pos }) => `top: ${$pos[0].top}; left: ${$pos[0].left};`}
`;

export const MapCircleStyled = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-sizing: unset;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MapCircleInside = styled.div<{ $color: string }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  box-sizing: unset;
  border: 2px solid ${(props) => props.$color || "#c64cff"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MapCircleSmall = styled.div<{ $color: string }>`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$color || "#c64cff"};
`;
