import { CHAIN } from "~/const/CONST";
import ConnectWalletBtn from "../ui/ConnectWalletBtn";
import { useAppSelector } from "@/redux/store";

const Header = () => {
  const userWallet = useAppSelector((state) => state.user.userWallet);
  
  return (
    <header className="relative border-b border-light">
      <div className="flex justify-between items-center text-light py-8 md:py-10">
        <h1 className="md:text-3xl">CashSplash</h1>
        <ConnectWalletBtn />
      </div>
      {userWallet && (
        <span className="absolute right-0 top-0 bg-light text-center text-primary animate-pulse px-1 opacity-75 rounded-b-sm">
          {CHAIN[userWallet.account.chain]}
        </span>
      )}
    </header>
  );
};

export default Header;
