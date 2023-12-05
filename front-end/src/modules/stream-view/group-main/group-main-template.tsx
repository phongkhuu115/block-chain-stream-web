import { Card, CardContent, CardFooter } from "@components/ui/card";
import StreamInfomation, {
  ViewersCount,
} from "@modules/left-sidebar/stream-infomation";
import UnitStreamView from "../unit-stream-view/stream-view-unit";
import { Button } from "@components/ui/button";

import favicon from "app/favicon.ico";
import { Eye, MoreHorizontal, Settings, Share2 } from "lucide-react";

type Props = {};

const GroupMainTemplate = (props: Props) => {
  return (
    <Card className="flex flex-col rounded-xl shadow-xl bg-secondary pt-3 border-none">
      <CardContent className="flex w-full h-full items-center justify-center p-2">
        <UnitStreamView />
      </CardContent>
      <CardFooter className="mt-[3em] flex flex-col justify-start items-start">
        <h1 className="stream-watch-metadata font-bold text-2xl text-left">
          ChessTV - 24/7 Streaming Of Chess Tournaments
        </h1>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-between items-center ">
            <StreamInfomation
              className="pr-4"
              username="Domixo"
              bio="I'm a streamer"
              imageSrc={favicon}
            />
            <Button
              variant={"outline"}
              className="bg-beta hover:bg-secondary rounded-full"
            >
              <p className="font-bold px-4">Follow</p>
            </Button>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <ViewersCount followersCount="12K" />
            <Share2 size={25} />
            <MoreHorizontal size={25} strokeWidth={3} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GroupMainTemplate;
