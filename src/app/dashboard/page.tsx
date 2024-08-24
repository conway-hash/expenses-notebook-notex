import { Icons } from "@/components/icons"
import Link from 'next/link'

import { PieChartV1 } from "@/components/charts/PieChartV1"

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-4">
      <div className="flex justify-between">
        <div>
          <h2 className="font-normal">Good evening,</h2>
          <h1 className="text-xl font-medium">Anton Bokor</h1>
        </div>
        <div className="flex gap-2">
          <button type="button" className="rounded-md flex justify-center items-center p-3 active:bg-white/60 transition-colors">
            <Icons.notifications className="w-6 h-6" fill="#44403c"/>
          </button>
          <button type="button" className="rounded-md flex justify-center items-center p-3 active:bg-white/60 transition-colors">
            <Icons.profile className="w-6 h-6" fill="#44403c"/>
          </button>
        </div>
      </div>
      <div>
        <PieChartV1/>
        {/* <div className="flex flex-col gap-4 h-full w-4/12">
          <div className="bg-[#ece8d9] h-2/6 rounded-lg"></div>
          <div className="bg-[#ece8d9] h-4/6 rounded-lg"></div>
        </div>
        <div className="h-full w-8/12">
          <div className="bg-[#ece8d9] h-full rounded-lg"></div>
        </div> */}
      </div>
      <div className="w-full h-10 flex gap-4">
        <Link href="/stats/electricity" className="h-full w-full bg-[#ece8d9] rounded-md flex justify-center items-center gap-2 p-2">
          <Icons.electricity className="w-3" fill="#F0CD4D"/>
          <p className="text-sm">Electricity</p>
        </Link>
        <Link href="/stats/gas" className="h-full w-full bg-[#ece8d9] rounded-md flex justify-center items-center gap-2 p-2">
          <Icons.gas className="w-3" fill="#FF4747"/>
          <p className="text-sm">Gas</p>
        </Link>
        <Link href="/stats/water" className="h-full w-full bg-[#ece8d9] rounded-md flex justify-center items-center gap-2 p-2">
          <Icons.water className="w-3" fill="#00BCB4"/>
          <p className="text-sm">Water</p>
        </Link>
      </div>
    </main>
  );
  }