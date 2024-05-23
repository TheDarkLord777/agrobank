import { AlertTitleStyled } from "./AlertTitle.styled.ts";
import { FC } from "react";

const AlertTitle: FC<{ text?: string }> = ({ text = null }) => {
  return <AlertTitleStyled>{text}</AlertTitleStyled>;
};
export default AlertTitle;
