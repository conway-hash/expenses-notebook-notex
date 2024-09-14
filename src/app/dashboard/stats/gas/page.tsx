'use client'

import { ExpensesTable } from "@/components/ExpensesTable"
import { ExpensesChart } from "@/components/ExpensesChart"
import { Icons } from "@/components/icons"
import Link from 'next/link'
import { useState } from 'react';

import { DataType, DataKey } from '@/lib/utils'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { weekData, monthData, yearData } from "@/lib/data"

const allData = {
  w: weekData,
  m: monthData,
  y: yearData
}

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

// import { TrendingUp } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page() {
  const [activeBtn, setActiveBtn] = useState<number>(0);
  function handleClick(position: number) {
    setActiveBtn(position)
  }

  const [data, setData] = useState<DataType[]>(weekData);
  const [selectedValue, setSelectedValue] = useState<DataKey>('w');

  const handleValueChange = (value: DataKey) => {
    setSelectedValue(value);
    setData(allData[value])
  };

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

      <div className="flex flex-col px-4 w-full gap-4">
        {/* <div className={`h-full w-1/2 bg-gray-400/50 absolute z-[0] rounded-md transition-transform ${activeBtn == 'left' ? 'translate-x-0' : 'translate-x-full'}`}></div> */}
        <div className="w-full flex rounded-md border bg-card h-10 ">
          <button className="h-full w-full rounded-md shadow-sm active:bg-gray-100/90 flex justify-center items-center gap-2 p-2" onClick={() => handleClick(0)}>
            <p className="text-sm">Table</p>
          </button>
          <button className="h-full w-full rounded-md shadow-sm active:bg-gray-100/90 flex justify-center items-center gap-2 p-2" onClick={() => handleClick(1)}>
            <p className="text-sm">Graph</p>
          </button>
        </div>

        <Select onValueChange={handleValueChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Range</SelectLabel>
              <SelectItem value="w">Week</SelectItem>
              <SelectItem value="m">Month</SelectItem>
              <SelectItem value="y">Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex px-4 overflow-x-scroll overflow-y-hidden no-scrollbar w-full">
      <Card className="w-full">
        <CardHeader className="">
          <CardTitle>{activeBtn == 0 ? "[TABLE]" : "[CHART]"}</CardTitle>
          <CardDescription>[DATE_OF_RANGE]</CardDescription>
        </CardHeader>
        <CardContent>
        {
          activeBtn == 0 ?
            <ExpensesTable className="" data={data}/>
          :
            <ExpensesChart className="" range={selectedValue}  data={data} graphColor="#ef4444"/>
        }
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            [TREND]
            {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
          </div>
          <div className="leading-none text-muted-foreground">
            [INFO]
            {/* Showing total visitors for the last 6 months */}
          </div>
        </CardFooter>
      </Card>
      </div>
    </main>
  )
}