import { TableProps } from '@/lib/utils'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function ExpensesTable({
  className,
  data,
}: TableProps
) {
  return (
    <Table className={className}>
    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
    <TableHeader>
      <TableRow>
          {Object.keys(data[0]).map((value, value_index) => (
            <TableCell key={value_index}>{value}</TableCell>
          ))}
        {/*<TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>*/}
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((record, record_index) => (
        <TableRow key={record_index}>
          {Object.values(record).map((value, value_index) => (
            <TableCell key={value_index}>{value}</TableCell>
          ))}
        </TableRow>
        ))}
      {/* <TableRow>
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
      </TableRow> */}
    </TableBody>
  </Table>
  )
}