'use client'

import {
  Bell,
  User,
  Settings,
} from "lucide-react"

import {
  Button }
from "@/components/ui/button"

import SummarySlider from "@/components/sections/SummarySlider"
import NewsFeed from "@/components/sections/NewsFeed"
import ExpensesSlider from "@/components/sections/ExpensesSlider"

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

      <SummarySlider />

      <ExpensesSlider />

      <NewsFeed />

    </main>
  );
  }