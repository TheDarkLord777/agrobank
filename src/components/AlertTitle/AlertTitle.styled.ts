import styled from "styled-components";

export const AlertTitleStyled = styled.div`
  background-color: #e7f7ef;
  color: #0caf60;
  border-radius: 8px;
  width: fit-content;
  padding: 5px 8px;
  font-size: 14px;
`;
export const CallTitle = styled(AlertTitleStyled)`
  background-image: url("/src/assets/icons/arrow-narrow-right.png");
  background-position: right 1px center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 12px;
  color: #718096;
  padding: 13px 47px 13px 13px;
  background-color: #eeeff2;
  cursor: pointer;
`;
