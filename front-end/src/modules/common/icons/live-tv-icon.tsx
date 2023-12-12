import React from "react";

type Props = {};

const LiveTVIcon = (props: Props) => {
  return (
    <svg
      width="39"
      height="40"
      viewBox="0 0 39 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect y="0.5" width="39" height="39" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_9_64" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_9_64"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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10mwbp3ZgAHec4TS4ibALLOqKu8I5dWvn/Tww7zDHBbr1FG47TbprLO8syTPp59Kxx8fwi23eCdBaVEAZNqnn3onKLvQrZv0+OMWd9rJOwp8WGzUSOGRR6STTvLOkjwffST17BnCQw95J0HpUQBk2jvveCdwEfbbT3ruObM99/SOgvLKvzPiiSekI47wzpI8ixbJuncP4dlnvZOgPLgzOsPMcjlp1Sopq6/UffddqXfvEGbP9k6C0jNr3Vp69FGJd0Z81euvS716hTBvnncSlA8nABkWQozSiy965/Cz667S5Mlmhx7qnQSlZdahg/T002z+GzNrltStG5t/9lAAZN4TT3gn8LXDDtKjj5r16eOdBKVh8YAD8pv/rrt6Z0mep56SHXZYCAsXeidB+VEAZN6DD3on8LfddtI//mF26qneSVBcZscco/DEE1KTJt5Zkufee6XevUPuk0+8kwBwYvHVV72fOk6GGM2GDPGeDxSH2YABlfOq62IbN85izZrecwTAmdn553svR8kyfLj3nKAwZoMH09p3U0aOpDU2AEkbXgq0aJH3spQs//u/+ackkDZmw4Z5f3uSKUazoUO95wdAwuR/MeGLbr/dYu3a3nODLWNWo4bZddd5f2uSqarKbOBA7zkCkED5vugvvOC9TCVOfPxxi9tv7z0/2DyLtWub3XGH99clmdasMevXz3uOACSY2be+xU1TGxGfe86Mu8iTyuL221ucONH7a5JMH39s8fDDvecIQAqY/fSn3ktWMr3yisVvfMN7fvBFZjvuaPFf//L+diTTokVm++zjPUcAUsTi9dd7L13JNH++Wbt23vODPIu772722mve34pEim++ybsuAGy1/M1Ut93mvYYl07JlZgcf7D1HWWfWvr3ZO+94fxuSadYss1128Z4jACmVLwJuv917KUukuHKlxaOO8p6jrLK4//4Wly71/hokEverACgGizVrWvzrX73XtGRau9asf3/vOcoasx49zJYv9579ZHrgAbN69bznCECFMAvB4p/+5L20JVN1tcUf/9h7jrLC7IQT8o+04atuvtlirVrecwSgAtFdbXNGjvSen0qXfzpl/XrvmU6mq66iayWAkjI788x8RzF81dVXswiXBsXnpsTIeysAlI3Z8cebrV7tvfQl0y23cAxbPPnLT5df7j2ryVRdbfajH3nPEYCMMeve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"
        />
      </defs>
    </svg>
  );
};

export default LiveTVIcon;