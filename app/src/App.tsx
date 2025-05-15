import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Toaster } from "react-hot-toast";
import { useAppDispatch } from "./redux/store";
import { formatAddress } from "./lib/utils";
import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import { useEffect } from "react";
import { clearUser, setUser } from "./redux/slices/userSlice";

function App() {
  const userWallet = useTonWallet();
  const userWalletAddress = useTonAddress();
  const dispatch = useAppDispatch();

  // Listener for wallet connection status
  useEffect(() => {
    if (userWallet) {
      dispatch(
        setUser({
          userWallet: userWallet,
          userWalletAddress: userWalletAddress,
        })
      );
    } else {
      dispatch(clearUser());
    }
  }, [userWallet, userWalletAddress, dispatch]);

  return (
    <>
      <Header />
      <h3 className="text-light text-center text-wrap md:text-2xl mt-10">
        {userWalletAddress ? (
          <>
            Connected to wallet:
            <span className="text-sky-600 font-semibold">
              {formatAddress(userWalletAddress)}
            </span>
          </>
        ) : (
          "Please connect your wallet"
        )}
      </h3>
      <HeroSection />

      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
