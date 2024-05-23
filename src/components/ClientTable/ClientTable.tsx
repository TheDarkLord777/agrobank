import {
  ClientTableStyled,
  ClientTd,
  ClientTh,
  ClientTr,
} from "./ClientTable.styled.ts";
import AlertTitle from "../AlertTitle/AlertTitle.tsx";
import { CallTitle } from "../AlertTitle/AlertTitle.styled.ts";
import { ArrowSwapVertical } from "iconsax-react";

const ClientTable = () => {
  return (
    <ClientTableStyled style={{ position: "relative" }}>
      <ClientTr>
        <ClientTh>
          ID кредита <ArrowSwapVertical size="16" color="#718096" />
        </ClientTh>
        <ClientTh>
          Филиал <ArrowSwapVertical size="16" color="#718096" />
        </ClientTh>
        <ClientTh>
          Сумма просрочки <ArrowSwapVertical size="16" color="#718096" />
        </ClientTh>
        <ClientTh>
          ФИО заемщика <ArrowSwapVertical size="16" color="#718096" />
        </ClientTh>
        <ClientTh>
          Сумма договора <ArrowSwapVertical size="16" color="#718096" />
        </ClientTh>
        <ClientTh>
          Статус платежа <ArrowSwapVertical size="16" color="#718096" />
        </ClientTh>
        <ClientTh>
          Остаток накопитеьного счета (29801%%)
          <ArrowSwapVertical size="16" color="#718096" />
        </ClientTh>
        <ClientTh>
          Дата начало задолженности
          <ArrowSwapVertical size="16" color="#718096" />
        </ClientTh>
        <ClientTh>
          Задолженности в днях
          <ArrowSwapVertical size="16" color="#718096" />
        </ClientTh>
        <ClientTh></ClientTh>
      </ClientTr>

      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>
        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>
        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>

        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>
        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>
        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>
        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>
        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>
        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>
        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
      <ClientTr>
        <ClientTd>123456</ClientTd>
        <ClientTd>00394</ClientTd>
        <ClientTd>8 240 000.00 UZS</ClientTd>
        <ClientTd>Очилов Акбарали Валиевич</ClientTd>
        <ClientTd>237 710 000.00 UZS</ClientTd>
        <ClientTd>
          <AlertTitle text={"Успешный"} />
        </ClientTd>
        <ClientTd>Наличными</ClientTd>
        <ClientTd>09/02/2023 23:45</ClientTd>
        <ClientTd>31</ClientTd>
        <ClientTd>
          <CallTitle>Позвонить</CallTitle>
        </ClientTd>
      </ClientTr>
    </ClientTableStyled>
  );
};
export default ClientTable;
