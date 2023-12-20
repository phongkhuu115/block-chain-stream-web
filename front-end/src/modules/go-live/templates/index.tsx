'use client';

import View from '@modules/stream-view/view-videojs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card';
import { useState } from 'react';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { Input } from '@modules/common/components/ui/input';
import { Label } from '@modules/common/components/ui/label';
import { Button } from '@modules/common/components/ui/button';
import { RTMP_LINK } from '@lib/helpers/env-provider';
import { useAuth } from 'context/auth-context';
import { CommentSchema, VideoSchema } from '@lib/constant/validation';
import { FormikInput, FormikInputWithAction } from '@modules/authentication/formik-comps';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import AlertLogin from '@modules/settings/profile/alert-login';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Play } from 'lucide-react';

type GoLiveVideoProps = {
  video_owner: string;
  video_name: string;
  video_type: string;
  video_status: string;
  video_thumbnail: string;
}


const GoLivePageTempalate = () => {
  const [url, setURL] = useState<string>();
  const socket = io('https://nt208-g4.site');
  const currentPath = usePathname();
  const { user } = useAuth();

  const initMessage = {
    video_owner: user.user_id,
    video_name: '',
    video_type: 'stream',
    video_status: 'live',
    video_thumbnail: '',
  } as GoLiveVideoProps;

  const handleGoLive = async (data: GoLiveVideoProps, helper: FormikHelpers<GoLiveVideoProps>) => {
    console.log('data: ', data);
    
  };

  socket.on(`preview_${user.user_id}`, (url) => {
    setURL(url);
  });

  return (
    <main className='container center-item h-screen'>
      {
        user.user_id ?
          (
            <div className='flex gap-2'>
              <Card className='basis-1/5'>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription>
                    Connect your stream application with stream key below to start
                  </CardDescription>
                </CardHeader>
                <CardContent>{url && <View url={url}></View>}</CardContent>
              </Card>

              <Card className='basis-3/5'>

                <CardHeader>
                  <CardTitle>Set up your live streaming software</CardTitle>
                  <CardDescription>
                    Copy and paste this stream key into the live streaming software
                    you're using.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor='key'>Stream Key</Label>
                    <Input id='key' defaultValue={user.user_id} readOnly />
                  </div>
                  <div>
                    <Label htmlFor='rtmp'>Server URL</Label>
                    <Input id='rtmp' defaultValue={RTMP_LINK} readOnly />
                  </div>
                </CardContent>
              </Card>

              <Card className='basis-1/5'>
                <div className="flex flex-col gap-2 w-full h-full center-item">
                  <CardContent className='p-3'>
                    <Formik
                      initialValues={initMessage}
                      onSubmit={(values, helper) => handleGoLive(values, helper)}
                      validationSchema={VideoSchema}
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
                            <div className='flex flex-col h-full gap-2'>
                              <Field
                                name="video_name"
                                label="Video Title"
                                component={FormikInput}
                                placeholder="Video title"
                                autoComplete="off"
                              />
                              <Field
                                type="file"
                                name="video_thumbnail"
                                label="Thumbnail"
                                component={FormikInput}
                                placeholder="Thumbnail link"
                                autoComplete="off"
                                className="w-full"
                              />
                              <div className='w-full flex gap-2'>
                                <button onClick={(e) => {
                                  const button = e.target as HTMLButtonElement;
                                  button.classList.toggle("potato__button--active");
                                }} className="potato__button">
                                  <span className="w-full h-full">
                                    <Play className="w-6 h-6" />
                                  </span>
                                </button>
                              </div>
                            </div>


                            {/* <div>
                      <Label htmlFor='name'>Title</Label>
                      <Input id='name' />
                    </div>
                    <div>
                      <Label htmlFor='thumbnail'>Thumbnail</Label>
                      <Input id='thumbnail' />
                    </div>
                 */}

                          </Form>
                        )
                      }}
                    </Formik >
                  </CardContent>
                </div>
              </Card>
            </div>
          )
          :
          (
            <div className='min-w-[40vw]'>
              <AlertLogin fallbackPath={currentPath} />
            </div>
          )
      }
    </main>
  );
};

export default GoLivePageTempalate;
