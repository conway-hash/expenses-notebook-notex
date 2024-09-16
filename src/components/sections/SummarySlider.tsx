import { PieChartV1 } from "@/components/charts/PieChartV1"

import {
  Button }
from "@/components/ui/button"

import {
  CardTitle,
} from "@/components/ui/card"

export default function ExpensesSlider() {
  return (
  <section>
  <CardTitle className='px-4 text-4xl absolute left-4 opacity-20'>Summary</CardTitle>
  <div className="px-4 flex gap-3 overflow-x-scroll no-scrollbar relative z-10 mt-7">
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
  </section>
  );
}