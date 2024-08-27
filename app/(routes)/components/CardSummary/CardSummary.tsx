import { CustomeIcon } from "@/components/CustomIcon";
import { CardSummaryProps } from "./CardSummary.type";
import { CustomTooltip } from "@/components/CustomTooltip";
import { cn } from "@/lib/utils";
import { MoveDownRight, MoveUpRight, TrendingUp } from "lucide-react";

export function CardSummary(props: CardSummaryProps) {
  const { icon: Icon, total, title, tooltiptext, average } = props;

  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <CustomeIcon icon={Icon} />
          {title}
        </div>
        <div>
          <CustomTooltip content={tooltiptext} />
        </div>
      </div>
      <div className="flex gap-4 mt-2 md:mt-4">
        <p className="text-2xl">{total}</p>
        <div
          className={cn(
            `flex items-center gap-1 px-2 text-xs text-white rounded-lg h-[20px] bg-black dark:bg-secondary`
          )}
        >
          {average}%
          {average < 20 && (
            <MoveDownRight strokeWidth={2} className="w-4 h-4" />
          )}
          {average > 20 && average < 70 && (
            <MoveUpRight strokeWidth={2} className="w-4 h-4" />
          )}
          {average > 70 && average < 100 && (
            <TrendingUp strokeWidth={2} className="w-4 h-4" />
          )}
        </div>
      </div>
    </div>
  );
}
