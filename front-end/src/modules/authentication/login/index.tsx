import { LoginSchema } from "@lib/constant/validation";
import { Label } from "@radix-ui/react-label";
import clsx from "clsx";
import { useAuth } from "context/auth-context";
import { Field, Form, Formik } from "formik";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../../common/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter } from "../../common/components/ui/card";
import { FormikCheckBox, FormikErrorMessage, FormikInput } from "../formik-comps";
import "./index.scss";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const initLogin = {
  username: '',
  user_password: '',
  user_remember: false,
};

const Login: React.FC<Props> = ({ className, ...prop }: Props) => {
  const { handleAuth } = useAuth();

  return (
    <Card className={clsx('border-none', className)}  {...prop}>
      <Formik
        initialValues={initLogin}
        onSubmit={(values) => handleAuth(values)}
        validationSchema={LoginSchema}

      >
        {({ submitForm, isSubmitting }) => (
          <CardContent className='space-y-2 pt-6 pb-0 flex flex-col gap-2'>
            <Form onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitForm();
              }
            }}
            >
              <div className='space-y-1 py-2'>
                <Label htmlFor='username'>Username</Label>
                <Field name="username" type="text" className="rounded-2xl" as={FormikInput} />
                <FormikErrorMessage name="username" />
              </div>
              <div className='space-y-1 py-2'>
                <Label htmlFor='user_password'>Password</Label>
                <Field name="user_password" type="password" className="rounded-2xl" as={FormikInput} />
                <FormikErrorMessage name="user_password" />
              </div>

              <CardDescription className="!m-0">
                <Link href='/'>Forgot password?</Link>
              </CardDescription>

              <div className='flex py-3 items-center space-x-2'>
                <Field name="user_remember" as={FormikCheckBox} />
                <label htmlFor='user_remember' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  Remember me
                </label>
              </div>
            </Form>
            <Button disabled={isSubmitting ? true : false} className="!bg-primary hover:!bg-primary-100" onClick={submitForm} type='submit'>
              {isSubmitting ? <Loader2Icon className="animate-spin" /> : 'Login'}
            </Button>

          </CardContent>
        )}
      </Formik >
      <CardFooter>
        <div className='relative flex py-5 items-center w-full'>
          <div className='flex-grow border-t border-white'></div>
          <span className='flex-shrink mx-4 text-white'>
            Or Login With
          </span>
          <div className='flex-grow border-t border-white'></div>
        </div>
      </CardFooter>
    </Card >

  );
};

export default Login;
