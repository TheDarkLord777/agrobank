import styled from "styled-components";

export const GraphicStyled = styled.div`
  width: min(100%, 50%);
  height: 333px;
  margin-top: 36px;
  @media (max-width: 1188px) {
    width: 100%;
  }
`;
export const GraphicBody = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1188px) {
    justify-content: center;
  }
`;
