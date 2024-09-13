'use client'

import { ExpensesTable } from "@/components/ExpensesTable"
import { ChartV1 } from "@/components/charts/ChartV1"
import { Icons } from "@/components/icons"
import Link from 'next/link'
import { useState } from 'react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
  {
    expense: "gas",
    input_date: "2024-09-12",
    target_date: "2024-09-12",
    change_date: "2024-09-12",
    finish_cubic_metres: 23500,
    finish_kilowatt_hours: 262350,
    calculated_from: "last_value",
    start_cubic_metres: 23250,
    start_kilowatt_hours: 259559,
    amount_cubic_metres: 250,
    amount_kilowatt_hours: 2791,
    currency: "euro",
    cost_per_unit: 35.5,
    cost_source: "user_input",
    cost: 8875
  },
  {
    expense: "gas",
    input_date: "2024-09-12",
    target_date: "2024-09-11",
    change_date: "2024-09-12",
    finish_cubic_metres: 23250,
    finish_kilowatt_hours: 259559,
    calculated_from: "initial_value",
    start_cubic_metres: 23000,
    start_kilowatt_hours: 256768,
    amount_cubic_metres: 250,
    amount_kilowatt_hours: 2791,
    currency: "euro",
    cost_per_unit: 35.5,
    cost_source: "user_input",
    cost: 8875
  },
  {
    expense: "gas",
    input_date: "2024-09-10",
    target_date: "2024-09-10",
    change_date: "2024-09-10",
    finish_cubic_metres: 23000,
    finish_kilowatt_hours: 256768,
    calculated_from: "amount_value",
    start_cubic_metres: 22500,
    start_kilowatt_hours: 251186,
    amount_cubic_metres: 500,
    amount_kilowatt_hours: 5582,
    currency: "euro",
    cost_per_unit: 35.0,
    cost_source: "www.gasprice.com",
    cost: 17500
  }
]

export default function Page() {
  const [activeBtn, setActiveBtn] = useState<string>('left');

  function handleClick(position: string) {
    setActiveBtn(position)
  }

  return (
    <main className="flex flex-col gap-3 py-4 pt-20">
      
      <div className="flex gap-4 justify-between w-full px-4 py-6 fixed top-0 right-0 z-10">
        <Link href="/dashboard" className="rounded-md border bg-card shadow-sm active:bg-card/75 flex flex-col justify-center items-center gap-1 p-2">
          <Icons.back className="w-6 h-6" fill="#494949"/>
        </Link>

        <div className="rounded-md border bg-card shadow-sm active:bg-card/75 w-full flex justify-center items-center text-lg font-medium">
          Gas
        </div>

        <Drawer>
          <DrawerTrigger className="rounded-md border bg-card shadow-sm active:bg-card/75 flex flex-col justify-center items-center gap-1 p-2">
            <Icons.plus className="w-6 h-6" fill="#494949"/>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <button>Submit</button>
              <DrawerClose>
                <button>Cancel</button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="h-10 flex px-4">
        {/* <div className={`h-full w-1/2 bg-gray-400/50 absolute z-[0] rounded-md transition-transform ${activeBtn == 'left' ? 'translate-x-0' : 'translate-x-full'}`}></div> */}
        <div className="h-full w-full flex rounded-md border bg-card">
          <button className="h-full w-full rounded-md shadow-sm active:bg-gray-100/90 flex justify-center items-center gap-2 p-2" onClick={() => handleClick('left')}>
            <p className="text-sm">Table</p>
          </button>
          <button className="h-full w-full rounded-md shadow-sm active:bg-gray-100/90 flex justify-center items-center gap-2 p-2" onClick={() => handleClick('right')}>
            <p className="text-sm">Graph</p>
          </button>
        </div>
      </div>

      <div className="flex px-4 overflow-x-scroll overflow-y-hidden no-scrollbar">
        {
          activeBtn == 'left' ?
          (
            <ExpensesTable className="bg-card rounded-md shadow-sm" data={data}/>
          )
          :
          (
          <ChartV1 className="bg-card" data={data}/>
          )
        }
      </div>
    </main>
  )
}