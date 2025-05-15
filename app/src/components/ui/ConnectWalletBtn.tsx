import { useTonConnectUI } from "@tonconnect/ui-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useState } from "react";
import { ChevronDown, Copy, Loader2, Zap, ZapOff } from "lucide-react";
import { formatAddress } from "@/lib/utils";
import { useAppSelector } from "@/redux/store";
import toast from "react-hot-toast";

const ConnectWalletBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const userAddress = useAppSelector((state) => state.user.userWalletAddress);

  const notify = () => toast.success("Address copied to clipboard!");

  const copyAddressHandler = () => {
    navigator.clipboard.writeText(userAddress);
    notify();
  };
  const disconnectHandler = () => {
    setIsLoading(true);
    tonConnectUI.disconnect();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  // TODO: Implement loading while modal is open
  // useEffect(() => {
  //   if (tonConnectUI.modalState.status === "opened") {
  //     setIsLoading(true);
  //   }
  // }, [tonConnectUI.modalState.status]);

  return !userAddress ? (
    <button
      className="flex items-center gap-1 bg-secondary rounded-xl px-6 py-3 font-semibold hover:bg-primary hover:outline hover:outline-accent w-max"
      onClick={() => {
        // setIsLoading(true);
        tonConnectUI.openModal();
        // setIsLoading(false);
      }}
    >
      {!isLoading ? (
        <>
          <span>
            <Zap className="w-4" />
          </span>
          Connect Wallet
        </>
      ) : (
        <Loader2 className="animate-spin" />
      )}
    </button>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={isLoading ? "pointer-events-none" : ""}
        asChild
      >
        <button
          className="flex items-center gap-1 bg-secondary rounded-xl px-6 py-3 font-semibold hover:bg-primary hover:outline hover:outline-accent"
          onClick={() => tonConnectUI.openModal()}
        >
          {!isLoading ? (
            !userAddress ? (
              <>
                <span>
                  <Zap className="w-4" />
                </span>
                Connect Wallet
              </>
            ) : (
              <>
                {formatAddress(userAddress)} <ChevronDown />
              </>
            )
          ) : (
            <Loader2 className="animate-spin" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-light text-primary p-0">
        <DropdownMenuItem className="text-md hover:text-light p-0">
          <button
            className="flex items-center gap-1 hover:bg-accent px-5 py-3 w-full"
            onClick={copyAddressHandler}
          >
            <span>
              <Copy />
            </span>
            Copy Address
          </button>
        </DropdownMenuItem>
        <hr className="mx-auto opacity-15" />
        <DropdownMenuItem className="text-md p-0">
          <button
            className="flex items-center gap-1 text-red-500 hover:bg-red-200 hover:text-red-900 px-5 py-3 w-full"
            onClick={disconnectHandler}
          >
            <span>
              <ZapOff />
            </span>
            Disconnect
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ConnectWalletBtn;
