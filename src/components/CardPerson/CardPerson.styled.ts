import styled from "styled-components";

export const CardPersonStyled = styled.div<{ $color?: string }>`
  padding: 20px;
  display: flex;
  gap: 23px;
  flex-direction: column;
  background-color: ${(props) => props.$color || "#3c4bdc"};
  border-radius: 14px;
  background-image: url("src/assets/images/Patern.png");
  background-position: center;
  background-repeat: no-repeat;
`;
export const CardPersonHeader = styled.div`
  color: #fff;
  font-size: 18px;
  font-family: ALSMedium, sans-serif;
  display: flex;
  justify-content: space-between;
  gap: 21px;
  align-items: center;
`;
export const IconHideVis = styled.div`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.3);
  padding: 6px;
  border-radius: 6px;
  transition-duration: 0.4s;
  &:hover {
    opacity: 0.7;
  }
`;
export const BottomCardPerson = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ButtonCardPerson = styled.div<{ $color?: string }>`
  padding: 8px;
  color: ${(props) => (props.$color ? "#0CAF60" : "#3c4bdc")};
  border-radius: 8px;
  background: #e2e5ff;
  text-align: center;
  width: fit-content;
  font-size: 12px;
`;
export const FullName = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-family: ALSMedium, sans-serif;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
