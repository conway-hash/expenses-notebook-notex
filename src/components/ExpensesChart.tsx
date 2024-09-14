"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
// import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import { GraphProps } from '@/lib/utils'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with a label"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ExpensesChart({
  className,
  data,
  graphColor,
  range
}: GraphProps
) {
  // const filteredData = data.map(item => ({
  //   amount_cubic_metres: item.amount_cubic_metres,
  //   target_date: item.target_date
  // }));
  const amounts = data.map(item => item.amount);

  const minAmount = Math.min(...amounts);
  const maxAmount = Math.max(...amounts);

  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          left: -50,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={0}
          tickFormatter={() => ''}
          domain={[minAmount - minAmount/20, maxAmount + minAmount/20]}
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={true}
          tickMargin={10}
          tickFormatter={(value) => {
            const date = new Date(value);
            let out_date;
            if (range == 'w') {
              out_date = date.toLocaleDateString('en-US', { weekday: 'short' });
            } else if (range == 'm') {
              out_date = date.toLocaleDateString('en-US', { day: 'numeric' });
            } else if (range == 'y') {
              out_date = date.toLocaleDateString('en-US', { month: 'short' });
            } else {
              return "ERR"
            }

            return out_date.slice(0, 2)
          }}
        />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Line
          dataKey="amount"
          type="linear"
          stroke={graphColor}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>


    // <ChartContainer config={chartConfig}>
    //   <BarChart
    //     accessibilityLayer
    //     data={data}
    //     margin={{
    //       top: 20,
    //     }}
    //   >
    //     <CartesianGrid vertical={false} />
    //     <XAxis
    //       dataKey="date"
    //       tickLine={false}
    //       tickMargin={10}
    //       axisLine={false}
    //       tickFormatter={(value) => {
    //         const date = new Date(value);
    //         let out_date;
    //         if (range == 'w') {
    //           out_date = date.toLocaleDateString('en-US', { weekday: 'short' });
    //         } else if (range == 'm') {
    //           out_date = date.toLocaleDateString('en-US', { day: 'numeric' });
    //         } else if (range == 'y') {
    //           out_date = date.toLocaleDateString('en-US', { month: 'short' });
    //         } else {
    //           return "ERR"
    //         }

    //         return out_date
    //       }}
    //     />
    //     <ChartTooltip
    //       cursor={false}
    //       content={<ChartTooltipContent indicator="line" />}
    //     />
    //     <Bar dataKey="amount" fill={graphColor} radius={8}>
    //       <LabelList
    //         position="top"
    //         offset={12}
    //         className="fill-foreground"
    //         fontSize={12}
    //       />
    //     </Bar>
    //   </BarChart>
    // </ChartContainer>
  )
}