import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ExpenseItem {
  expense: string;
  input_date: string;
  target_date: string;
  change_date: string;
  finish_cubic_metres: number;
  finish_kilowatt_hours: number;
  calculated_from: string;
  start_cubic_metres: number;
  start_kilowatt_hours: number;
  amount_cubic_metres: number;
  amount_kilowatt_hours: number;
  currency: string;
  cost_per_unit: number;
  cost_source: string;
  cost: number;
}

export interface InteractiveComponentsProps {
  className?: string; // Optional className prop
  data: ExpenseItem[]; // Array of expense items
}