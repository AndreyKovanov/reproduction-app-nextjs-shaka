import React, { FC } from 'react';
import dynamic from 'next/dynamic';

const ShakaPlayer = dynamic(() => import('./ShakaPlayer').then((module) => module.ShakaPlayer), { ssr: false });


interface VideoPlayerProps {
  src: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ src }) => {
  return (
    <ShakaPlayer src={src} />
  );
}
