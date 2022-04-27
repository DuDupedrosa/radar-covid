import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function handleResize() {
      const sizeWindow = window.matchMedia(media);
      setMatch(sizeWindow.matches);
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return match;
};

export default useMedia;
