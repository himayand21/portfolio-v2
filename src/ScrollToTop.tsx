/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from './constants';

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        if (lazyImage instanceof HTMLImageElement) {
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.dataset.src = '';
            lazyImage.classList.remove('lazy');
          }
        }
        observer.unobserve(lazyImage);
      }
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname === ROUTES.PROJECTS) {
      const lazyImages = document.querySelectorAll('img.lazy') as NodeListOf<HTMLElement>;
      lazyImages.forEach((img) => {
        observer.observe(img);
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
