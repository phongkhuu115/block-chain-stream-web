"use client";

import { Button } from "@components/ui/button";
import WagmiComponent from "@components/wagmiComponent/wagmi";
import { actionsLinks } from "@lib/constant/action-links";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ConnectButtonRenderer } from "@rainbow-me/rainbowkit/dist/components/ConnectButton/ConnectButtonRenderer";
import { LucideIcon, PanelTopOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const DropDownAction = (props: Props) => {
  const { className } = props;
  return (
    <div className={`group relative ${className}`}>
      <div className="flex justify-center items-center h-fit w-fit hover:bg-[#9b5d5d] p-5  ">
        <PanelTopOpen className=" h-10 w-10 large::h-5 large::w-5" />
      </div>

      <ul className="absolute opacity-0 invisible bg-[#9b5d5d] child-transform transition-all transform delay-150 ease-in-out group-hover:opacity-100 group-hover:visible mt-2 rounded-[20px] shadow-xl z-50 p-1 right-0">
        {actionsLinks.map((link, index) => (
          <Button key={index}>
            <Link
              href={link.href}
              className="flex flex-col items-center justify-center gap-[5px] min-w-[150px] hover:bg-secondary group p-3 rounded-[20px] "
            >
              <div className="relative font-extrabold flex items-center justify-center w-full ">
                {link.name}
              </div>
            </Link>
          </Button>
        ))}
      </ul>
    </div>
  );
};

type CustomRainbowConnectButtonProps = {
  icon: LucideIcon;
};

const CustomRainbowConnectButton = (props: CustomRainbowConnectButtonProps) => {
  return (
    <WagmiComponent>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          type AuthenticationStatus =
            | "connected"
            | "connecting"
            | "disconnected";

          const isWalletConnected =
            (authenticationStatus as AuthenticationStatus) === "connected";
          const isWalletConnecting =
            (authenticationStatus as AuthenticationStatus) === "connecting";
          const isWalletDisconnected =
            (authenticationStatus as AuthenticationStatus) === "disconnected" ||
            !authenticationStatus;

          const handleConnectWallet = () => {
            if (isWalletDisconnected) {
              openConnectModal();
            } else if (isWalletConnecting) {
              return;
            } else if (isWalletConnected) {
              openAccountModal();
            }
          };

          return (
            <div
              className="flex justify-center items-center h-full  "
              onClick={handleConnectWallet}
            >
              <props.icon className="text-white w-4 h-4 " strokeWidth={3} />
            </div>
          );
        }}
      </ConnectButton.Custom>
    </WagmiComponent>
  );
};

const VerticalAction = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-end ">
      {actionsLinks.map((action, index) => (
        <Button
          key={index}
          variant="link"
          className="flex justify-center items-center h-fit w-fit hover:bg-[#9b5d5d] rounded-[20px] p-3"
        >
          {action.name === "Wallet" ? (
            <CustomRainbowConnectButton
              icon={action.icon as LucideIcon}
            ></CustomRainbowConnectButton>
          ) : (
            <Link href={action.href}>
              <div className="flex justify-center items-center h-full  ">
                <action.icon className="text-white w-4 h-4 " strokeWidth={3} />
              </div>
            </Link>
          )}
        </Button>
      ))}
    </div>
  );
};

const Actions = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-center gap-[20px]">
      {/* <DropDownAction className="" /> */}
      <VerticalAction />
    </div>
  );
};

export default Actions;
