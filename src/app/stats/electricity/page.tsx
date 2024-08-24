import { ChartV1 } from "@/components/charts/ChartV1"
import { Icons } from "@/components/icons"
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-4 pt-20">
       <div className="w-dvw h-dvh fixed z-[-1] top-0 left-0 bg-gradient-to-t from-stone-50 to-[#F0CD4D]"></div>
       <div className="flex gap-4 justify-between w-full p-6 fixed top-0 right-0 z-10">
        <button className="backdrop-blur-sm bg-white/30 rounded-md flex flex-col justify-center items-center gap-1 p-2">
          <Icons.plus className="w-6 h-6" fill="#494949"/>
        </button>
        <div className="backdrop-blur-sm bg-white/30 rounded-md w-full flex justify-center items-center text-lg font-semibold">
          Electricity
        </div>
        <Link href="/dashboard" className="backdrop-blur-sm bg-white/30 rounded-md flex flex-col justify-center items-center gap-1 p-2">
          <Icons.back className="w-6 h-6" fill="#494949"/>
        </Link>
      </div>
      <ChartV1/>
      <ChartV1/>
      <ChartV1/>
    </main>
  )
}