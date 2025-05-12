import Header from "@/src/components/Header";
import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import { type UserWallet } from "@/types/index";

function App() {
  const userWallet: UserWallet = useTonWallet();
  const userWalletAddress = useTonAddress();

  return (
    <div>
      <Header userWallet={userWallet} />
      <h3 className="text-center md:text-2xl mt-10 text-wrap">
        {userWalletAddress ? (
          <>
            Connected to wallet:
            <span className="text-sky-600 font-semibold">
              {userWalletAddress.slice(0, 6)}...
              {userWalletAddress.slice(userWalletAddress.length - 5)}
            </span>
          </>
        ) : (
          "Please connect your wallet"
        )}
      </h3>
    </div>
  );
}

export default App;
