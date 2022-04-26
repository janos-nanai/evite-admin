import { CHART_COLORS } from "../../constants/chart-colors";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const FoodPlot = (props: { normal: number; special: number }) => {
  const data = [
    { name: "normal", value: props.normal },
    { name: "special", value: props.special },
  ];

  const colors = [
    CHART_COLORS.FOOD_CATEGORY.normal,
    CHART_COLORS.FOOD_CATEGORY.special,
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

export default FoodPlot;
