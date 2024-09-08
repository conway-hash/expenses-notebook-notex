'use client'

import { ChartV1 } from "@/components/charts/ChartV1"
import { Icons } from "@/components/icons"
import Link from 'next/link'
import { useEffect, useState } from 'react';

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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Page() {
  const [activeBtn, setActiveBtn] = useState<string>('left');

  function handleClick(position: string) {
    setActiveBtn(position)
  }

  return (
    <main className="flex flex-col gap-3 p-4 pt-20">
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

      <div className="w-full h-10 flex gap-1 rounded-md border bg-card relative">
        <div className={`h-full w-1/2 bg-gray-400/50 absolute z-[0] rounded-md transition-transform ${activeBtn == 'left' ? 'translate-x-0' : 'translate-x-full'}`}></div>
        <div className="h-full w-full flex">
          <button className="h-full w-full rounded-md shadow-sm active:bg-gray-100/90 flex justify-center items-center gap-2 p-2" onClick={() => handleClick('left')}>
            <p className="text-sm">Table</p>
          </button>
          <button className="h-full w-full rounded-md shadow-sm active:bg-gray-100/90 flex justify-center items-center gap-2 p-2" onClick={() => handleClick('right')}>
            <p className="text-sm">Graph</p>
          </button>
        </div>
      </div>

      <div className="gap-3">
        {
          activeBtn == 'left' ?
          (
          <Table className="bg-card rounded-md shadow-sm">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          )
          :
          (
          <ChartV1 className="bg-card"/>
          )
        }
      </div>
    </main>
  )
}