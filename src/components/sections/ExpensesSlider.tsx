import Link from 'next/link'

import {
  Flame,
  Zap,
  Droplet,
  ShoppingCart,
} from "lucide-react"

import {
  Button }
from "@/components/ui/button"

import {
  CardTitle,
} from "@/components/ui/card"

export default function ExpensesSlider() {
  return (
  <section>
    <CardTitle className='px-4 text-4xl absolute left-4 opacity-20'>Expenses</CardTitle>
    <div className="h-10 w-full px-4 flex gap-3 overflow-x-scroll overflow-y-hidden no-scrollbar relative z-10 mt-7">
      <Button className='flex gap-2 rounded-lg bg-[#FFFFFF]' variant="outline" size="default" asChild>
        <Link href="/dashboard/stats/electricity">
          <Zap className="h-3 w-3" color="#eab308" strokeWidth={3} />
          <p className="text-sm">Electricity</p>
        </Link>
      </Button>
      <Button className='flex gap-2 rounded-lg bg-[#FFFFFF]' variant="outline" size="default" asChild>
        <Link href="/dashboard/stats/gas">
          <Flame className="h-3 w-3" color="#ef4444" strokeWidth={3} />
          <p className="text-sm">Gas</p>
        </Link>
      </Button>
      <Button className='flex gap-2 rounded-lg bg-[#FFFFFF]' variant="outline" size="default" asChild>
        <Link href="/dashboard/stats/water">
          <Droplet className="h-3 w-3" color="#0ea5e9" strokeWidth={3} />
          <p className="text-sm">Water</p>
        </Link>
      </Button>
      <Button className='flex gap-2 rounded-lg bg-[#FFFFFF]' variant="outline" size="default" asChild>
        <Link href="/dashboard/stats/other">
          <ShoppingCart className="h-3 w-3" color="#10b981" strokeWidth={3} />
          <p className="text-sm">Other</p>
        </Link>
      </Button>
    </div>
  </section>
  );
}