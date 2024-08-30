import { CustomeIcon } from "@/components/CustomIcon";
import { Percent } from "lucide-react";

import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Website",
    value: 453,
    fill: "#8884d8",
  },
  {
    name: "Instagram",
    value: 790,
    fill: "#00c49f",
  },
  {
    name: "Other",
    value: 260,
    fill: "#ffbb28",
  },
];

export function TotalSuscribers() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomeIcon icon={Percent} />
        <p className="text-xl ">Last Customers</p>
      </div>
      <div className=""></div>
    </div>
  );
}
