import { DateNowStyled } from "./DateNow.styled.ts";

export const DateNow = () => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;

  return (
    <DateNowStyled>
      {new Date().toLocaleString("ru-RU", options).replace(/\./g, "")}
    </DateNowStyled>
  );
};
