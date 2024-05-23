import {
  NumberOfContent,
  TablePageControlStyle,
  TextStyled,
  Variants,
} from "./TablePageControl.styled.ts";

const TablePageControl = () => {
  return (
    <TablePageControlStyle>
      <TextStyled>Показать:</TextStyled>
      <NumberOfContent>
        <Variants>6</Variants>
        <Variants>12</Variants>
        <Variants>24</Variants>
      </NumberOfContent>
    </TablePageControlStyle>
  );
};
export default TablePageControl;
