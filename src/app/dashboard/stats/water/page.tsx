import { Icons } from "@/components/icons"
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col gap-2 p-4 pt-20">
      <div className="flex gap-4 justify-between w-full px-4 py-6 fixed top-0 right-0 z-10">
        <Link href="/dashboard" className="rounded-md border bg-card shadow-sm active:bg-card/75 flex flex-col justify-center items-center gap-1 p-2">
          <Icons.back className="w-6 h-6" fill="#494949"/>
        </Link>
        <div className="rounded-md border bg-card shadow-sm active:bg-card/75 w-full flex justify-center items-center text-lg font-medium">
          Water
        </div>
        <button className="rounded-md border bg-card shadow-sm active:bg-card/75 flex flex-col justify-center items-center gap-1 p-2">
          <Icons.plus className="w-6 h-6" fill="#494949"/>
        </button>
      </div>
      {/* <ChartV1/>
      <ChartV1/>
      <ChartV1/> */}
    </main>
  )
}