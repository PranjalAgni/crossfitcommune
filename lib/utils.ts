import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function classNames(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}
