import { notifyError } from "@modules/common/components/toast-comps";
import { Button } from "@modules/common/components/ui/button";
import GoogleIcon from "@modules/common/icons/google-icon";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { LoaderIcon } from "lucide-react";
import React, { useMemo, useState } from "react";



type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const ThirdPartyAuth: React.FC<Props> = ({ className, ...props }: Props) => {

    const [credentialResponse, setCredentialResponse] =
        useState<CredentialResponse | null>();

    const user = useMemo(() => {
        if (!credentialResponse?.credential) return;
        return jwtDecode(credentialResponse.credential);
    }, [credentialResponse]);
    return (
        <div {...props}>
            <GoogleLogin
                type="icon"
                theme="filled_blue"
                shape="circle"
                onSuccess={credentialResponse => {
                    setCredentialResponse(credentialResponse);
                }}
                onError={() => {
                    notifyError('Login failed');
                }}
            />
        </div>

    );
};

export default ThirdPartyAuth;
