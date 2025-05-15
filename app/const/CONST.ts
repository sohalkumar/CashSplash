import single_coin from "@/assets/images/ton-coins/single-coin.png";
import coin_stack from "@/assets/images/ton-coins/coin-stack.png";
import coin_pot from "@/assets/images/ton-coins/coin-pot.png";
import coin_pot_top from "@/assets/images/ton-coins/coin-pot-top.png";

export const CHAIN = {
  "-239": "MAINNET" ,
  "-3": "TESTNET",
}

// type CHAIN = typeof CHAIN[keyof typeof CHAIN];

export const CASH_SPLASH_WALLET_ADDRESS="0QCPXeH2cw3KNmPEVKDNmFeYKtvfuM275ZdQB0QonAb07mMj"

export const TON_TO_GAME_COIN = 60 // 1 TON = 60 Game Coins

export const COIN_PACKAGES: { id: number; price: number; image: string; }[] = [
  // { id: 1, price: 0.99, coins: 60, image: single_coin },
  // { id: 2, price: 4.99, coins: 300, image: coin_stack },
  // { id: 3, price: 9.99, coins: 600, image: coin_stack },
  // { id: 4, price: 24.99, coins: 1500, image: coin_pot },
  // { id: 5, price: 49.99, coins: 3000, image: coin_pot },
  // { id: 6, price: 99.99, coins: 6000, image: coin_pot_top },
  // TODO: Fix the prices
  { id: 1, price: 0.099, image: single_coin },
  { id: 2, price: 4.99, image: coin_stack },
  { id: 3, price: 9.99, image: coin_stack },
  { id: 4, price: 24.99, image: coin_pot },
  { id: 5, price: 49.99, image: coin_pot },
  { id: 6, price: 99.99, image: coin_pot_top },
]