import { useEffect } from 'react';

const pastelColors = [
  "#8DAF94", // soft green
  "#A9BDE7", // soft blue
  "#E89D91", // soft red
  "#F7DB92"  // soft yellow
];

export function useHeroPulseColor(isHeroVisible) {
  useEffect(() => {
    // When Hero is NOT visible — set to warm gray instantly
    if (!isHeroVisible) {
      document.documentElement.style.setProperty('--animated-pulse-color', '#d8d3ce');
      return;
    }

    // When Hero BECOMES visible — fade in the first pastel, then start loop
    let i = 0;

    // Set first pastel color immediately (but allow transition to do its thing)
    document.documentElement.style.setProperty('--animated-pulse-color', pastelColors[i]);

    // Start cycling after short delay to soften re-entry
    const interval = setInterval(() => {
      i = (i + 1) % pastelColors.length;
      document.documentElement.style.setProperty('--animated-pulse-color', pastelColors[i]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHeroVisible]);
}
