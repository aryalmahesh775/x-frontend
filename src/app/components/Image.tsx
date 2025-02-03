"use client";
import React from "react";
import { IKImage } from "imagekitio-next";

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?:boolean
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, w, h, alt, className, tr }: ImageType) => {
  return (
    <div>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={path}
        // width={w}
        // height={h}
        // transformation={[{width:`${w}`, height:`${h}`}]}
        {...(tr
             ? {transformation: [{width:`${w}`, height:`${h}`}]}
             : {width:w, height:h}
            )}
        alt={alt}
        className={className}
      />
    </div>
  );
};

export default Image;
