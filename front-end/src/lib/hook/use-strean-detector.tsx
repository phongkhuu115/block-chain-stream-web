import { useEffect, useState } from 'react';


const useStreamDetector = (url: string) => {
    const [isStream, setIsStream] = useState(false);

    useEffect(() => {
        const checkStream = async () => {
            const res1 = await fetch(url);
            const data1 = await res1.text();

            setTimeout(() => { }, 1000);

            const res2 = await fetch(url);
            const data2 = await res2.text();

            setIsStream(data1 !== data2);

        };

        checkStream();
    }, [url]);

    return isStream;
};

export default useStreamDetector;