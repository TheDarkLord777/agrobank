import styled from "styled-components";
export const RechartStyled = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 16px;
  font-size: 14px;
`;
export const RechartHeader = styled(RechartStyled)`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  color: #1f2937;
`;

export const RechartWrapper = styled.div`
  width: 100%;
  padding: 24px;
`;

export const RechartBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 94px;
`;
export const RechartBottomTitle = styled.div`
  height: 22px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #718096;
  letter-spacing: 0.2px;
`;

export const JustForText = styled.div`
  margin-left: auto;
  font-family: ALSBoldExpanded, sans-serif;
  color: black;
`;
export const JustForTitle = styled.div`
  font-family: ALSBoldExpanded, sans-serif;
  font-size: 18px;
  letter-spacing: 0.2px;
`;
