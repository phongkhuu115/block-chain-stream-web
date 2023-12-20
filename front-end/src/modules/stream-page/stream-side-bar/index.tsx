import { buttons } from '@lib/constant/profile-side-bar-buttons';
import useStreamDetector from '@lib/hook/use-stream-detector';
import { abbreviateNumber } from '@lib/utils';
import Avatar from '@modules/common/components/ui/avatar';
import clsx from 'clsx';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import './index.scss';

type Props = {
    data: Content[];
} & React.HTMLAttributes<HTMLDivElement>;


const StreamSideBar: React.FC<Props> = ({ className, data, ...props }: Props) => {
    const isLive = useStreamDetector("https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8");
    return (
        <section className={clsx("hidden large:flex flex-col w-64 dark:bg-gray-800  bg-[#f2f2f2] h-full rounded-lg  border-4  ", className)}>
            <div className="flex items-center justify-center h-16 dark:bg-gray-900 bg-[#f2f2f2] rounded-lg">
                <span className="dark:text-white font-bold uppercase">RECOMMENDED CHANNELS</span>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <ul className="flex-1 px-2 py-4 bg-gray-800">
                    {

                        data.map((item, index) => (
                            <Link key={index} href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <li className=" w-full">
                                    <div className="p-2 sm:p-4 w-full">
                                        <div className="flex items-center w-full justify-between">
                                            <Avatar className='w-12 h-12' src={item?.video?.author?.avatar[0].url} alt={item?.video?.author?.title} />
                                            <div className="flex flex-col  ml-2  max-w-[100px] text-left">
                                                <span className="text-sm font-medium text-gray-100 truncate">{item?.video?.author?.title}</span>
                                                <span className="text-sm font-light text-gray-400 truncate" >{item?.video?.author?.title}</span>
                                                <div />
                                            </div>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div>{isLive ? (<Dot className='text-red-600' strokeWidth={10} size={24} />) : ((<Dot className='text-gray-400' size={24} strokeWidth={10} />))}</div>
                                                <div>{abbreviateNumber(item?.video?.stats?.viewers)}</div>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default StreamSideBar;

