import { useState } from "react";
import toast from "react-hot-toast";
import { Copy, CopyCheck } from "lucide-react";

type CopyButtonProps = {
  text: string;
  className?: string;
};

const CopyButton = ({ text, className }: CopyButtonProps) => {
  const [clickedCopy, setClickedCopy] = useState(false);
  const notify = () => toast.success("Copied to clipboard!");

  const copyToClipboard = () => {
    setClickedCopy(true);
    navigator.clipboard.writeText(text);
    notify();
    setTimeout(() => {
      setClickedCopy(false);
    }, 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`${className} py-1 px-2 rounded-md`}
    >
      {!clickedCopy && <Copy className="w-4" />}
      {clickedCopy && <CopyCheck className="w-4" />}
    </button>
  );
};

export default CopyButton;
