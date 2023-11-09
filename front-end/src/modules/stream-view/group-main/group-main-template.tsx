import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@components/ui/card";
import UnitStreamView from "../unit-stream-view/stream-view-unit";

type Props = {};

const GroupMainTemplate = (props: Props) => {
  return (
    <Card className="flex flex-col ">
      <CardContent className="flex w-full h-full items-center justify-center">
        <UnitStreamView />
      </CardContent>
    </Card>
  );
};

export default GroupMainTemplate;
