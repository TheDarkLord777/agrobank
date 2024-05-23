import { DatePicker } from "antd";
import styled from "styled-components";
export const AntRangePickerStyled = styled(DatePicker.RangePicker)`
  width: 230px;
  height: 48px;
  padding: 16px 12px;
  background-color: #fafafa;
  border-radius: 12px;
  color: #a0aec0;
  font-size: larger;
  font-family: ALSMedium, sans-serif;

  border: none;
  align-items: center;
  .ant-picker-range-separator {
    display: none;
  }
`;
