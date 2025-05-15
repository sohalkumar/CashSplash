import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { CHAIN } from "@tonconnect/ui-react";
import type { UserWallet, WalletAddress } from "~/types";

interface UserState {
  userWallet: UserWallet;
  userWalletAddress: WalletAddress;
  chain: CHAIN | undefined;
}

const initialState: UserState = {
  userWallet: null,
  userWalletAddress: "",
  chain: undefined
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ userWallet: UserWallet;  userWalletAddress: WalletAddress}>) => {
      state.userWallet = action.payload.userWallet;
      state.userWalletAddress = action.payload.userWalletAddress;
      state.chain = action.payload.userWallet?.account.chain === "-239" ? CHAIN.MAINNET : CHAIN.TESTNET;
    },
    clearUser: () => initialState
  }
})

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;