import {
  TableList,
  TableListSecond,
  TableRightText,
  TableStyled,
} from "./Table.styled.ts";
import { Status } from "../shared/StatusCircle/Status.styled.tsx";

const Table = () => {
  return (
    <TableStyled>
      <TableListSecond>
        <Status $color={"#0CAF60"} />
        Андижанская область
        <TableRightText>200 000 000 000 сум</TableRightText>
      </TableListSecond>
      <TableList>
        <Status $color={"#FFD023"} />
        Бухарская область <TableRightText>100 000 000 000 сум</TableRightText>
      </TableList>
      <TableListSecond>
        <Status $color={"#0062FF"} />
        Джизакская область <TableRightText>100 000 000 000 сум</TableRightText>
      </TableListSecond>

      <TableList>
        <Status $color={"#E03137"} />
        Кашкадарьинская область{" "}
        <TableRightText>100 000 000 000 сум</TableRightText>
      </TableList>
      <TableListSecond>
        <Status $color={"#C64CFF"} />
        Навоийская область <TableRightText>100 000 000 000 сум</TableRightText>
      </TableListSecond>
      <TableList>
        <Status $color={"#FE964A"} />
        Наманганская область{" "}
        <TableRightText>100 000 000 000 сум</TableRightText>
      </TableList>
    </TableStyled>
  );
};
export default Table;
