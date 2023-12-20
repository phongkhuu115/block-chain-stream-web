import { CommentSchema } from "@lib/constant/validation";
import { getAxiosParam } from "@lib/helpers/api";
import { FormikInput } from "@modules/authentication/formik-comps";
import { Button } from "@modules/common/components/ui/button";
import axios from "axios";
import clsx from "clsx";
import { useAuth } from "context/auth-context";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Loader2, SendHorizontalIcon } from "lucide-react";
import React, { useEffect } from "react";
import { io } from 'socket.io-client';
import "./index.scss";
import { notifyError } from "@modules/common/components/toast-comps";

type Props = {
    username: string;
} & React.HTMLAttributes<HTMLDivElement>;

type MessagePayload = {
    sender: string;
    timestamp: string;
    data: string;
};

type Message = {
    username: string;
    message: MessagePayload;
};

const ChatBox: React.FC<Props> = ({ className, username, ...props }: Props) => {
    const channelOwner = username;
    const { user } = useAuth();
    const [history, setHistory] = React.useState<MessagePayload[]>([]);
    console.log('history: ', history);

    const sender = user?.username || 'anonymous';

    const initMessage = {
        username: channelOwner,
        message: {
            sender: sender || '',
            timestamp: '',
            data: '',
        } as MessagePayload,
    } as Message

    const handleChat = async (data: Message, helper: FormikHelpers<Message>) => {
        const timeid = Date.now().toString();

        const outgoingMessage = {
            username: channelOwner,
            message: {
                sender: sender || '',
                timestamp: timeid || '',
                data: data.message.data || '',
            } as MessagePayload,
        } as Message;

        const paramComment = getAxiosParam(process.env.NEXT_PUBLIC_API_URL + '/comments', 'POST', outgoingMessage, '', { withCredentials: true, });

        try {
            const res = await axios.request(paramComment);
            if (res.status === 200) {
                helper.resetForm();
                helper.setSubmitting(false);
            } else {
                helper.setSubmitting(false);
                notifyError('Cannot send message')
            }
        } catch (error) {
            helper.setSubmitting(false);
            notifyError('Cannot send message')
        }
    };

    useEffect(() => {
        const socket = io('https://nt208-g4.site');
        console.log('comment_${channelOwner}: ', `comment_${channelOwner}`);
        socket.on(`comment_${channelOwner}`, (args: MessagePayload) => {
            const incomingMessage = {
                sender: args.sender || '',
                timestamp: args.timestamp || '',
                data: args.data || '',
            } as MessagePayload;
            console.log('incomingMessage: ', incomingMessage);
            incomingMessage.timestamp = new Date(parseInt(incomingMessage.timestamp)).toLocaleString();
            setHistory([...history, incomingMessage]);
        });
    }, []);


    return (
        <Formik
            initialValues={initMessage}
            onSubmit={(values, helper) => handleChat(values, helper)}
            validationSchema={CommentSchema}
        >
            {({ submitForm, isSubmitting, isValid }) => {
                // console.log('errors: ', errors);
                // console.log('values: ', values);

                return (
                    <Form onKeyDown={(e) => {
                        if (e.key === 'Enter' && !isSubmitting && isValid) {
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
                                            <div key={message.timestamp} className={clsx("message", { "incoming": message.sender !== sender, "outgoing": message.sender === sender })}>
                                                <p>{message.data}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>

                            <div className="chat__footer flex gap-2 w-full h-full center-item">
                                <div className="basis-3/4 w-full h-full">
                                    <Field
                                        name="message.data"
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
