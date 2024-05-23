import styled from "styled-components";

export const TopbarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  min-height: 96px;
  padding: 0 30px;
  background: white;
  border: #eeeff2 1px solid;
`;
export const TopbarLeft = styled.div`
  height: 30px;
  color: #1f2937;
  font-size: 24px;
  font-weight: bold;
  font-family: ALSBoldExpanded, sans-serif;
`;
export const TopbarRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px 0 16px 0;
  gap: 16px;
  font-family: ALSBold, sans-serif;
`;

export const StyledOption = styled.option``;
export const StyledSelect = styled.select`
  text-align: center;
  font-weight: bold;
  border: none;
  width: 84px;
  height: 56px;
  border-radius: 12px;
  background-color: #fafafa;
  outline: none;
  background-image: url("/src/assets/icons/ArrowDown.svg");
  background-repeat: no-repeat;
  background-position: right 15px center;
  padding-right: 14px;
  background-size: 12px 12px;
  -webkit-appearance: none; /* for Chrome and Safari */
  -moz-appearance: none; /* for Firefox */
  appearance: none;
  color: #111827;
  letter-spacing: 0.3px;
  font-size: 16px;
`;
export const NotificationIcon = styled.div`
  background: url("/src/assets/icons/Icon.svg") no-repeat center;
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
export const HorizontalLine = styled.hr`
  display: block;
  border: 1px solid #eeeff2;
  height: 40px;
`;
export const AccountIcon = styled.div<{ $icon?: string }>`
  width: 38px;
  height: 38px;
  background: url(${(props) => props.$icon || "/src/assets/icons/UserIcon.png"})
    no-repeat center;
  background-size: cover;
`;
export const Profiler = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  width: 176px;
  height: 56px;
`;
export const LeftProfiler = styled.div``;
export const RightProfiler = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProfilerTitle = styled.div`
  font-weight: bold;
  color: #111827;
`;
export const ProfilerBody = styled.div`
  color: #718096;
  font-size: 12px;
`;
