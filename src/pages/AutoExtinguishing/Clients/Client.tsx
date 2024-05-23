import { BlurEffect, ClientStyle, ClientStyled } from "./Client.styled.ts";
import { ButtonStyled } from "../../../components/shared/Buttons/Button.styled.ts";
import Search from "../../../components/Seach/Search.tsx";
import AntTable from "../../../components/AntTable/AntTable.tsx";

// import ClientTable from "../../../components/ClientTable/ClientTable.tsx";
// import TablePageControl from "../../../components/TablePageControl/TablePageControl.tsx";

const Client = () => {
  return (
    <>
      <ClientStyled>
        <ClientStyle>
          <Search />
          <ButtonStyled size={"large"} $variant={"primary"}>
            Фильтр
          </ButtonStyled>
        </ClientStyle>

        <div
          style={{
            height: "62%",
            position: "relative",
          }}
        >
          <AntTable />
          <BlurEffect />
        </div>
      </ClientStyled>
    </>
  );
};

export default Client;
