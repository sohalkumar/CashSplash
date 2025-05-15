import { CASH_SPLASH_WALLET_ADDRESS } from "~/const/CONST";
import CopyButton from "../ui/CopyButton";
import { formatAddress } from "@/lib/utils";

const CashSplashAddress = () => {
  return (
    <div>
      <p className="text-2xl font-semibold">CashSplash Wallet Address:</p>
      <div className="flex justify-center items-center gap-2 mt-2">
        <div className="bg-gray-700 text-light font-semibold px-2 py-1 rounded-md">
          <p className="block md:hidden">
            {formatAddress(CASH_SPLASH_WALLET_ADDRESS)}
            {/* {CASH_SPLASH_WALLET_ADDRESS.slice(0, 6)}...
            {CASH_SPLASH_WALLET_ADDRESS.slice(
              CASH_SPLASH_WALLET_ADDRESS.length - 5
            )} */}
          </p>
          <p className="hidden md:block">{CASH_SPLASH_WALLET_ADDRESS}</p>
        </div>
        <CopyButton
          text={CASH_SPLASH_WALLET_ADDRESS}
          className="bg-secondary text-light"
        />
      </div>
    </div>
  );
};

export default CashSplashAddress;
