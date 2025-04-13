import { useEffect, useState } from 'react';

export function useHeroVisibility() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
          setIsHeroVisible(entry.isIntersecting);
        },
        {
          root: null,
          threshold: 1,
          rootMargin: '0px 0px 5px 0px'
        }
      );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return isHeroVisible;
}
