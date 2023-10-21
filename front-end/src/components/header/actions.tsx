import { actionsLinks } from "@lib/constant/action-links";
import Link from "next/link";import React from "react";

type Props = {};

const Actions = (props: Props) => {
  return (
    <div className="inline-flex items-center h-full relative">
      {actionsLinks.map((action, index) => (
        <div
          key={index}
          className="flex justify-center items-center h-full w-[50px] hover:bg-[#9b5d5d] rounded-[50px]"
        >
          <Link href={action.href}>
            <div className="flex justify-center items-center h-full w-[50px] rounded-[50px]">
              <action.icon className="text-white" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Actions;
