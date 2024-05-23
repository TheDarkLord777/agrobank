import styled from "styled-components";

export const NewBlockStyled = styled.div`
  border-radius: 16px;
  background: white;
  padding: 24px;
  display: flex;
  gap: 14px;
  flex-direction: column;
`;
export const NewBlockFirstLine = styled.div<{ $icon: string }>`
  color: #718096;
  font-size: 14px;
  font-family: ALSRegular, sans-serif;
  display: flex;
  align-items: center;
  &:before {
    content: "";
    display: inline-block;
    background-image: url(${(props) => props.$icon});
    background-size: cover;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
export const NewBlockSecondLine = styled.div`
  font-family: ALSBold, sans-serif;
  display: flex;
  justify-content: space-between;
`;
