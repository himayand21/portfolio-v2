/* eslint-disable no-param-reassign */
import {
  useEffect, ReactElement, RefObject,
} from 'react';

type PreloadImageProps = {
  children: JSX.Element,
  imageRef: RefObject<HTMLImageElement>
};

const PreloadImage = ({
  children,
  imageRef,
}: PreloadImageProps): ReactElement => {
  useEffect(() => {
    if (imageRef.current) {
      if (!imageRef.current.complete) {
        imageRef.current.style.opacity = '0';
        imageRef.current.onload = () => {
          if (imageRef.current) {
            imageRef.current.style.opacity = '1';
          }
        };
      }
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default PreloadImage;
