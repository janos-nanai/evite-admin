import { CHART_COLORS } from "../../constants/chart-colors";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const MainPlot = (props: { yes: number; no: number; noReply: number }) => {
  const data = [
    { name: "yes", value: props.yes },
    { name: "no", value: props.no },
    { name: "did not reply", value: props.noReply },
  ];

  const colors = [
    CHART_COLORS.IS_COMING.YES,
    CHART_COLORS.IS_COMING.NO,
    CHART_COLORS.IS_COMING.NO_REPLY,
  ];

  return (
    <ResponsiveContainer minWidth="170px" minHeight="170px">
      <PieChart width={170} height={170}>
        <Pie dataKey="value" data={data}>
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MainPlot;
