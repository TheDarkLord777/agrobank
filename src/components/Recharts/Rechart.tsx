import {
  JustForText,
  JustForTitle,
  RechartBottom,
  RechartBottomTitle,
  RechartHeader,
  RechartStyled,
  RechartWrapper,
} from "./Rechart.styled.ts";
import { FC } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import Switcher from "../Switcher/Switcher.tsx";
import { Status } from "../shared/StatusCircle/Status.styled.tsx";
import ShowActive from "../ShowActives/ShowActive.tsx";

const COLORS = ["#01CD6A", "#FD9A38", "#FFBB28", "#FF8042"];

interface IRechartInterface {
  text?: string;
  switcher?: Array<string>;
  data?: Array<{ name: string; value: number }>;
}

export const Rechart: FC<IRechartInterface> = ({
  text = "Клиенты",
  switcher = [],
  data = [
    { name: "Active", value: 120000 },
    { name: "Not active", value: 345000 },
  ],
}) => {
  return (
    <RechartStyled>
      <RechartWrapper>
        <RechartHeader>
          <JustForTitle>{text || "Клиенты"}</JustForTitle>
          <Switcher data={switcher} />
        </RechartHeader>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PieChart width={200} height={200}>
            <Pie
              dataKey="value"
              data={data}
              cx={100}
              cy={100}
              innerRadius={50}
              outerRadius={80}
              fill="#F09839"
              stroke={"none"}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<ShowActive />} />
          </PieChart>
        </div>
        <RechartBottom>
          <RechartBottomTitle>
            <Status $color={"#00CD69"} />
            Активные
            <JustForText>
              {data[0].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </JustForText>
          </RechartBottomTitle>
          <RechartBottomTitle>
            <Status $color={"#FE9A38"} />
            Не активные
            <JustForText>
              {data[1].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </JustForText>
          </RechartBottomTitle>
          <RechartBottomTitle
            style={{
              color: "#1F2937",
              fontFamily: "ALSBoldExpanded,san-serif",
            }}
          >
            <Status $color={"#F1F2F4"} />
            Все клиенты
            <JustForText>
              {(data[0].value + data[1].value)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </JustForText>
          </RechartBottomTitle>
        </RechartBottom>
      </RechartWrapper>
    </RechartStyled>
  );
};
