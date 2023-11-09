import ImageComponent from "@components/ui/image";
import DotLiveIcon from "common/icons/dot-live-icon";
import { List } from "lucide-react";
import React from "react";

type Props = {
  imageSrc: string;
  username: string;
  bio: string;
  followersCount: string;
};

const StreamInfomation = (props: Props) => {
  const { imageSrc, username, bio, followersCount } = props;
  return (
    <div className="justify-between items-center flex ">
      <ImageComponent src={imageSrc} alt="User Image" />
      <div className="items-start flex flex-col w-[40%]">
        <h2 className="justify-center text-white text-2xl font-bold">
          {username}
        </h2>
        <p className="justify-center text-white text-base italic mt-2">{bio}</p>
      </div>
      <div className="items-center flex gap-2 w-[20%]">
        <DotLiveIcon size={20} />
        <p className="justify-center self-stretch text-white text-right text-xl italic font-medium">
          {followersCount}
        </p>
      </div>
    </div>
  );
};

export default StreamInfomation;
