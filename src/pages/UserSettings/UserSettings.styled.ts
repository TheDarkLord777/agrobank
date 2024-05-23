import styled, { css } from "styled-components";
import { ArrowRight2 } from "iconsax-react";
export const ArrowRIght = styled(ArrowRight2)`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 50%;
  right: 0;
  color: #a0aec0;
  transform: translateY(-50%);
`;
export const UserSettingsStyled = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  gap: 24px;
`;
export const UserLeft = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const UserRight = styled.div`
  flex: 7;
  padding: 24px;
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
export const UserLeftNames = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
`;
export const UserLeftNamesFirst = styled.div`
  width: fit-content;
  margin: 0 auto;
  color: #687588;
`;
export const UserName = styled.div`
  color: #323b49;
  font-family: ALSBoldExpanded, sans-serif;
  font-size: 22px;
  text-align: center;
`;
export const InsideUserLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
export const GetherBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
export const InfoUserInside = styled.div`
  position: relative;
  height: 47px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const TitleOfInfo = styled.div`
  color: #718096;
  font-size: 12px;
  font-family: ALSRegular, sans-serif;
`;
export const ValueOfInfo = styled.div`
  color: #323b49;
  font-size: 16px;
  font-family: ALSBold, sans-serif;
`;
export const Container = styled.div`
  border-radius: 16px;
  background: white;
  padding: 24px;
`;
export const NewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  border: 1px solid #f1f2f4;
  border-radius: 16px;
`;
export const NewContainerHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const HorizonalLine = styled.hr``;
export const SwitcherNext = styled.div`
  display: flex;
  border-bottom: 1px solid #f9fafb;
`;
export const InsideSwitcher = styled.div<{ $isselected: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 9px;
  font-family: ALSMedium, sans-serif;
  font-size: 14px;
  cursor: pointer;

  ${(props) =>
    props.$isselected &&
    css`
      border-bottom: 2px solid #00cd69;
      color: #00cd69;
      cursor: default;
    `}
`;
export const TitleText = styled(UserName)`
  font-size: 18px;
  color: #1f2937;
`;
export const BorderCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const BigBorderCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 18px;
`;
export const BottomClientCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
