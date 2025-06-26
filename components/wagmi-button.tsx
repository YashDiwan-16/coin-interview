"use client";
import { useAccount, useDisconnect } from "wagmi";
import { WalletOptions } from "@/components/wagmi-options";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

const WagmiWalletButton = () => {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatAddress = (addr: string) => {
    if (!addr) return "";
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast({
        description: "Address copied to clipboard",
      });
    }
  };

  // Don't render anything until mounted to prevent hydration errors
  if (!mounted) return null;

  if (isConnected && address) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-full border-green-400 text-green-400 bg-black/80 hover:bg-green-900/30 shadow-md px-4 py-2 font-mono transition-all duration-150"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {formatAddress(address)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="rounded-xl shadow-lg border border-green-400/40 bg-black/95 min-w-[180px] p-1">
          <DropdownMenuItem
            onClick={copyAddress}
            className="rounded-md px-3 py-2 hover:bg-green-900/40 cursor-pointer text-green-300"
          >
            Copy Address
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => disconnect()}
            className="rounded-md px-3 py-2 hover:bg-red-900/40 cursor-pointer text-red-400"
          >
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return <WalletOptions />;
};

export default WagmiWalletButton;