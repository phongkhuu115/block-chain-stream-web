import { MessageSchema, UpdateSchema } from "@lib/constant/validation";
import { getAxiosParam } from "@lib/helpers/api";
import { Button } from "@modules/common/components/ui/button";
import { Input } from "@modules/common/components/ui/input";
import axios from "axios";
import clsx from "clsx";
import { Field, Form, Formik, FormikHelpers, FormikState } from "formik";
import { Loader2, SendHorizontalIcon } from "lucide-react";
import React, { use, useEffect } from "react";
import { io } from 'socket.io-client';
import "./index.scss";
import { FormikInput } from "@modules/authentication/formik-comps";
import { useAuth } from "context/auth-context";

type Props = {
    username: string;
} & React.HTMLAttributes<HTMLDivElement>;

type Message = {
    id: string;
    username: string;
    message: string;
};



const ChatBox: React.FC<Props> = ({ className, username, ...props }: Props) => {
    const channelOwner = username;
    const { user } = useAuth();
    const [history, setHistory] = React.useState<Message[]>([]);
    const sender = user?.username || 'anonymous';

    const initMessage = {
        id: '',
        username: sender,
        message: '',
    } as Message

    const handleChat = async (message: Message, helper: FormikHelpers<Message>) => {
        console.log('message: ', message);
        const timeid = Date.now().toString();
        message.id = timeid;

        // NOTICE: dont drictly use message, use a copy of it, it is a memory reference

        const outgoingMessage = {
            id: timeid,
            username: sender,
            message: message.message,
        } as Message;

        setHistory([...history, outgoingMessage]);
        helper.resetForm();
        const paramComment = getAxiosParam(process.env.NEXT_PUBLIC_API_URL + '/comments', 'POST', outgoingMessage, '', { withCredentials: true, });
        const res = await axios.request(paramComment);
    };

    useEffect(() => {
        const socket = io('https://nt208-g4.site');
        console.log('comment_${channelOwner}: ', `comment_${channelOwner}`);
        socket.on(`comment_${channelOwner}`, (args: any) => {
            console.log('chat', args);
        });
    }, []);


    return (
        <Formik
            initialValues={initMessage}
            onSubmit={(values, helper) => handleChat(values, helper)}
            validationSchema={MessageSchema}
        >
            {({ submitForm, isSubmitting, errors, values, resetForm }) => {

                return (
                    <Form onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            submitForm();

                        }
                    }}>
                        <div className={clsx("chat__card w-full", className)}>
                            <div className="chat__header">
                                <div className="w-full text-center">Stream Chat</div>
                            </div>
                            <div className="chat__body h-full">
                                {
                                    history.map((message) => {
                                        return (
                                            <div key={message.id} className={clsx("message", { "incoming": message.username !== sender, "outgoing": message.username === sender })}>
                                                <p>{message.message}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>

                            <div className="chat__footer flex gap-2 w-full h-full center-item">
                                <div className="basis-3/4 w-full h-full">
                                    <Field
                                        name="message"
                                        component={FormikInput}
                                        placeholder="Type your message here..."
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="basis-1/4 w-full h-full">
                                    <Button disabled={isSubmitting} type="submit" className="w-full h-full" onClick={(e) => {
                                        e.preventDefault();
                                        submitForm();


                                    }}>
                                        {isSubmitting ? <Loader2 className="animate-spin" size={24} /> : <SendHorizontalIcon size={24} />}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik >
    );
};

export default ChatBox;
