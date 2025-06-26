"use client";
import * as React from "react";
import { Connector, useConnect } from "wagmi";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const [open, setOpen] = React.useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="default" className="rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold shadow-lg px-6 py-2 hover:from-green-500 hover:to-green-700 transition-all">
          Connect Wallet
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px] rounded-2xl shadow-2xl border border-green-400/40 bg-black/95 p-0 overflow-hidden">
        <AlertDialogHeader className="px-6 pt-6">
          <AlertDialogTitle className="text-green-300 text-xl font-bold">Connect your wallet</AlertDialogTitle>
          <AlertDialogDescription className="text-white/80">
            Choose your preferred wallet to connect to our dApp. Make sure you
            have the wallet installed and set up.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-4 py-4 px-6">
          {connectors.map((connector) => (
            <WalletOption
              key={connector.uid}
              connector={connector}
              onClick={() => {
                connect({ connector });
                setOpen(false);
              }}
            />
          ))}
        </div>
        <AlertDialogFooter className="bg-black/80 px-6 py-4 border-t border-green-400/10">
          <AlertDialogCancel className="rounded-full px-6 py-2 bg-zinc-800 text-white hover:bg-zinc-700 transition-all">Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

const WalletOption = ({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <Button
      variant="outline"
      className="justify-start gap-2 w-full rounded-xl border-green-400 text-green-300 bg-black/80 hover:bg-green-900/40 shadow-sm px-4 py-2 font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={!ready}
      onClick={onClick}
    >
      {connector.name}
    </Button>
  );
};