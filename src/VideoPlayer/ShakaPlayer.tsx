import React, { FC, useEffect, useRef, useState } from 'react';
import shaka from 'shaka-player/dist/shaka-player.ui';
import { playerErrorHandler, videoElementErrorHandler } from './handlers';

import 'shaka-player/dist/controls.css';

interface ShakaPlayerProps {
  src: string;
}

export const ShakaPlayer: FC<ShakaPlayerProps> = ({ src }) => {
  const uiContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [player, setPlayer] = useState<shaka.Player|null>(null);
  const [ui, setUi] = useState<shaka.ui.Overlay | null>(null);
  
  useEffect(() => {
    shaka.polyfill.installAll();
    shaka.polyfill.PatchedMediaKeysApple.install();

    return () => {
      if (player) {
        player.destroy();
      }

      if (ui) {
        ui.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current || !uiContainerRef.current) {
      return undefined;
    }

    const player = new shaka.Player();
    player.attach(videoRef.current);
    setPlayer(player);

    const ui = new shaka.ui.Overlay(
      player,
      uiContainerRef.current,
      videoRef.current
    );
    setUi(ui);

    player.addEventListener('error', playerErrorHandler);
    videoRef.current.addEventListener('error', videoElementErrorHandler);
  }, []);

  useEffect(() => {
    if (player && src) {
      // Safari needs some time to break polyfill
      setTimeout(() => {
        player.load(src);
      }, 3000)
    }
  }, [player, src]);

  return (
    <div ref={uiContainerRef}>
      <video
        ref={videoRef}
        style={{
          maxWidth: '100%',
          width: '100%'
        }}
      />
    </div>
  );
}
