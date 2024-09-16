'use client'
import Link from 'next/link'
import { ReactNode } from "react";
import { useState } from 'react';

import { ExpensesTable } from "@/components/ExpensesTable"
import { ExpensesChart } from "@/components/ExpensesChart"

import { DataType, DataKey } from '@/lib/utils'

import {
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Plus,
  EllipsisVertical,
  Flame,
  Zap,
  Droplet,
  ShoppingCart,
} from "lucide-react"

import {
  Button }
from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

type StatVariable = {
  color: string;
  icon: ReactNode;
};

// Define the type for the whole statVariables object
type StatVariables = {
  [key: string]: StatVariable;
};


const statVariables: StatVariables = {
  gas: {
    color: "#ef4444",
    icon: <Flame className="h-4 w-4" color="#ef4444" strokeWidth={3} />
  },
  electricity: {
    color: "#eab308",
    icon: <Zap className="h-4 w-4" color="#eab308" strokeWidth={3} />
  },
  water: {
    color: "#0ea5e9",
    icon: <Droplet className="h-4 w-4" color="#0ea5e9" strokeWidth={3} />
  },
  other: {
    color: "#10b981",
    icon: <ShoppingCart className="h-4 w-4" color="#10b981" strokeWidth={3} />
  }
}

export default function Page({ params }:{
  params:
  {
    stat: string
  }
}) {
  const [data, setData] = useState<DataType[]>(weekData);
  const [selectedValue, setSelectedValue] = useState<DataKey>('w');

  const handleValueChange = (value: DataKey) => {
    setSelectedValue(value);
    setData(allData[value])
  };

  function capitalizeFirstLetter(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const currentStat: StatVariable = statVariables[params.stat]

  const renderComponent = (className: string, color: string, fill: string, strokeWidth: number) => {
    switch (params.stat) {
      case 'gas':
        return <Flame className={className} color={color} fill={fill} strokeWidth={strokeWidth} />;
      case 'electricity':
        return <Zap className={className} color={color} fill={fill} strokeWidth={strokeWidth} />;
      case 'water':
        return <Droplet className={className} color={color} fill={fill} strokeWidth={strokeWidth} />;
      case 'other':
        return <ShoppingCart className={className} color={color} fill={fill} strokeWidth={strokeWidth} />;
      default:
        return <div>Invalid stat</div>; // Fallback if no matching stat is found
    }
  };

  return (
    <main className="py-4 flex flex-col gap-4 bg-[#FFFFFF]">

      <div className='p-4 flex justify-between relative z-10'>

        {renderComponent("absolute left-0 -top-2 z-[-1] w-full h-20 opacity-15", currentStat.color, 'transparent', 3)}

        <Button className='h-8 w-8 rounded-full bg-[#EEEFF3]' variant="outline" size="icon" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>

        <CardTitle className='truncate max-w-52 leading-0'>
          {/*className='flex items-center gap-1'*/}
          {capitalizeFirstLetter(params.stat)}
        </CardTitle>

        <Button className='h-8 w-8 rounded-full bg-[#EEEFF3]' variant="outline" size="icon">
            <EllipsisVertical className="h-4 w-4" />
        </Button>

      </div>
      <div className='px-4 flex flex-col gap-2 relative z-10'>
        <div className='flex gap-2'>

          <Drawer>
            <Button className='h-8 min-w-14 rounded-full bg-[#FFFFFF]' variant="outline" size="icon" asChild>
              <DrawerTrigger>
                <Plus className="h-4 w-4" />
              </DrawerTrigger>
            </Button>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Add a record</DrawerTitle>
                <DrawerDescription>Fill the information below to add a record.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <div className='flex w-full gap-4'>
                  <button className='w-full'>Add</button>
                  <DrawerClose className='w-full'>
                    <button>Cancel</button>
                  </DrawerClose>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Select defaultValue="w" onValueChange={handleValueChange}>
            <SelectTrigger className="h-8 w-full rounded-full bg-[#FFFFFF]">
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
        <div className='flex justify-between gap-2'>

          <Button className='h-8 min-w-8 rounded-full bg-[#FFFFFF]' variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className='h-8 w-full flex justify-center items-center border rounded-full bg-[#FFFFFF]'>
            [DATE_OF_RANGE]
          </div>

          <Button className='h-8 min-w-8 rounded-full bg-[#FFFFFF]' variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>

        </div>
      </div>

      <Card className="rounded-t-2xl rounded-b-none">
        <CardHeader className="">
          <CardTitle>[CHART]</CardTitle>
          <CardDescription>[DESCRIPTION]</CardDescription>
        </CardHeader>
        <CardContent>
          <ExpensesChart className="" range={selectedValue}  data={data} graphColor={currentStat.color}/>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            [TREND]
          </div>
          <div className="leading-none text-muted-foreground">
            [INFO]
          </div>
        </CardFooter>
        <CardHeader className="">
          <CardTitle>[TABLE]</CardTitle>
          <CardDescription>[DESCRIPTION]</CardDescription>
        </CardHeader>
        <CardContent>
          <ExpensesTable className="" data={data}/>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            [TREND]
          </div>
          <div className="leading-none text-muted-foreground">
            [INFO]
          </div>
        </CardFooter>
      </Card>

    </main>
  )
}