import * as Alert from "@modules/common/components/ui/alert";
import { Button } from "@modules/common/components/ui/button";
import { AlertCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import "./index.scss";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const AlertLogin: React.FC<Props> = ({ className, ...props }: Props) => {

    return (
        <Alert.Alert className="flex flex-1 flex-col center-item rounded-lg border border-beta shadow p-3">
            <div className="flex gap-2 justify-center items-center pt-3">
                <AlertCircleIcon className="w-8 h-8 text-red-500" />
                <Alert.AlertTitle className="text-red-500">Attention</Alert.AlertTitle>
            </div>
            <div>
                <Alert.AlertDescription className="p-8">
                    You are not logged in. Please <Link href='/login'>login</Link> or <Link href='/register'>register</Link> to view this page.
                </Alert.AlertDescription>
                <div className="flex mt-1 center-item">
                    <Button className="potato__button">
                        <span>
                            <Link href='/login'>Login</Link>
                        </span>
                    </Button>
                </div>
            </div>
        </Alert.Alert>
    );
};

export default AlertLogin;
