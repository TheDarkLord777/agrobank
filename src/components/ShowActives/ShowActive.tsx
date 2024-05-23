import { ShowActiveBlocks, ShowActiveStyled } from "./ShowActive.styled.ts";
import { Profile } from "iconsax-react";
import { FC } from "react";
const ShowActive: FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <ShowActiveStyled>
        <ShowActiveBlocks>
          {data.name == "Active" ? "Активные клиенты" : "Неaктивные клиенты"}
        </ShowActiveBlocks>

        <ShowActiveBlocks style={{ color: "#718096", fontSize: "16px" }}>
          <Profile size="18" variant={"Bold"} />
          {data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        </ShowActiveBlocks>
      </ShowActiveStyled>
    );
  }
  return null;
};
export default ShowActive;
