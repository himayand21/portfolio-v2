import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ScrollToTop = (): null => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return (() => {
      unlisten();
    });
  }, []);

  return null;
};

export default ScrollToTop;
