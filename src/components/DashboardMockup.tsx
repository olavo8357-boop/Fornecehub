import React, { useEffect } from 'react';

export const DashboardMockup: React.FC = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/19a43588-4761-4cfd-9556-c2bf18931c0f/players/6af4ae8caafdc81a284b8dbf/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <vturb-smartplayer id="vid-6af4ae8caafdc81a284b8dbf" style={{ display: 'block', margin: '0 auto', width: '100%' }}>
        <div className="vturb-player-placeholder" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0', zIndex: 0, backgroundColor: 'black' }}></div>
      </vturb-smartplayer>
    </div>
  );
};
