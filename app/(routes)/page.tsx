import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary/CardSummary";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";

export const dataCardsSummary = [
  {
    icon: UserRound,
    total: "12.450",
    average: 15,
    title: "Companies Created",
    tooltiptext: "See all of companies created",
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Total Revenue",
    tooltiptext: "See all of the summary",
  },
  {
    icon: BookOpenCheck,
    total: "363,95€",
    average: 30,
    title: "Bounce Rate",
    tooltiptext: "See all of the bounce rate,",
  },
];

export default function Home() {
  return (
    <div>
      <UserButton />
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardsSummary.map(
          ({ icon, total, average, title, tooltiptext }) => (
            <CardSummary
              key={title}
              icon={icon}
              total={total}
              average={average}
              title={title}
              tooltiptext={tooltiptext}
            />
          )
        )}
      </div>
    </div>
  );
}
