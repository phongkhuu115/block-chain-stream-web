import { LoginSchema, SignupSchema } from '@lib/constant/validation';
import { Checkbox } from '@radix-ui/react-checkbox';
import { Label } from '@radix-ui/react-label';
import clsx from 'clsx';
import { useAuth } from 'context/auth-context';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import { Button } from '../../common/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from '../../common/components/ui/card';
import { FormikInput } from '../formik-fields';

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const initLogin = {
  username: '',
  user_password: '',
};

const Login: React.FC<Props> = ({ className, ...prop }: Props) => {
  const { handleAuth } = useAuth();

  return (
    <Card className={clsx('border-none', className)} {...prop}>
      <CardContent className='space-y-2'>
        <Formik
          initialValues={initLogin}
          onSubmit={(values) => handleAuth(values)}
          validationSchema={LoginSchema}>
          <Form>
            <div className='space-y-1'>
              <Label htmlFor='username'>Username</Label>
              <Field name='username' type='text' as={FormikInput} />
              <ErrorMessage
                name='username'
                component='div'
                className='text-red-500'
              />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='password'>password</Label>
              <Field name='user_password' type='password' as={FormikInput} />
              <ErrorMessage
                name='user_password'
                component='div'
                className='text-red-500'
              />
            </div>
            <CardDescription>
              <Link href='/'>Forgot password?</Link>
            </CardDescription>
            <div className='flex items-center space-x-2'>
              <Checkbox id='remember' />
              <label
                htmlFor='terms'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Remember me
              </label>
            </div>
            <Button type='submit'>Login</Button>
          </Form>
        </Formik>
      </CardContent>
      <CardFooter>
        <div className='relative flex py-5 items-center w-full'>
          <div className='flex-grow border-t border-white'></div>
          <span className='flex-shrink mx-4 text-white'>Or Login With</span>
          <div className='flex-grow border-t border-white'></div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Login;
