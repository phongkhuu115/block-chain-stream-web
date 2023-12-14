import { SignupSchema } from "@lib/constant/validation";
import { Label } from "@radix-ui/react-label";
import clsx from 'clsx';
import { useAuth } from "context/auth-context";
import {
    ErrorMessage,
    Field,
    Form,
    Formik
} from 'formik';
import React from "react";
import { Button } from "../../common/components/ui/button";
import { Card, CardContent, CardFooter } from "../../common/components/ui/card";
import { FormikInput, FormikCheckBox } from "../formik-fields";

type Props = {

} & React.HTMLAttributes<HTMLDivElement>;

const initSignUp = {
    user_id: '',
    username: '',
    user_fullname: '',
    user_email: '',
    user_stream_key: '',
    user_avatar: '',
    user_role: '',
    user_password: '',
    confirm_password: '',
    user_agree: false,
};



const SignUp: React.FC<Props> = ({ className, ...props }: Props) => {
    const { handleAuth } = useAuth();

    return (
        <Card className={clsx(className, "border-none")}  {...props}>
            <CardContent className='space-y-2'>
                <Formik
                    initialValues={initSignUp}
                    onSubmit={(values) => handleAuth(values)}
                    validationSchema={SignupSchema}
                >
                    <Form>
                        <div className='space-y-1'>
                            <Label htmlFor='username'>Username</Label>
                            <Field name="username" component={FormikInput} />
                            <ErrorMessage component="div" name="username" />
                        </div>
                        <div className='space-y-1'>
                            <Label htmlFor='user_password'>password</Label>
                            <Field name="user_password" component={FormikInput} type="password" />
                            <ErrorMessage component="div" name="user_password" />
                        </div>
                        <div className='space-y-1'>
                            <Label htmlFor='confirm_password'>Confirm password</Label>
                            <Field name="confirm_password" component={FormikInput} type="password" />
                            <ErrorMessage component="div" name="confirm_password" />
                        </div>
                        <div className='space-y-1'>
                            <Label htmlFor='user_email'>Email</Label>
                            <Field name="user_email" component={FormikInput} />
                            <ErrorMessage component="div" name="user_email" />
                        </div>
                        <div className='space-y-1'>
                            <Label htmlFor='user_fullname'>Full Name</Label>
                            <Field name="user_fullname" component={FormikInput} />
                            <ErrorMessage component="div" name="user_fullname" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Field name="user_agree" component={FormikCheckBox} />
                            <label
                                htmlFor='user_agree'
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                I agree to all the Terms and Privacy policy.
                            </label>
                        </div>
                        <Button>Sign up</Button>
                    </Form>
                </Formik>
            </CardContent>

            <CardFooter>
                <div className='relative flex py-5 items-center w-full'>
                    <div className='flex-grow border-t border-white'></div>
                    <span className='flex-shrink mx-4 text-white'>
                        Or Login With
                    </span>
                    <div className='flex-grow border-t border-white'></div>
                </div>
                {/* Google, etc button */}
            </CardFooter>
        </Card >
    );
};

export default SignUp;
