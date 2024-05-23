import styled from "styled-components";

export const Border = styled.div`
  flex: 1;
  border-radius: 16px;
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const CardTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ALSBold;
`;
export const Price = styled.h3`
  color: #1f2937;
  font-size: 24px;
  font-family: ALSBoldExpanded;
`;
export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: #f1f2f4;
  color: #f1f2f4;
`;
export const CardTitleIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const BottomOfCard = styled.div`
  display: flex;
  gap: 4px;
  font-size: 10px;
`;
export const BottomIcon = styled.div`
  background: url("/src/assets/icons/trending-up.svg") no-repeat center;
  width: 12px;
  height: 12px;
`;
export const BottomText = styled.div`
  color: #00cd69;
`;
export const BottomTextPlus = styled.div`
  color: #718096;
`;
export const BottomParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
