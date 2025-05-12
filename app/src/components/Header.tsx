import { TonConnectButton } from "@tonconnect/ui-react";
import { type UserWallet } from "@/types/index";
import * as CONST from "@/const/CONST";

type HeaderProps = {
  userWallet: UserWallet;
};

const Header = ({ userWallet }: HeaderProps) => {
  // const [tonConnectUI, setOptions] = useTonConnectUI();

  return (
    <header>
      <div className="flex justify-between items-center bg-gray-700 text-amber-100 p-5">
        <h1 className="md:text-3xl">CashSplash</h1>
        <TonConnectButton />
        {/* <button
        className="bg-sky-600 rounded-full px-6 py-2 font-semibold hover:bg-gray-700 hover:outline hover:outline-sky-300 cursor-pointer"
        onClick={() => tonConnectUI.openModal()}
      >
        Connect Wallet
      </button> */}
      </div>
      {userWallet && (
        <p className="bg-indigo-200 text-center text-cyan-700">{CONST.Chain[userWallet.account.chain]}</p>
      )}
    </header>
  );
};

export default Header;
