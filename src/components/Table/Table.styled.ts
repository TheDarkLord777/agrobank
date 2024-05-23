import styled from "styled-components";

export const TableStyled = styled.div`
  width: 38%;
  height: 282px;
  margin-top: 20px;
  font-family: ALSBold, sans-serif;
  color: #323b49;
  letter-spacing: 0.2px;
`;
export const TableList = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: bold;
  font-size: 14px;
  padding: 0 10px;
  border-radius: 8px;
`;
export const TableListSecond = styled(TableList)`
  background-color: #f9fafb;
  color: #323b49;
`;
export const TableRightText = styled.div`
  margin-left: auto;
  color: #111827;
`;
