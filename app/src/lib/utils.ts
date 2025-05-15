import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { TON_TO_GAME_COIN } from "~/const/CONST"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAddress(address: string) {
  return `${address.slice(0, 5)}...${address.slice(-5)}`
}

export function calculateGameCoins(tons: number) {
  return Math.ceil(tons * TON_TO_GAME_COIN);
}