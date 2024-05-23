import styled from "styled-components";

export const ClientTh = styled.th`
  text-align: left;
  color: #718096;
  font-family: ALSBold, sans-serif;
  font-size: 14px;
  &:first-child {
    padding-left: 22px;
  }
`;
export const ClientTd = styled.td`
  color: #111827;
  font-size: 14px;
  font-family: ALSMedium, sans-serif;
  &:first-child {
    padding-left: 22px;
  }
  &:last-child {
    padding-right: 22px;
  }
`;
export const ClientTr = styled.tr`
  height: 60px;
  background-color: white;
  &:nth-child(odd) {
    background-color: #fafafa;
  }
  &:first-child {
    height: 72px;
    background: white;
  }
`;
export const ClientTableStyled = styled.table`
  min-width: 120%;
  border-collapse: collapse;
`;
