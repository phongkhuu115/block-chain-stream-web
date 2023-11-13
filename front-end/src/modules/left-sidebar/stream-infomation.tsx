import ImageComponent from "@components/ui/image";
import DotLiveIcon from "common/icons/dot-live-icon";
import { Eye } from "lucide-react";
import React from "react";

type Props = {
  imageSrc?: string;
  username: string;
  bio: string;
  followersCount: string;
  className?: string;
};

type FollowerCountProps = {
  followersCount: string;
};

const FollowersCount = (props: FollowerCountProps) => {
  const { followersCount } = props;
  return (
    <p className="justify-center self-stretch text-white text-right text-xl italic font-medium">
      {followersCount}
    </p>
  );
};

export const ViewersCount = (props: FollowerCountProps) => {
  const { followersCount } = props;
  return (
    <p className="flex flex-row justify-center px-2 items-center rounded-full  bg-beta text-white text-right text-xl italic font-medium">
      <Eye size={20} />
      {followersCount}
    </p>
  );
};

const StreamInfomation = (props: Props) => {
  const { imageSrc, username, bio, followersCount, className } = props;
  return (
    <div className={className}>
      <div className="justify-between items-center flex mt-2">
        <ImageComponent src={imageSrc} alt="User Image" />
        <div className="items-start flex flex-col w-[40%]">
          <h2 className="justify-center text-white text-2xl font-bold">
            {username}
          </h2>
          <p className="justify-center text-white text-base italic whitespace-nowrap">
            {bio}
          </p>
        </div>
        <div className="items-center flex gap-2 w-[20%]">
          {/* <DotLiveIcon size={20} /> */}
          {followersCount && <FollowersCount followersCount={followersCount} />}
        </div>
      </div>
    </div>
  );
};
StreamInfomation.displayName = "StreamInfomation";

export default StreamInfomation;
