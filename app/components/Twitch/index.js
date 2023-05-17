'use client';

import React, { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

const Twitch = ({ className }) => {
  const embed = useRef();

  const handleReady = e => {
    embed.current = e;
  };

  return (
    <div className={className}>
      <TwitchEmbed
        channel="phrakturemusic"
        autoplay
        muted
        onReady={handleReady}
        darkMode
        withChat
        width="100%"
      />
    </div>
  );
};

export default Twitch;
