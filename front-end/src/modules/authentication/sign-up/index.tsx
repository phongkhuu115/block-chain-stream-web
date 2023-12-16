
// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute
import { SignupSchema } from "@lib/constant/validation";
import { Label } from "@radix-ui/react-label";
import clsx from 'clsx';
import { useAuth } from "context/auth-context";
import { ConnectedFocusError } from "focus-formik-error";
import {
    Field,
    Form,
    Formik
} from 'formik';
import React from "react";
import { Button } from "../../common/components/ui/button";
import { Card, CardContent, CardFooter } from "../../common/components/ui/card";
import { FormikCheckBox, FormikErrorMessage, FormikInput } from "../formik-comps";
import { Loader2Icon } from "lucide-react";

type Props = {

} & React.HTMLAttributes<HTMLDivElement>;

const initSignUp = {
    user_id: '',
    username: '',
    user_password: '',
    user_fullname: '',
    user_email: '',
    user_stream_key: '',
    user_avatar: '',
    user_role: '',
    confirm_password: '',
    user_agree: false,
};

const SignUp: React.FC<Props> = ({ className, ...props }: Props) => {
    const { handleAuth } = useAuth();

    return (
        <Card className={clsx(className, "border-none")}  {...props}>
            <Formik
                initialValues={initSignUp}
                onSubmit={(values) => handleAuth(values)}
                validationSchema={SignupSchema}
            >
                {({ submitForm, isSubmitting }) => (
                    <CardContent className='space-y-2 pt-6 pb-0 flex flex-col gap-2'>
                        <ConnectedFocusError />
                        <Form>
                            <div className='space-y-1 py-2'>
                                <Label htmlFor='username'>Username</Label>
                                <Field
                                    name="username"
                                    className="rounded-2xl"
                                    autoComplete="username"
                                    component={FormikInput} />
                                <FormikErrorMessage name="username" />
                            </div>
                            <div className='space-y-1 py-2'>
                                <Label htmlFor='user_password'>Password</Label>
                                <Field
                                    name="user_password"
                                    className="rounded-2xl"
                                    type="password"
                                    autoComplete="password webauthn"
                                    component={FormikInput} />
                                <FormikErrorMessage name="user_password" />
                            </div>
                            <div className='space-y-1 py-2'>
                                <Label htmlFor='confirm_password'>Confirm password</Label>
                                <Field
                                    name="confirm_password"
                                    className="rounded-2xl"
                                    type="password"
                                    autoComplete="password webauthn"
                                    component={FormikInput} />
                                <FormikErrorMessage name="confirm_password" />
                            </div>
                            <div className='space-y-1 py-2'>
                                <Label htmlFor='user_email'>Email</Label>
                                <Field
                                    name="user_email"
                                    className="rounded-2xl"
                                    autoComplete="email"
                                    component={FormikInput} />
                                <FormikErrorMessage name="user_email" />
                            </div>
                            <div className='space-y-1 py-2'>
                                <Label htmlFor='user_fullname'>Full Name</Label>
                                <Field name="user_fullname"
                                    className="rounded-2xl"
                                    autoComplete="name"
                                    component={FormikInput} />
                                <FormikErrorMessage name="user_fullname" />
                            </div>
                            <div className='flex flex-row gap-2 space-y-1 py-2'>
                                <Field
                                    name="user_agree"
                                    component={FormikCheckBox} />
                                <label
                                    htmlFor='user_agree'
                                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                    I agree to all the Terms and Privacy policy.
                                </label>
                            </div>
                        </Form>
                        <Button disabled={isSubmitting ? true : false} className="!bg-primary hover:!bg-primary-100" onClick={submitForm} type='submit'>
                            {isSubmitting ? <Loader2Icon className="animate-spin" /> : 'Sign Up'}
                        </Button>
                    </CardContent>
                )}
            </Formik>

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
