import { Icons } from "@/components/icons"
import Link from 'next/link'

import {
  Bell,
  User,
  Flame,
  Zap,
  Droplet,
  ShoppingCart,
  Settings,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Button }
from "@/components/ui/button"

import { PieChartV1 } from "@/components/charts/PieChartV1"

export default function Page() {
  return (
    <main className="flex flex-col gap-3 py-4">

      <div className="flex justify-between items-center px-4">
        <div className="flex flex-col">
          <h2 className="font-normal">Good evening,</h2>
          <h1 className="text-xl font-medium">Anton Bokor</h1>
        </div>
        <div className="flex gap-2">
          <Button className='h-8 w-8 rounded-full bg-[#EEEFF3]' variant="outline" size="icon">
              <Bell className="h-4 w-4" />
          </Button>
          <Button className='h-8 w-8 rounded-full bg-[#EEEFF3]' variant="outline" size="icon">
              <User className="h-4 w-4" />
          </Button>
          <Button className='h-8 w-8 rounded-full bg-[#EEEFF3]' variant="outline" size="icon">
              <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="h-10 w-full px-4 flex gap-3 overflow-x-scroll overflow-y-hidden no-scrollbar">
        <Button className='flex gap-2 rounded-full bg-[#FFFFFF]' variant="outline" size="default" asChild>
          <Link href="/dashboard/stats/electricity">
            <Zap className="h-3 w-3" color="#eab308" strokeWidth={3} />
            <p className="text-sm">Electricity</p>
          </Link>
        </Button>
        <Button className='flex gap-2 rounded-full bg-[#FFFFFF]' variant="outline" size="default" asChild>
          <Link href="/dashboard/stats/gas">
            <Flame className="h-3 w-3" color="#ef4444" strokeWidth={3} />
            <p className="text-sm">Gas</p>
          </Link>
        </Button>
        <Button className='flex gap-2 rounded-full bg-[#FFFFFF]' variant="outline" size="default" asChild>
          <Link href="/dashboard/stats/water">
            <Droplet className="h-3 w-3" color="#0ea5e9" strokeWidth={3} />
            <p className="text-sm">Water</p>
          </Link>
        </Button>
        <Button className='flex gap-2 rounded-full bg-[#FFFFFF]' variant="outline" size="default" asChild>
          <Link href="/dashboard/stats/other">
            <ShoppingCart className="h-3 w-3" color="#10b981" strokeWidth={3} />
            <p className="text-sm">Other</p>
          </Link>
        </Button>
      </div>

      <div className="w-full px-4 flex gap-3 overflow-x-scroll overflow-y-hidden no-scrollbar">
        <Card className="min-w-72">
          <CardHeader className="">
            <CardTitle>[NEWS]</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec iaculis felis. Suspendisse potti.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="min-w-72">
          <CardHeader className="">
            <CardTitle>[NAME]</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec iaculis felis. Suspendisse potti.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="min-w-72">
          <CardHeader className="">
            <CardTitle>[NAME]</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec iaculis felis. Suspendisse potti.</CardDescription>
          </CardHeader>
        </Card>
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