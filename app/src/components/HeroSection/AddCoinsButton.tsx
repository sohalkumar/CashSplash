import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { calculateGameCoins } from "@/lib/utils";
import { useAppSelector } from "@/redux/store";
import {
  useTonConnectUI,
  type SendTransactionRequest,
  type SendTransactionResponse,
} from "@tonconnect/ui-react";
import { useState } from "react";

import { CASH_SPLASH_WALLET_ADDRESS, COIN_PACKAGES } from "~/const/CONST";

const AddCoinsButton = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const user = useAppSelector((state) => state.user);
  // const [boc, setBoc] = useState(null);
  // const [error, setError] = useState(null);
  // const performTransaction = usePerformTransaction();
  const [transactionStatusDialogOpen, setTransactionStatusDialogOpen] =
    useState(false);
  const [transactionStatusDialogMessage, setTransactionStatusDialogMessage] =
    useState<{ message: string; error: string }>({
      message: "",
      error: "",
    });
  const [transactionStatusDialogType, setTransactionStatusDialogType] =
    useState<"success" | "error" | null>(null);

  const transactionSuccessHandler = (response: SendTransactionResponse) => {
    console.log("Transaction response:", response.boc);
    setTransactionStatusDialogOpen(true);
    setTransactionStatusDialogMessage({
      message: "Transaction successful",
      error: "",
    });
    setTransactionStatusDialogType("success");
  };

  const transactionFailureHandler = (error: Error) => {
    setTransactionStatusDialogOpen(true);
    setTransactionStatusDialogMessage({
      message: "",
      error: error.message.split(/\s+/).slice(2).join(" "),
    });
    setTransactionStatusDialogType("error");
  };

  const handleTransaction = (amount: number) => {
    const transaction: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 180,
      messages: [
        {
          address: CASH_SPLASH_WALLET_ADDRESS,
          amount: (1 * 1e9 * amount).toString(),
        },
      ],
      from: user.userWalletAddress,
      network: user.chain,
    };

    tonConnectUI
      .sendTransaction(transaction)
      .then(transactionSuccessHandler)
      .catch(transactionFailureHandler);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cta-btn border-2 border-secondary hover:bg-secondary hover:text-light text-xl font-semibold">
          Add Coins
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[75%] max-w-[90%] md:max-w-[75%] lg:max-w-[65%] overflow-y-scroll bg-secondary text-light">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Add Coins
          </DialogTitle>
          <DialogDescription className="text-center text-md md:text-lg">
            Choose from the following
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 items-center justify-items-center">
          {COIN_PACKAGES.map(({ id, price, image }) => {
            return (
              <div
                key={id}
                className="bg-light rounded-lg shadow-lg shadow-primary cursor-pointer"
                onClick={() => handleTransaction(price)}
              >
                <div className="text-primary px-5">
                  <img className="" src={image} />
                  <p className=" text-center italic underline">
                    {calculateGameCoins(price)}
                  </p>
                </div>
                <div>
                  <button className="bg-tertiary w-full rounded-b-lg py-2 mt-2 font-bold">
                    {price} TON
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transaction Status Dialog */}
        <Dialog
          open={transactionStatusDialogOpen}
          onOpenChange={setTransactionStatusDialogOpen}
        >
          <DialogContent className="bg-light">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold">
                Transaction Status :{" "}
                <span
                  className={
                    transactionStatusDialogType === "success"
                      ? "text-green-800"
                      : "text-red-800"
                  }
                >
                  {transactionStatusDialogType}
                </span>
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-center text-md md:text-lg">
              Message:{" "}
              <span>
                {transactionStatusDialogMessage?.message ||
                  transactionStatusDialogMessage?.error}
              </span>
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <button className="border-2 border-secondary hover:bg-secondary hover:text-light text-lg font-semibold px-8 py-3 w-fit rounded-xl mx-auto">
                  Close
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
};

export default AddCoinsButton;
