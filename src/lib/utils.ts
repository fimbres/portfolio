import { type ClassValue, clsx } from "clsx"
import type { Entry } from "contentful";
import { twMerge } from "tailwind-merge"
import type { Project } from "./contentful";

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

export const sortWebProjects = (a: Entry<Project, undefined, string>, b: Entry<Project, undefined, string>) => {
  if (a.fields.device === 'web' && b.fields.device !== 'web') return -1;
  if (b.fields.device === 'web' && a.fields.device !== 'web') return 1;

  return 0;
}
