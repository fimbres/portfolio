import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateYearsExperience(): number {
  const start = new Date('2020-03-01');
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  const monthDiff = today.getMonth() - start.getMonth();
  const dayDiff   = today.getDate()  - start.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years--;
  }

  return years;
}
