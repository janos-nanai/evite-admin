import { CHART_COLORS } from "../../constants/chart-colors";
import { AGE_CATEGORY } from "../../constants/age-category";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const AgePlot = (props: {
  cat0: number;
  cat1: number;
  cat2: number;
  cat3: number;
}) => {

  const data = [
    { name: `0-${AGE_CATEGORY[0].ageMax} yo`, value: props.cat0 },
    {
      name: `${AGE_CATEGORY[0].ageMax + 1}-${AGE_CATEGORY[1].ageMax} yo`,
      value: props.cat1,
    },
    {
      name: `${AGE_CATEGORY[1].ageMax + 1}-${AGE_CATEGORY[2].ageMax} yo`,
      value: props.cat2,
    },
    { name: `adult`, value: props.cat3 },
  ];

  const colors = [
    CHART_COLORS.AGE_CATEGORY[0],
    CHART_COLORS.AGE_CATEGORY[1],
    CHART_COLORS.AGE_CATEGORY[2],
    CHART_COLORS.AGE_CATEGORY[3],
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

export default AgePlot;
