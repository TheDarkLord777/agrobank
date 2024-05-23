import styled from "styled-components";

export const Status = styled.div<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;
