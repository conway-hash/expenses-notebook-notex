'use client'

import {
  Bell,
  User,
  Settings,
  EllipsisVertical,
} from "lucide-react"

import {
  CardTitle,
  CardDescription
} from "@/components/ui/card"

import {
  Button }
from "@/components/ui/button"

import SummarySlider from "@/components/sections/SummarySlider"
import NewsFeed from "@/components/sections/NewsFeed"
import ExpensesSlider from "@/components/sections/ExpensesSlider"

export default function Page() {
  return (
    <main className="flex flex-col gap-3 py-4">

      <div className='px-4 flex justify-between'>
        <div className="flex flex-col">
          <CardDescription>
            Good Evening,
          </CardDescription>
          <CardTitle className='max-w-48 truncate'>
            Anton Bokor
          </CardTitle>
        </div>
        <div className="flex gap-2 items-center">
          <Button className='h-8 w-8 rounded-full bg-[#EEEFF3]' variant="outline" size="icon">
              <Settings className="h-4 w-4" />
          </Button>
          <Button className='h-8 w-8 rounded-full bg-[#EEEFF3]' variant="outline" size="icon">
              <User className="h-4 w-4" />
          </Button>
          <Button className='h-8 w-8 rounded-full bg-[#EEEFF3]' variant="outline" size="icon">
              <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <SummarySlider />

      <ExpensesSlider />

      <NewsFeed />

    </main>
  );
  }