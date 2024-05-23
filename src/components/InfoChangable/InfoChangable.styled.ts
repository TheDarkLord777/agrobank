import styled from "styled-components";

export const InfoChangableStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid #f1f2f4;
  border-radius: 16px;
`;
export const InfoTitle = styled.div`
  flex: 2;
  font-family: ALSRegular, sans-serif;
  font-size: 14px;
  color: #718096;
`;
export const InfoLine = styled.div`
  display: flex;
  gap: 10px;
`;
export const InfoValue = styled.div`
  flex: 7;
  font-family: ALSBold, sans-serif;
  font-size: 14px;
  letter-spacing: 0.2;
`;
