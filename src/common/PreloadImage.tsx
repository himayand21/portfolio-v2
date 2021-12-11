import { useEffect, useState, ReactElement } from 'react';

type PreloadImageProps = {
  src: string,
  children: JSX.Element,
};

const PreloadImage = ({
  src = '',
  children,
}: PreloadImageProps): ReactElement | null => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();

    image.onload = () => {
      setLoaded(true);
    };

    image.src = src;
  }, []);

  if (!loaded) return null;
  return (
    <>
      {children}
    </>
  );
};

export default PreloadImage;
