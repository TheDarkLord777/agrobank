import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { AntRangePickerStyled } from "./AntRangePicker.styled.ts";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY/MM/DD";

const AntRangePicker: React.FC = () => (
  <AntRangePickerStyled
    defaultValue={[
      dayjs("2024/01/01", dateFormat),
      dayjs("2024/01/01", dateFormat),
    ]}
    format={dateFormat}
  />
);

export default AntRangePicker;
