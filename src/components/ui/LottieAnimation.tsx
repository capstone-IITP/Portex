'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface LottieAnimationProps {
  src: string;
  width?: string;
  height?: string;
  background?: string;
  speed?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({
  src,
  width = '100%',
  height = '300px',
  background = 'transparent',
  speed = '1',
  loop = true,
  autoplay = true
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Only run once per component instance
    if (initialized.current) return;
    initialized.current = true;

    // Create a div to hold loading state until animation is ready
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <div style="
          width: 100%; 
          height: 100%; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          background: ${background};
          border-radius: 12px;
        ">
          <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          ">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            <div class="text-white text-sm">Loading animation...</div>
          </div>
        </div>
      `;
    }
  }, [background]);

  return (
    <>
      <Script 
        id="dotlottie-player-script"
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" 
        type="module"
        onReady={() => {
          // This runs when the script has loaded
          // We need to do this with a slight delay to ensure the component is defined
          setTimeout(() => {
            if (containerRef.current) {
              // Clear the container
              containerRef.current.innerHTML = '';
              
              // Create a new wrapper div
              const wrapper = document.createElement('div');
              wrapper.style.width = width;
              wrapper.style.height = height;
              containerRef.current.appendChild(wrapper);

              // Use innerHTML to add the custom element
              // This avoids TypeScript complaining about the custom element
              wrapper.innerHTML = `
                <dotlottie-player
                  src="${src}"
                  background="${background}"
                  speed="${speed}"
                  style="width: 100%; height: 100%;"
                  ${loop ? 'loop' : ''}
                  ${autoplay ? 'autoplay' : ''}
                ></dotlottie-player>
              `;
            }
          }, 100);
        }}
      />
      <div ref={containerRef} style={{ width, height }}></div>
    </>
  );
} 