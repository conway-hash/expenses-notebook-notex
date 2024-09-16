import { PieChartV1 } from "@/components/charts/PieChartV1"

import {
  Button }
from "@/components/ui/button"

import {
  CardTitle,
} from "@/components/ui/card"

export default function ExpensesSlider() {
  return (
  <>
  <div className="px-4 flex gap-3 overflow-x-scroll no-scrollbar">
    <div className="min-w-[90%]">
      <PieChartV1/>
    </div>

    <div className="min-w-[90%]">
      <PieChartV1/>
    </div>

    <div className="min-w-[90%]">
      <PieChartV1/>
    </div>
  </div>
  </>
  );
}