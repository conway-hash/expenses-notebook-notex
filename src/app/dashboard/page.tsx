import { Icons } from "@/components/icons"
import Link from 'next/link'

import { PieChartV1 } from "@/components/charts/PieChartV1"

export default function Page() {
  return (
    <main className="flex flex-col gap-3 py-4">

      <div className="flex justify-between px-4">
        <div>
          <h2 className="font-normal">Good evening,</h2>
          <h1 className="text-xl font-medium">Anton Bokor</h1>
        </div>
        <div className="flex gap-2">
          <button type="button" className="rounded-md flex justify-center items-center p-3 active:bg-stone-50/40  transition-colors">
            <Icons.notifications className="w-6 h-6" fill="#44403c"/>
          </button>
          <button type="button" className="rounded-md flex justify-center items-center p-3 active:bg-stone-50/40 transition-colors">
            <Icons.profile className="w-6 h-6" fill="#44403c"/>
          </button>
        </div>
      </div>

      <div className="w-full h-10 flex gap-3 overflow-x-scroll overflow-y-hidden no-scrollbar px-4">
        <Link href="/dashboard/stats/electricity" className="h-full w-full rounded-md border bg-card shadow-sm active:bg-card/75 flex justify-center items-center gap-2 p-2">
          <Icons.electricity className="w-3" fill="#eab308"/>
          <p className="text-sm">Electricity</p>
        </Link>
        <Link href="/dashboard/stats/gas" className="h-full w-full rounded-md border bg-card shadow-sm active:bg-card/75 flex justify-center items-center gap-2 p-2">
          <Icons.gas className="w-3" fill="#ef4444"/>
          <p className="text-sm">Gas</p>
        </Link>
        <Link href="/dashboard/stats/water" className="h-full w-full rounded-md border bg-card shadow-sm active:bg-card/75 flex justify-center items-center gap-2 p-2">
          <Icons.water className="w-3" fill="#0ea5e9"/>
          <p className="text-sm">Water</p>
        </Link>
        <button className="h-full w-full rounded-md border bg-card shadow-sm active:bg-card/75 flex justify-center items-center gap-2 p-2">
          <Icons.cash className="w-3" fill="#10b981"/>
          <p className="text-sm">Other</p>
        </button>
      </div>

      <div className="w-full flex gap-3 overflow-x-scroll overflow-y-hidden no-scrollbar px-4">
        <div className="rounded-lg border bg-card shadow-sm p-6 min-w-full">
          <h1 className="font-bold text-lg">Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec iaculis felis. Suspendisse potti.</p>
        </div>
        <div className="rounded-lg border bg-card shadow-sm p-6 min-w-full">
          <h1 className="font-bold text-lg">Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec iaculis felis. Suspendisse potti.</p>
        </div>
        <div className="rounded-lg border bg-card shadow-sm p-6 min-w-full">
          <h1 className="font-bold text-lg">Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec iaculis felis. Suspendisse potti.</p>
        </div>
      </div>

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

    </main>
  );
  }