import styled from "styled-components";

export const ShowActiveStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 17px 40px rgba(26, 32, 44, 0.2);
  gap: 4px;
  background: white;
`;
export const ShowActiveBlocks = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  color: #323b49;
  &:not(:first-child) {
    font-family: ALSBoldExpanded, sans-serif;
  }
`;
